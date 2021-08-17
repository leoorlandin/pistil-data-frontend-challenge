# Pistil Data - Frontend Challenge

<div align="center">
  <p align="center">
    <img alt="Repository languages count" src="https://img.shields.io/github/languages/top/leoorlandin/pistil-data-frontend-challenge?color=%#7BE0D9">
    <img alt="Repository top language" src="https://img.shields.io/github/languages/count/leoorlandin/pistil-data-frontend-challenge?color=%#7BE0D9">
    <img alt="Repository size" src="https://img.shields.io/github/repo-size/leoorlandin/pistil-data-frontend-challenge?color=%#7BE0D9">
    <img alt="Repository last commit" src="https://img.shields.io/github/last-commit/leoorlandin/pistil-data-frontend-challenge?color=%#7BE0D9" />
  </p>
</div>

## About This Project

This project is a challenge proposed by the company Pistil Data to apply for a position as a frontend developer.

The application consists of a web page that loads a list of products with their respective characteristics. It is also possible to filter these products by: strain, strain type and brand.

Below you can see the application without inserting any filter and also inserting filter in the three available fields.


<image src="screenshots/all_results.jpg" width="100%" />
---
<image src="screenshots/filter_request.jpg" width="100%" />

## Running it locally

### Getting the server

first, you will need to make the backend run on your computer. To do this, go to this link and clone the repository [pistil-data-fake-api](https://github.com/leoorlandin/pistil-data-fake-api)

After that run:

1. Run `yarn` to install the dependecies;
2. Run `yarn start` to run projecto (it will be running on port 1922).

---

### With the server running, perform the following steps

To see the application you can check the first link above, but if you want, you can also run it locally by following the steps:
1. Run `yarn` to install the dependecies;
2. Run `yarn start` to run projecto (it will be running on port 3000).

## Technology choices

The main technologies used in the application are: React, TypeScript and Styled Components. they were chosen to complement each other. All this in to keep code readable and easy to maintain.

## Tech Debits / Improvements

- My priority in this application was to deliver the api response and create at least three accumulative filters using react's contextApi.

- Unfortunately based on the time I chose to take the challenge, I couldn't implement all of the suggested features.


- Based on that if, if I had more time to continue with the challenge, I would definitely focus on finishing all the proposed functionalities.

- After that I would spend some time improving the written code. In order to facilitate future necessary maintenance.

- Some code that was done in the final hours got a little more "raw", e.g the api methods. So this is a code example that I would definitely rewrite if I had more time.

- I would also take the time to write tests for the application and use StoryBook to create documentation for what was implemented.