## Description

App use PostgreSQL and docker to run PG image

## Installation

```bash
$ npm install
```

## Running the app

Run the docker:
```bash
docker-compose up -d
```
Run the seeds for postgresql:
```bash
npm run seed
```
Run the app:
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Logging

All logs about user schedule are stored in logs.txt, and overwritten after each app launch

## API 
Get all users:
```curl
curl --location --request GET 'http://localhost:3000/users' \
--header 'Content-Type: application/json' \
--data-raw '{
        "doctorId": 1,
        "userId": 2,
        "timeStart": "2022-02-16T12:30:00.000Z",
        "timeEnd": "2022-02-16T12:35:00.000Z"
}'
```

Get userById:
```curl
curl --location --request GET 'http://localhost:3000/users/1' \
--header 'Content-Type: application/json' \
--data-raw '{
        "doctorId": 1,
        "userId": 2,
        "timeStart": "2022-02-16T12:30:00.000Z",
        "timeEnd": "2022-02-16T12:35:00.000Z"
}'
```

Get all doctors:
```curl
curl --location --request GET 'http://localhost:3000/doctors' \
--header 'Content-Type: application/json' \
--data-raw '{
        "doctorId": 1,
        "userId": 2,
        "timeStart": "2022-02-16T12:30:00.000Z",
        "timeEnd": "2022-02-16T12:35:00.000Z"
}'
```

Get doctorById:
```curl
curl --location --request GET 'http://localhost:3000/doctors/1' \
--header 'Content-Type: application/json' \
--data-raw '{
        "doctorId": 1,
        "userId": 2,
        "timeStart": "2022-02-16T12:30:00.000Z",
        "timeEnd": "2022-02-16T12:35:00.000Z"
}'
```

Get all time-slots:

```curl
curl --location --request GET 'http://localhost:3000/time-slots' \
--header 'Content-Type: application/json' \
--data-raw '{
        "doctorId": 1,
        "userId": 2,
        "timeStart": "2022-02-16T12:30:00.000Z",
        "timeEnd": "2022-02-16T12:35:00.000Z"
}'
```

Get all time-slots for doctorId:

```curl
curl --location --request GET 'http://localhost:3000/time-slots/1' \
--header 'Content-Type: application/json' \
--data-raw '{
        "doctorId": 1,
        "userId": 2,
        "timeStart": "2022-02-16T12:30:00.000Z",
        "timeEnd": "2022-02-16T12:35:00.000Z"
}'
```

Delete time-slot by time-slot Id:

```curl
curl --location --request DELETE 'http://localhost:3000/time-slots/1' \
--header 'Content-Type: application/json' \
--data-raw '{
        "doctorId": 1,
        "userId": 2,
        "timeStart": "2022-02-16T12:30:00.000Z",
        "timeEnd": "2022-02-16T12:35:00.000Z"
}'
```

Add new time-slot:

```curl
curl --location --request POST 'http://localhost:3000/time-slots' \
--header 'Content-Type: application/json' \
--data-raw '{
        "doctorId": 1,
        "userId": 2,
        "timeStart": "2022-02-16T12:30:00.000Z",
        "timeEnd": "2022-02-16T12:35:00.000Z"
}'
```
