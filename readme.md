# JokesAPI

A RESTful API service that manages a collection of jokes. Built with Node.js, Express, and MongoDB.

## Features

- 📝 CRUD operations for jokes
- 🔍 Get all jokes
- ➕ Create new jokes
- 🔄 Update existing jokes
- ❌ Delete jokes
- 📂 Category-based joke organization
- ✨ Input validation and error handling
- 🚀 Modern async/await syntax
- 🔒 Duplicate joke prevention

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS

## API Endpoints

### Base URL
```
http://localhost:3000/jokesApi/v1
```

### Available Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /jokes   | Get all jokes |
| POST   | /jokes   | Create a new joke |
| PATCH  | /jokes   | Update a joke |
| DELETE | /jokes   | Delete a joke |

## Setup Instructions

1. Clone the repository
```bash
git clone <repository-url>
cd jokesAPI
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory with:
```env
PORT=3000
```

4. Start the MongoDB server locally

5. Run the development server
```bash
npm run dev
```

## API Usage Examples

### Get All Jokes
```bash
GET /jokesApi/v1/jokes
```

### Create New Joke
```bash
POST /jokesApi/v1/jokes
Content-Type: application/json

{
    "jokeCategory": "normal",
    "joke": "your joke text here"
}
```

### Update Joke
```bash
PATCH /jokesApi/v1/jokes
Content-Type: application/json

{
    "jokeId": "joke_id",
    "category": "normal",
    "update": "updated joke text"
}
```

### Delete Joke
```bash
DELETE /jokesApi/v1/jokes
Content-Type: application/json

{
    "jokeId": "joke_id"
}
```

## Data Model

### Joke Schema
```javascript
{
    jokeCategory: {
        type: String,
        enum: ["adult", "normal"],
        required: true
    },
    joke: {
        type: String,
        required: true,
        unique: true
    }
}
```

## Error Handling

The API includes robust error handling for:
- Duplicate jokes
- Invalid joke categories
- Missing required fields
- Non-existent jokes during updates/deletes

## License

ISC

## Author

Shaurya Kundan