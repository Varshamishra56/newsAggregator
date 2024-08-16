# Global News Aggregator

This is a simple news aggregator application that fetches news articles from an external API and displays them on a frontend built with React. The application consists of a Node.js backend and a React frontend.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
- [Technologies Used](#technologies-used)
- [License](#license)

## Features

- Fetches top news headlines from the News API.
- Displays articles with title, description, and a link to read more.
- Supports dark mode.
- Provides category filtering and search functionality.
- Pagination to navigate through the articles.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js and npm
- Git

## Installation

### Backend Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Varshamishra56/NewsAggregatorReactApp.git
    cd NewsAggregatorReactApp
    ```


2. **Install necessary packages:**

    ```bash
    npm install express axios dotenv cors
    ```

3. **Create a `.env` file** in the backend directory to store your API key:

    ```plaintext
    NEWS_API_KEY=your_news_api_key_here
    ```
    
Get Your API Key From [https://newsapi.org/](https://newsapi.org/)

### Frontend Setup


1. **Installl Axios for making HTTP requests:**

    ```bash
    npm install axios
    ```


## Running the Application

### Running the Backend

1. **Navigate to the backend directory:**

    ```bash
    cd backend
    ```

2. **Run the server:**

    ```bash
    node server.js
    ```

    The backend server should be running on `http://localhost:5000`.

### Running the Frontend

1. **Navigate to the frontend directory:**

    ```bash
    cd client
    ```

2. **Start the React app:**

    ```bash
    npm start
    ```

    The React app should be running on `http://localhost:3000`.

## Technologies Used

- **Backend:** Node.js, Express, Axios, dotenv
- **Frontend:** React, Axios
- **Styling:** CSS

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
