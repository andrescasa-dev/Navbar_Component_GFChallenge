# Responsive Navigation Bar Challenge
This project is a solution for the [Great FrontEnd Navbar](https://www.greatfrontend.com/projects/challenges/navbar-component) to create a responsive and accessible navigation bar.

## Project Features

- **Responsive Design**: The navigation bar adjusts seamlessly between desktop, tablet, and mobile layouts.
- **Adaptive Hamburger Menu**: The menu collapses into a hamburger menu on smaller screens to maximize space and usability.
- **Interactive Elements**: All links and buttons display different states—default, hover, focus, and disabled—ensuring a polished user experience.
- **Accessibility Focused**: The solution is built with accessibility in mind, complying with WCAG guidelines and supporting various assistive technologies.

## Technologies Used

- **Vite**: For a fast and modern frontend build setup.
- **TypeScript**: Provides type safety and improved developer experience.
- **React**: Used for building the UI components.
- **Tailwind CSS**: For utility-first styling and rapid UI development.
- **Storybook**: For building, testing, and documenting UI components in isolation.

## Storybook and Testing

### Storybook
In this project, Storybook is configured with several useful addons:

- **`addon-a11y`**: for accessibility testing

- **`Chromatic`**: for visual testing


### Accessibility Focus

This project emphasizes creating an accessible navigation bar. Key accessibility considerations include:

- **Keyboard Navigation**: All interactive elements are fully navigable via keyboard, with visible focus states.
- **Screen Reader Support**: The navigation bar is fully usable with screen readers, providing clear navigation instructions. For testing it I use [Orca](https://help.gnome.org/users/orca/stable/index.html.en).
- **Touch Target Size**: All menu items and buttons are designed with adequate spacing and size to accommodate touch interactions.


## NPM Scripts

The project includes the following npm scripts for development and testing:

- **`dev`**: Runs the development server with Vite.
  
  ```bash
  npm run dev
  ```

- **`storybook`**: Starts the Storybook server to develop and test components in isolation.

  ```bash
  npm run storybook
  ```

- **`chromatic`**: Runs visual regression tests with Chromatic. Requires a Chromatic project token.

  ```bash
  npm run chromatic
  ```

## Getting Started

To run the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/Navbar_Component_GFChallenge.git
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. **Start Storybook**:

   ```bash
   npm run storybook
   ```

5. **Run Chromatic visual tests** (requires project token):

   ```bash
   npm run chromatic
   ```

## Project Brief

In this challenge, the goal is to develop a responsive navigation bar that adheres to design fidelity and accessibility standards. The navigation bar should:

- Display clear and clickable links for desktop users.
- Collapse into an adaptive hamburger menu for tablet and mobile users.
- Provide interactive states for all buttons and links.
- Transition smoothly between breakpoints for different screen sizes.
- Ensure accessibility with adequate touch target spacing and compatibility with screen readers.
