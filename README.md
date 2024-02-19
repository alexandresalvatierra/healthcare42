<h1 align="center">Welcome to Healthcare42 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> A simple PERN project related to managing shifts and matching nurses with available job positions, , using Node with Typescript, React with Typescript, PostgreSQL, Kong API Gateway and Docker. I hope you have as much fun as I was doing in this journey.

## Manual Installation - Local Depelopment

Clone the repo:

```sh
git clone --depth 1 https://github.com/alexandresalvatierra/healthcare42.git
cd healthcare42
```

## How to Run

```sh
docker compose up
```

Wait a little bit for all application set up. After all process completed, go to <strong>HTTP</strong> directory, see those <strong>\*.http</strong> files that you can test all the requests using [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) VS Code plugin.

## Endpoints

- Front APP: http://localhost:8000/

- Microservices:

  - Node Shifts API: http://localhost:8000/api/shifts

    - [HTTP Shifts file](http/shifts.http)
    - Find all shifts: GET http://localhost:8000/api/shifts
    - Calculate overlap: POST http://localhost:8000/api/shifts/calculate-overlap

  - Node Nurses API: http://localhost:8000/api/nurses

    - [HTTP Nurses file](http/nurses.http)
    - Find All Remaining Spots: GET http://localhost:8000/api/nurses/remaining-spots
    - Find All Jobs Availability: GET http://localhost:8000/api/nurses/jobs-availability
    - Find All Jobs Recommendation: GET http://localhost:8000/api/nurses/jobs-recommendation

- PgAdmin: [http://localhost:16543](http://localhost:16543)
- Konga: [http://localhost:1337](http://localhost:1337)

### What could come next

There are few important activities to improve this project like:

- [ ] Unit Tests
- [ ] Integration Tests
- [ ] Improve the controller layers
- [ ] Include validations layers
- [ ] Improve nurse service including the same structure the shift service

## Author

👤 **Alexandre**

- Github: [@alexandresalvatierra](https://github.com/alexandresalvatierra)
- LinkedIn: [@https:\/\/br.linkedin.com\/in\/alexandre-salvatierra](https://linkedin.com/in/https://br.linkedin.com/in/alexandre-salvatierra)

## Show your support

Give a ⭐️ if this project helped you!
