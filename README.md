# Burgers Restaurant Menu MVP

Welcome to the Burgers Restaurant Menu project, a React-based MVP designed to showcase the core functionalities of what promises to be a comprehensive restaurant application. This early version demonstrates essential features, serving as a foundation for future expansion into a full-fledged restaurant management and menu display solution.

## 🚀 Overview

This project offers a glimpse into a potential future application for restaurants, focusing on user interactions with the menu. You can browse items, view details, and customize your order by adding and removing items from the basket. While the current iteration emphasizes basic functionality, its architecture is poised for growth, anticipating more complex features like finalizing purchases, user profiles, and advanced customization.

To ensure reliability and cater to a global audience, we've integrated unit tests using the React Testing Library and implemented comprehensive internationalization for texts, times/dates, and money formats. These enhancements not only improve the application's quality and user experience but also lay a solid foundation for scaling to different markets and user preferences.

In an effort to maximize accessibility, the application has been deployed to an AWS S3 bucket, ensuring high availability and scalability. Additionally, the design is fully responsive, paving the way for this MVP to evolve into a Progressive Web App (PWA). This transformation would allow users on any mobile device to enjoy an app-like experience without the need to download a traditional application from an app store.

## Prerequisites

To explore this MVP, ensure you have the following installed on your computer:
- Node.js
- npm (Node Package Manager)

## 🛠 Installation and Setup

To get started, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/burgers-restaurant-menu.git
    ```

2. Navigate to the project directory:
    ```bash
    cd burgers-restaurant-menu
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

Now, the project should be running on your local development server, ready for exploration and testing.

## 🌟 Features & Functionality

- **Menu Display**: Browse through a variety of dishes with ease.
- **Item Details**: Click on any item to view its detailed description and ingredients.
- **Customizable Basket**: Add your favorite dishes to the basket and remove them as you please.
- **Basic User Interactions**: Engage with the menu and simulate the order process.
- **Responsive Design**: Ensures an optimal viewing experience across a wide range of devices.
- **Unit Testing**: Ensures reliability and stability through comprehensive tests using the React Testing Library.
- **Internationalization**: Supports multiple languages, date/time formats, and currencies, enhancing user experience and accessibility for a global audience.

## ⚙️ Technologies Employed

This MVP leverages a robust stack of technologies, including:
- **React.js**: For building the user interface with efficient, reusable components.
- **Redux**: Employed for state management, ensuring a predictable state container for the app, which is crucial for future scalability.
- **TypeScript**: Offers type safety, enhancing code quality and maintainability.
- **Styled Components**: For crafting custom styled elements, allowing for flexible design changes.
- **Axios**: Utilized for making HTTP requests to external APIs for restaurant data.
- **React Testing Library**: For conducting reliable and maintainable unit tests that mirror user interactions.

## 📈 Future Roadmap

While this version showcases basic functionalities, the architecture is designed with growth in mind:
- **Checkout Process**: Integration of a secure and user-friendly checkout system.
- **User Profiles and Authentication**: Personalized user experiences with saved preferences and order history.
- **Advanced Customization**: Allowing users to further customize their orders and the app's appearance, including theme colors.
- **Expanded Menu and Features**: Introduction of more diverse menu options and interactive features.
- **PWA Transformation**: Leveraging the responsive design for a seamless transition to a Progressive Web App, enabling offline usage and home screen installation.

## 🤝 Url AWS


<sub><i>

## Important: Use of Mocked API in Development

During local development and testing of this project, you might encounter issues when attempting to connect with the original restaurant API. Specifically, the API may return a `301 Moved Permanently` error, along with CORS (Cross-Origin Resource Sharing) related issues. This behavior prevents the application from correctly rendering the menu items and details of the restaurant in a local environment.

To address this issue and ensure a smooth development experience, we have implemented a mocked API. This API simulates the expected responses from the original API, allowing the project to function correctly in development without the need to connect to the production API.

When the project is deployed on AWS (in production), the original restaurant API is utilized, as the production environment is configured to circumvent the aforementioned issues.

To use the mocked API in your local development environment, make sure to follow these additional steps after completing the initial installation and setup:

1. Ensure that your development environment is configured to point to the mocked API. This is usually done in a configuration file or environment variables within the project.
2. Verify that the mocked API is running or accessible before starting your local development server.

This will ensure that you can develop and test the project without encountering connection issues with the original API.

</i></sub>
