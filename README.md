# Task Manager

A simple and efficient Task Manager application built with React and Vite. This application allows users to manage their daily tasks with features like adding, deleting, toggling completion status, and filtering tasks.

## Features

-   **Add Tasks:** Easily add new tasks to your list.
-   **Task Management:** Mark tasks as completed or pending.
-   **Delete Tasks:** Remove tasks that are no longer needed.
-   **Filtering:** Filter tasks by status:
    -   All Tasks
    -   Pending Tasks
    -   Completed Tasks
-   **Persistence:** Tasks are saved to the browser's Local Storage, so you don't lose them on refresh.
-   **Responsive Design:** Optimized for Desktop, Tablet, and Mobile devices.
-   **Modern UI:** Clean interface styled with Tailwind CSS and Lucide React icons.

## Tech Stack

-   **Frontend Framework:** [React](https://react.dev/)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Utilities:** [UUID](https://github.com/uuidjs/uuid) for unique task IDs.

## Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd Task-Manager
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173` (or the port shown in your terminal).

## Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Button.jsx      # Reusable button component
│   ├── Input.jsx       # Input field for adding tasks
│   ├── LeftSide.jsx    # Sidebar for filtering tasks
│   ├── List.jsx        # Individual task item component
│   ├── Main.jsx        # Main content wrapper
│   ├── Nav.jsx         # Navigation bar / Header
│   └── RightSide.jsx   # Container for the task list
├── App.jsx             # Main application logic and state management
├── index.css           # Global styles and Tailwind imports
└── main.jsx            # Entry point
```