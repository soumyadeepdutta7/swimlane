# Swimlane Task Manager

## Overview

The **Swimlane Task Manager** is a task management application designed to help users manage and track their tasks through a swimlane view. The application allows users to add, edit, delete, and track tasks across three stages: "To Do," "In Progress," and "Done." It features drag-and-drop functionality for seamless task management and a user-friendly interface.

## Live Demo

You can view a live demo of the application at the following link:

[Live Demo](https://swimlane-management-app.netlify.app/)


## Features

- **Drag-and-Drop Functionality**: Move tasks between different stages using drag-and-drop.
- **Add, Edit, and Delete Tasks**: Easily add new tasks, edit existing ones, and delete tasks.
- **Search Filtering**: Quickly find tasks using the search functionality.
- **Color-Coded Status**: Tasks are color-coded based on their status for easy identification.
- **Responsive Design**: The application is designed to be fully responsive and visually appealing.

## Technologies Used

- **Frontend**: React.js with Chakra UI, Vite for the build tool.
- **State Management**: Redux with Redux Toolkit.
- **Drag-and-Drop**: React DnD.
- **Backend**: Mocked (No real backend integration).

## Installation

To get started with the Swimlane Task Manager locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/soumyadeepdutta7/swimlane.git

2. **Navigate to the Project Directory**:
   ```bash
   cd swimlane-ui

3. **Install Dependencies**:
   ```bash
   npm install

4. **Run the Application**:
   ```bash
   npm run dev


## Usage

### Adding a Task

1. Click the **"Add New Block"** button.
2. Fill in the task details in the modal and save.

### Editing a Task

1. Click the **edit icon** on a task to open the modal and make changes.

### Deleting a Task

1. Click the **delete icon** in the task details modal to remove the task.

### Moving Tasks

1. Drag and drop tasks between **"To Do," "In Progress,"** and **"Done"** columns.

### Searching Tasks

1. Use the **search input** to filter tasks by title.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **Chakra UI**: For providing a modern UI component library.
- **React DnD**: For the drag-and-drop functionality.
- **Redux Toolkit**: For efficient state management.

