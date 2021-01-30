# Youcruit's frontend test

## Introduction

This assignment is very free. It's defenitely not a kind of "fill in the blanks"-test, quite the opposite. The only thing provided is a very basic backend, just a `db.json` file served with [json-server](https://www.npmjs.com/package/json-server). Your goal is to implement a frontend application in Vue or React, your choice.

## The application

### Overview

The application should be a very simple job matching app for truck drivers.

1. You choose a truck driver from a list (could be a simple dropdown) populated with data from the backend. For a choosen truck driver, a list will be rendered with all jobs whose requirments are met.
2. When clicking on a job in the list, a details view about the job well be shown.
3. From this view it is be possible to apply to the job.

### Select truck driver

The start page MUST have a way to select a truck driver. It can be a list, a dropdown, etc.

After selecting a truck driver, you MUST somehow be able to select another truck driver without reloading the page.

### Job list

All jobs whose requirments are met by the truck driver MUST show. No need to paginate the list (if you don't want to...)

The job list entries MUST contain:

- Job title
- Pay
- Whether or not the truck driver has applied to the job.

Clicking on a list entry MUST render a job details view.

### Job details view

The details view can be a page on a new route, a modal, or be presented within the list, however you feel appropriate.

The details view MUST at least show:

- Job title
- Company name
- Job description
- Pay

The details view MUST have a "Create application"-button if an application is not already registered for the truck driver, otherwise it MUST state that the truck driver has alredy applied. Clicking on the "Create application"-button MUST perform a REST call to register the application.

## Backend

Take a look in `db.json`.
The REST api is whatever `npm run start-server` gives you. Basically a CRUD api where you can do GET, PUT, POST, DELETE, PATCH and OPTIONS on all collections.

The backend has three collections:

1. `truckDrivers`: a list of truck drivers.
2. `jobs`: a list of, you guessed it, jobs.
3. `applications` a list of objects linking together truck drivers and jobs together with a time stamp when the application was created.

### Example of a backend call

`GET localhost:3000/truckDrivers`

**try it in e.g. postman, or just post the url into the browser**

## Requirements

- The application MUST be implemented in Vue or React.
- We favour Typescript over Javascript but you decide.
- Use any npm dependencies (and dev-dependencies) you want. All dependecies you add (except Vue or React) should be motivated (dev dependecies excluded). Use `documentation.md` for this.
- Please test your application. All tests MUST be executed by running `npm run test`
- `npm run start` MUST serve the application on localhost. The port it's served on should be printed out.
- You are free to use a bootstrap tool to spin upp the application e.g. `Vue CLI` or `Create React App`. However, commits containing generated code (not authored by you) MUST have a commit message containing the word `BOOTSTRAP`. These commits / files should not contain your own code, they will not be assessed.
- We will look at the git log, keep it tidy!
- Any description about the project; motivating dependencies you added or design decisions you think is worth mentioning etc. should be placed in a file `documentation.md` in the root of the project.
- Make sure you merged your solution to the `master` branch. If you do work on other branches, that's fine - they don't need to be deleted - but we will not look at them.

When we test the application we run:

1. `npm install`
2. `npm run start-server`
3. `npm run start` **_In another terminal_**

## How to get started

You need to have `node` and `npm` installed. Then fork this repository, run `npm install` and get started :)

## How to send in the assignement

The assignement can be checked in to a public git repo (e.g. github or gitlab) or it can be zipped and mailed to us. Make sure that the git repo is clean; all code should be committed.
