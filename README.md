
# Kanban Board

This project is a **Kanban Board** built using **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. The application features three columns: **Todo**, **In Progress**, and **Completed**, enabling efficient task management. 

It provides a modern development setup with hot module replacement (HMR) and an ESLint configuration to ensure code quality and a smooth development experience.

---

## Features

- **Task Management**: Add, move, and remove tasks across the three columns (Todo, In Progress, Completed).
- **Modern Development Stack**:
  - **React** for building the user interface.
  - **TypeScript** for type safety.
  - **Vite** for fast builds and HMR.
  - **Tailwind CSS** for rapid styling with utility-first CSS.
- **Customizable ESLint Configuration** to maintain clean and efficient code.
- **Fast Refresh** for immediate feedback during development.

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (>= 16.0.0)
- **npm** (>= 7.0.0) or **yarn** (>= 1.22.0)

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:mohitpanchal09/trycom-ai.git
   cd kanban-board
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open the application in your browser at `http://localhost:5173`.

---

## Tailwind CSS Configuration

This project uses **Tailwind CSS** for styling. The configuration is set up in the `tailwind.config.js` file. You can customize colors, fonts, and other utility classes as needed.

To extend the Tailwind configuration, update the `tailwind.config.js` file:

```js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1da1f2',
        secondary: '#14171a',
      },
    },
  },
  plugins: [],
};
```

---

## Project Structure

```plaintext
kanban-board/
├── src/
│   ├── components/      # Reusable UI components
│   └── icons        # icons
│   └── App.tsx          # Main application entry point
├── public/              # Static assets
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
├── eslint.config.js     # ESLint configuration
├── package.json         # Project metadata and dependencies
└── README.md            # Project documentation
```

---

## Expanding the ESLint Configuration

This project uses ESLint to enforce coding standards. For a production-grade application, you can extend the configuration as follows:

### Enable Type-Aware Rules

Update the top-level `parserOptions` property in `eslint.config.js`:

```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`.

### Add React-Specific Rules

Install and configure `eslint-plugin-react`:

```bash
npm install eslint-plugin-react --save-dev
```

Update `eslint.config.js`:

```js
import react from 'eslint-plugin-react';

export default tseslint.config({
  settings: { react: { version: '18.3' } },
  plugins: {
    react,
  },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```

---

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: For static typing and reducing runtime errors.
- **Vite**: For fast development builds and HMR.
- **Tailwind CSS**: For utility-first, responsive, and modern styling.
- **ESLint**: For code linting and adhering to best practices.

---

## Contribution

Contributions are welcome! If you’d like to improve this project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to add any additional details specific to your project!