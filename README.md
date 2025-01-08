# Dimazzi Food Delivery App

Welcome to **Dimazzi**, a modern and feature-rich **food delivery** application built using **React** and **TypeScript**. This project aims to provide a seamless user experience for ordering food online, with an intuitive UI and efficient state management.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Scripts](#scripts)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **User Authentication**: Sign up, log in, and log out with email-based authentication.
- **Restaurant Listing**: Browse nearby restaurants and their menus.
- **Food Ordering**: Add items to the cart, manage quantities, and place orders.
- **Order Tracking**: Real-time order updates and tracking.
- **Responsive Design**: Optimized for both mobile and desktop.
- **Dark Mode Support**: Toggle between light and dark themes.
- **Efficient State Management**: Leveraging Zustand for state management.
- **Type Safety**: Fully typed components and functions using TypeScript.

---

## Tech Stack

- **Frontend**: React, TypeScript
- **Routing**: React Router
- **State Management**: Zustand / React Query / Context API
- **Styling**: Chakra UI
- **API Handling**: Axios
- **Testing**: React Testing Library, Playwright

---

## Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

Make sure you have the following installed:

- **Node.js**: v14.x or later
- **npm** or **yarn** (preferred)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/exc1ut/dimmazzi
   cd dimazzi
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

---

## Running the App

To start the development server:

```bash
yarn dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Scripts

- **`dev`**: Runs the development server.
- **`build`**: Builds the project for production.
- **`start`**: Starts the production build.
- **`test`**: Runs the test suite.
- **`lint`**: Lints the code.

---

## Folder Structure

```
📦 dimazzi
├── 📂 public
├── 📂 src
│   ├── 📂 api          # API service handlers and request utilities
│   ├── 📂 config       # Configuration files (environment, constants)
│   ├── 📂 hoc          # Higher-order components
│   ├── 📂 hooks        # Custom React hooks
│   ├── 📂 img          # Static images and media
│   ├── 📂 lib          # External libraries and helper modules
│   ├── 📂 mocks        # Mock data for testing
│   ├── 📂 modules      # Business logic modules and reusable contexts
│   ├── 📂 pages        # Main pages and routes
│   ├── 📂 providers    # Global providers (theme, context, etc.)
│   ├── 📂 services     # Service layers for API calls
│   ├── 📂 stores       # Zustand stores for state management
│   ├── 📂 stories      # Storybook stories for components
│   ├── 📂 styles       # Global styles and themes
│   ├── 📂 theme        # Theme configuration (dark/light mode settings)
│   ├── 📂 ui           # Shared UI components (buttons, inputs, modals)
│   └── 📂 utils        # Utility functions
├── .env.example       # Environment variables template
├── package.json
└── README.md
```

---

## Contributing

Contributions are welcome! If you have ideas to improve the project, please feel free to open an issue or create a pull request.

### Steps to Contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request.

---

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute it as you see fit.

---

## Contact

For any inquiries or issues, feel free to reach out at **umid19999\@gmail.com**.

---

Enjoy using **Dimazzi** and happy coding!

