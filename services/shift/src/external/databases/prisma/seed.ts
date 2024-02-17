import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  await prisma.facilities.upsert({
    where: { facility_id: 100 },
    update: {},
    create: {
      facility_id: 100,
      facility_name: "Facility A",
    },
  });
  await prisma.facilities.upsert({
    where: { facility_id: 101 },
    update: {},
    create: {
      facility_id: 101,
      facility_name: "Facility B",
    },
  });
  await prisma.facilities.upsert({
    where: { facility_id: 102 },
    update: {},
    create: {
      facility_id: 102,
      facility_name: "Facility C",
    },
  });
  await prisma.jobs.upsert({
    where: { job_id: 210 },
    update: {},
    create: {
      job_id: 210,
      facility_id: 102,
      nurse_type_needed: "LPN",
      total_number_nurses_needed: 3,
    },
  });
  await prisma.jobs.upsert({
    where: { job_id: 209 },
    update: {},
    create: {
      job_id: 209,
      facility_id: 102,
      nurse_type_needed: "CNA",
      total_number_nurses_needed: 4,
    },
  });
  await prisma.jobs.upsert({
    where: { job_id: 208 },
    update: {},
    create: {
      job_id: 208,
      facility_id: 100,
      nurse_type_needed: "RN",
      total_number_nurses_needed: 1,
    },
  });
  await prisma.jobs.upsert({
    where: { job_id: 207 },
    update: {},
    create: {
      job_id: 207,
      facility_id: 101,
      nurse_type_needed: "CNA",
      total_number_nurses_needed: 1,
    },
  });
  await prisma.jobs.upsert({
    where: { job_id: 206 },
    update: {},
    create: {
      job_id: 206,
      facility_id: 101,
      nurse_type_needed: "LPN",
      total_number_nurses_needed: 2,
    },
  });
  await prisma.jobs.upsert({
    where: { job_id: 205 },
    update: {},
    create: {
      job_id: 205,
      facility_id: 100,
      nurse_type_needed: "RN",
      total_number_nurses_needed: 3,
    },
  });
  await prisma.jobs.upsert({
    where: { job_id: 204 },
    update: {},
    create: {
      job_id: 204,
      facility_id: 102,
      nurse_type_needed: "RN",
      total_number_nurses_needed: 2,
    },
  });
  await prisma.jobs.upsert({
    where: { job_id: 203 },
    update: {},
    create: {
      job_id: 203,
      facility_id: 102,
      nurse_type_needed: "LPN",
      total_number_nurses_needed: 2,
    },
  });
  await prisma.jobs.upsert({
    where: { job_id: 202 },
    update: {},
    create: {
      job_id: 202,
      facility_id: 100,
      nurse_type_needed: "CNA",
      total_number_nurses_needed: 2,
    },
  });
  await prisma.jobs.upsert({
    where: { job_id: 201 },
    update: {},
    create: {
      job_id: 201,
      facility_id: 101,
      nurse_type_needed: "LPN",
      total_number_nurses_needed: 1,
    },
  });
  await prisma.jobs.upsert({
    where: { job_id: 200 },
    update: {},
    create: {
      job_id: 200,
      facility_id: 100,
      nurse_type_needed: "RN",
      total_number_nurses_needed: 1,
    },
  });
  await prisma.nurses.upsert({
    where: { nurse_id: 1010 },
    update: {},
    create: {
      nurse_id: 1010,
      nurse_name: "Mark",
      nurse_type: "RN",
    },
  });
  await prisma.nurses.upsert({
    where: { nurse_id: 1009 },
    update: {},
    create: {
      nurse_id: 1009,
      nurse_name: "Robert",
      nurse_type: "LPN",
    },
  });
  await prisma.nurses.upsert({
    where: { nurse_id: 1008 },
    update: {},
    create: {
      nurse_id: 1008,
      nurse_name: "Cory",
      nurse_type: "RN",
    },
  });
  await prisma.nurses.upsert({
    where: { nurse_id: 1007 },
    update: {},
    create: {
      nurse_id: 1007,
      nurse_name: "Adam",
      nurse_type: "CNA",
    },
  });
  await prisma.nurses.upsert({
    where: { nurse_id: 1006 },
    update: {},
    create: {
      nurse_id: 1006,
      nurse_name: "Wesley",
      nurse_type: "RN",
    },
  });
  await prisma.nurses.upsert({
    where: { nurse_id: 1005 },
    update: {},
    create: {
      nurse_id: 1005,
      nurse_name: "Sam",
      nurse_type: "CNA",
    },
  });
  await prisma.nurses.upsert({
    where: { nurse_id: 1004 },
    update: {},
    create: {
      nurse_id: 1004,
      nurse_name: "Thomas",
      nurse_type: "LPN",
    },
  });
  await prisma.nurses.upsert({
    where: { nurse_id: 1003 },
    update: {},
    create: {
      nurse_id: 1003,
      nurse_name: "John",
      nurse_type: "LPN",
    },
  });
  await prisma.nurses.upsert({
    where: { nurse_id: 1002 },
    update: {},
    create: {
      nurse_id: 1002,
      nurse_name: "Abby",
      nurse_type: "RN",
    },
  });
  await prisma.nurses.upsert({
    where: { nurse_id: 1001 },
    update: {},
    create: {
      nurse_id: 1001,
      nurse_name: "Anne",
      nurse_type: "CNA",
    },
  });
  await prisma.nurses.upsert({
    where: { nurse_id: 1000 },
    update: {},
    create: {
      nurse_id: 1000,
      nurse_name: "Kevin",
      nurse_type: "CNA",
    },
  });
  await prisma.nurseHiredJobs.upsert({
    where: { job_id_nurse_id: { job_id: 210, nurse_id: 1004 } },
    update: {},
    create: {
      job_id: 210,
      nurse_id: 1004,
    },
  });
  await prisma.nurseHiredJobs.upsert({
    where: { job_id_nurse_id: { job_id: 209, nurse_id: 1001 } },
    update: {},
    create: {
      job_id: 209,
      nurse_id: 1001,
    },
  });
  await prisma.nurseHiredJobs.upsert({
    where: { job_id_nurse_id: { job_id: 208, nurse_id: 1006 } },
    update: {},
    create: {
      job_id: 208,
      nurse_id: 1006,
    },
  });
  await prisma.nurseHiredJobs.upsert({
    where: { job_id_nurse_id: { job_id: 207, nurse_id: 1005 } },
    update: {},
    create: {
      job_id: 207,
      nurse_id: 1005,
    },
  });
  await prisma.nurseHiredJobs.upsert({
    where: { job_id_nurse_id: { job_id: 206, nurse_id: 1010 } },
    update: {},
    create: {
      job_id: 206,
      nurse_id: 1010,
    },
  });
  await prisma.nurseHiredJobs.upsert({
    where: { job_id_nurse_id: { job_id: 206, nurse_id: 1003 } },
    update: {},
    create: {
      job_id: 206,
      nurse_id: 1003,
    },
  });
  await prisma.nurseHiredJobs.upsert({
    where: { job_id_nurse_id: { job_id: 205, nurse_id: 1008 } },
    update: {},
    create: {
      job_id: 205,
      nurse_id: 1008,
    },
  });
  await prisma.nurseHiredJobs.upsert({
    where: { job_id_nurse_id: { job_id: 204, nurse_id: 1008 } },
    update: {},
    create: {
      job_id: 204,
      nurse_id: 1008,
    },
  });
  await prisma.nurseHiredJobs.upsert({
    where: { job_id_nurse_id: { job_id: 204, nurse_id: 1006 } },
    update: {},
    create: {
      job_id: 204,
      nurse_id: 1006,
    },
  });
  await prisma.nurseHiredJobs.upsert({
    where: { job_id_nurse_id: { job_id: 203, nurse_id: 1004 } },
    update: {},
    create: {
      job_id: 203,
      nurse_id: 1004,
    },
  });
  await prisma.nurseHiredJobs.upsert({
    where: { job_id_nurse_id: { job_id: 202, nurse_id: 1007 } },
    update: {},
    create: {
      job_id: 202,
      nurse_id: 1007,
    },
  });
  await prisma.nurseHiredJobs.upsert({
    where: { job_id_nurse_id: { job_id: 201, nurse_id: 1003 } },
    update: {},
    create: {
      job_id: 201,
      nurse_id: 1003,
    },
  });
  await prisma.nurseHiredJobs.upsert({
    where: { job_id_nurse_id: { job_id: 200, nurse_id: 1006 } },
    update: {},
    create: {
      job_id: 200,
      nurse_id: 1006,
    },
  });
  await prisma.questionOneShifts.upsert({
    where: { shift_id: 1 },
    update: {},
    create: {
      shift_id: 1,
      facility_id: 100,
      shift_date: new Date("2022-10-01"),
      start_time: new Date("1970-01-01T07:00:00"),
      end_time: new Date("1970-01-01T15:30:00"),
    },
  });
  await prisma.questionOneShifts.upsert({
    where: { shift_id: 2 },
    update: {},
    create: {
      shift_id: 2,
      facility_id: 100,
      shift_date: new Date("2022-10-01"),
      start_time: new Date("1970-01-01T15:00:00"),
      end_time: new Date("1970-01-01T23:00:00"),
    },
  });
  await prisma.questionOneShifts.upsert({
    where: { shift_id: 3 },
    update: {},
    create: {
      shift_id: 3,
      facility_id: 100,
      shift_date: new Date("2022-10-03"),
      start_time: new Date("1970-01-01T15:00:00"),
      end_time: new Date("1970-01-01T23:00:00"),
    },
  });
  await prisma.questionOneShifts.upsert({
    where: { shift_id: 4 },
    update: {},
    create: {
      shift_id: 4,
      facility_id: 100,
      shift_date: new Date("2022-10-03"),
      start_time: new Date("1970-01-01T07:00:00"),
      end_time: new Date("1970-01-01T19:00:00"),
    },
  });
  await prisma.questionOneShifts.upsert({
    where: { shift_id: 5 },
    update: {},
    create: {
      shift_id: 5,
      facility_id: 101,
      shift_date: new Date("2022-10-02"),
      start_time: new Date("1970-01-01T23:00:00"),
      end_time: new Date("1970-01-01T07:30:00"),
    },
  });
  await prisma.questionOneShifts.upsert({
    where: { shift_id: 6 },
    update: {},
    create: {
      shift_id: 6,
      facility_id: 102,
      shift_date: new Date("2022-10-03"),
      start_time: new Date("1970-01-01T15:00:00"),
      end_time: new Date("1970-01-01T23:30:00"),
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
