## Requirements

* NodeJS
* MYSQL


## Getting started

### 1. install dependencies

Install npm dependencies:

```
npm install
```

### 2. Create and seed the database

Open .env and set DATABASE_URL with your own DB Connection

MYSQL Connection format:
```
mysql://USER:PASSWORD@HOST:PORT/DATABASE
```

Example:
```
DATABASE_URL="mysql://root:root@localhost:3306/restapi_db"
```

Run the following command to create your MYSQL database file. This also creates the `User` and `Post` tables that are defined in [`prisma/schema.prisma`](./prisma/schema.prisma):

```
npx prisma migrate dev --name init
```

When `npx prisma migrate dev` is executed against a newly created database, seeding is also triggered. The seed file in [`prisma/seed.js`](./prisma/seed.js) will be executed and your database will be populated with the sample data.


### 3. Start the Express server

Launch your Express server with this command:

```
npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000)
