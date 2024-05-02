## Newtrips-backend
This project runs an API using Neontech to build the database and and Render as a CI/CD.

## How to run locally
You can use the command: 

```bash
    npm run dev
```

## Call API on locally enviroment 
With the project integrated with Neontech, even locally call will be read and write on the same production database.
This project is on the early stages of development API and that's why we are using the same database.

The URL used on production is: [https://newtrips-backend.onrender.com](https://newtrips-backend.onrender.com).


## Authentication
On this early stage of the project we are not using any type of auth but it will be solved as soon as possible.

## CORS
For the early stage it's used a harded coded url to allowed frontend runs the API on locally enviroment.

## Improvements

- [ ] Add Authentication token to the API calls;
- [ ] Remove harded coded CORS;
- [ ] Add new Routes;
- [ ] Add pagination to the list endpoint;


## Bucket list
- [ ] Conver the API calls from REST API to Graphql;
