# Github Search App -- Backend

A simple application that lists all the GitHub repositories of a given user with Angular

The Backend is written in NodeJS and ExpressJS

## APIs
-> GetUserInfo - This API returns the basic information (name, email, location, etc) of the user

-> GetAllRepo - This API will return list of all the first 30 public repositories of the user with all the details.

-> GetRepoPage - This API will return list of all the repositories of the user with 10 repos per page.

## API Calls
-> GetUserName - http://localhost:4000/api/v1/userInfo/139vaibhav

-> GetAllRepo - http://localhost:4000/api/v1/repoInfo/139vaibhav

-> GetRepoPage - http://localhost:4000/api/v1/repoPageInfo/139vaibhav?page=1

## Hosted Link


## Development server
Run `npm run dev` for a dev server. Navigate to `http://localhost:4000/`.


