
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Headless UI](https://img.shields.io/badge/Headless--UI-4B5563?style=for-the-badge&logo=headlessui&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

# Next.js Database Application for Games

## Introduction

This project is a simple Next.js application that serves as a database for games. It allows users to view game entries from the API https://softgenie.org/api/games. The application is built using Next.js for server-side rendering and optimized performance. It uses Material UI for beautiful styled components following Material design patterns.

The project is deployed here https://next-games-database.vercel.app for the time being.

## Features

- View a list of games
- Material UI is used for UI components
- Responsive design for mobile and desktop

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation
- **React**: A JavaScript library for building user interfaces
- **Headless UI**: For styling components
- **Tailwind CSS**: Utility-based CSS library to apply styling to the application
- **Axios**: For making HTTP requests to a backend API

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm.
- You have a basic understanding of JavaScript and React.

## Installation

To install the project, follow these steps:

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/next_games_database.git
    cd next_games_database
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Start the development server:

    ```sh
    npm run dev
    ```

## Usage

To use the application, follow these steps:

1. Open your browser and navigate to `http://localhost:3000`.
2. Browse the list of games.

## Screenshots

This is the games list page

![Screenshot](/screenshots/1.jpeg)

Screenshot of the image modal

![Screenshot](/screenshots/2.jpeg)

## Project Structure

After creating the project, your directory structure should look like this:

```
next_games_database/
├── node_modules/
├── screenshots/
├── public/
│   ├── favicon.ico
│   └── vercel.svg
|   |── next.svg
├── src/
│   ├── app/
│   ├── components/
|   ├── features/
│   ├── middleware.js
│   ├── store.js
│   ├── next.config.mjs
│   ├── .gitignore
│   ├── package.json
│   ├── README.md
│   └── next.config.js
```

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the development server.
- `npm run build`: Bundles the app into static files for production.
- `npm start`: Starts the production server.

## Contributing

Contributions are always welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Learn More

To learn more about Next.js and React, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

