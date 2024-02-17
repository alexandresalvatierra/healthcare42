const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");

const app = express();
const port = 4201;

const pool = new Pool({
  user: "admin",
  host: "postgres-db",
  database: "healthcare42",
  password: "pass",
  port: 5432,
});

app.use(bodyParser.json());

app.get("/remaining-spots", async (req, res) => {
  try {
    const query = `
      SELECT
        f.facility_id,
        f.facility_name,
        j.nurse_type_needed,
        j.total_number_nurses_needed - COUNT(nh.nurse_id) AS remaining_spots
      FROM
        "Facilities" f
      JOIN
        "Jobs" j ON f.facility_id = j.facility_id
      LEFT JOIN
        "NurseHiredJobs" nh ON j.job_id = nh.job_id
      GROUP BY
        f.facility_id,
        f.facility_name,
        j.nurse_type_needed,
        j.total_number_nurses_needed
      ORDER BY
        f.facility_id ASC,
        j.nurse_type_needed ASC;
    `;

    const { rows } = await pool.query(query);
    res.json(rows);
  } catch (error) {
    console.error("Error executing SQL query: " + error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/jobs-availability", async (req, res) => {
  try {
    const query = `
      SELECT
          n.nurse_id,
          n.nurse_name,
          n.nurse_type,
          COUNT(DISTINCT j.job_id) AS total_jobs_available
      FROM
          "Nurses" n
      JOIN
          "Jobs" j ON n.nurse_type = j.nurse_type_needed
      LEFT JOIN
          "NurseHiredJobs" nh ON n.nurse_id = nh.nurse_id AND j.job_id = nh.job_id
      LEFT JOIN
          (
              SELECT
                  jo.job_id,
                  total_number_nurses_needed - COUNT(nurse_id) AS remaining_spots
              FROM
                  "Jobs" jo
              LEFT JOIN
                  "NurseHiredJobs" nhj ON jo.job_id = nhj.job_id
              GROUP BY
                  jo.job_id, total_number_nurses_needed
          ) AS r ON j.job_id = r.job_id
      WHERE
          nh.nurse_id IS NULL OR r.remaining_spots > 0
      GROUP BY
          n.nurse_id, n.nurse_name, n.nurse_type
      ORDER BY
          n.nurse_id ASC;
    `;

    const { rows } = await pool.query(query);
    res.json(rows);
  } catch (error) {
    console.error("Error executing SQL query: " + error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/jobs-recommendation", async (req, res) => {
  try {
    const query = `
      SELECT
          j.job_id,
          j.facility_id,
          j.nurse_type_needed,
          nh.nurse_id
      FROM
          "Jobs" j
      JOIN (
          SELECT
              job_id,
              nurse_id,
              ROW_NUMBER() OVER (PARTITION BY job_id ORDER BY
                  COUNT(*) DESC,
                  MIN(nurse_id) ASC
              ) AS recommendation_rank
          FROM
              "NurseHiredJobs"
          GROUP BY
              job_id, nurse_id
      ) nh ON j.job_id = nh.job_id
      WHERE
          (j.total_number_nurses_needed - 
          COALESCE((
              SELECT COUNT(*) 
              FROM "NurseHiredJobs" 
              WHERE job_id = j.job_id
          ), 0)) > 0
          AND nh.recommendation_rank = 1
      ORDER BY
          j.job_id DESC;
    `;

    const { rows } = await pool.query(query);
    res.json(rows);
  } catch (error) {
    console.error("Error executing SQL query: " + error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
