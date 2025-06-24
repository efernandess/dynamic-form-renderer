# Dynamic Form Renderer

This is a TypeScript-based React application that dynamically renders forms based on a JSON schema, as per the requirements of the Perigord Senior Front End Developer Task. The project demonstrates schema-driven UI, form state management, validation, and a modular architecture.

## Features
- Dynamically renders form fields (text, number, checkbox, select, textarea, date) from a JSON schema.
- Manages form state internally using a custom hook (`useForm`).
- Displays submitted form data as formatted JSON.
- Validates required fields and displays error messages.
- Includes additional field types: `textarea` and `date`.
- Responsive design with Tailwind CSS.
- Unit tests for key components and the custom hook.
- Clean, modular architecture with reusable field components.
- Type-safe code with TypeScript.

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd dynamic-form-renderer
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the application in your browser (default: `http://localhost:5173`).
5. To run unit tests:
   ```bash
   npm test
   ```

## Technologies Used
- React 18
- TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- Jest + React Testing Library (unit tests)
- ESLint (code linting)

## Assumptions and Notes
- The schema is stored in `src/schema.json` and imported into the `App` component.
- Validation for required fields occurs on form submission, with error messages displayed below each field.
- The `date` field uses the native HTML5 date picker for simplicity.
- The `textarea` field is added as a bonus field type with a fixed height.
- Styling is minimal but responsive, ensuring usability on mobile and desktop.
- Unit tests cover the main functionality of the form, field rendering, and form state management.
- TypeScript is used for type safety, with interfaces defined in `src/types.ts`.

## Bonus Features Implemented
- Additional field types: `textarea` and `date`.
- Basic validation messages for required fields.
- Modular architecture with a custom `useForm` hook and reusable `FormField` component.
- Responsive design using Tailwind CSS.
- Unit tests for `DynamicForm`, `FormField`, and `useForm`.

---
Developed by Edson Fernandes
