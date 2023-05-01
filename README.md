## Description

App use PostgreSQL and docker to run PG image

## Installation

```bash
$ npm install
```

## Make changes

In case you need to do some changes in the code base, be aware that you remove and re-build folders: `dist` and `docker`

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
