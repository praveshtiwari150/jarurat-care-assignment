## Introduction

 This is a simple API built using Node.js and Express to manage a list of healthcare services.

## Setup:

- Run `npm install` to install the packages.
- Create a `.env` file and make the environment variables as demonstrated in `.env.example` file
- Run `npm run start` to start the project.
- Run `npm run dev` to run using `Nodemon`.

## API Endpoints

### 1.Add New Service

**Method:** POST  
**Endpoint:** `/add`

**Request Body:**

```json
{
    "serviceName": {
        "type": "String",
        "required": true
    },
    "description": {
        "type": "String",
        "required": true
    },
    "price": {
        "type": "String",
        "required": true
    }
}
```

**Example:**

```
    http://localhost:3000/add
```


### 2.Get all listed service

**Method:** GET

**Endpoint:** `/get-all`

**Example:**

```
    http://localhost:3000/get-all
```

### 3.Update existing service

**Method:** PUT

**Endpoint:** `/update/:id`

**Example:**

```
    http://localhost:3000/update/66eb0504206bca1447d110d3
```

### 4.Delete a service

**Method:** DELETE

**Endpoint:** `/remove/:id`

**Example:**

```
    http://localhost:3000/remove/66eb0504206bca1447d110d3
```

