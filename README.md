# Random Quote Generator

## Introduction

This is a backend application that acts as a RESTful API Server for displaying random quotes from the show The Office. 

This application is written using [NestJS](https://nestjs.com/), [TypeScript](https://www.typescriptlang.org/), [TypeORM](https://typeorm.io), and [SQLite](https://www.sqlite.org)

## Getting Started

Clone down this repository. You will need node installed globally on your machine.

Run `npm install` to install all dependencies.
Then run `npm run start` to start the application.

Connect to the API using Postman on port 3000. \
You can also just visit [http://localhost:3000](http://localhost:3000) on a web browser since this application currently only have `GET` requests

## API

`GET /`
* get string: *Hello World!*

`GET /quotes/`
* get all quotes

`GET /quotes/random`
* get a random quote

`GET /quotes/:id`
* get quote with quote_id

## Database Initialization

If the database `office_quotes.sql` is missing. You can initialize the database again by running `python3 initdb.py`. 

## Test

* Unit tests
`npm run test`
* End-to-end tests
`npm run test:e2e`
* Test coverage
`npm run test:cov`
