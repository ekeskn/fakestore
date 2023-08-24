# React Native Product App

The React Native Product App is a mobile application that displays a list of products with details. This README provides an overview of the project structure and how to run the application.

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Project Structure

The project is structured as follows:

- `router.jsx`: The main routing configuration using `@react-navigation/native-stack`.
- `useFetch.jsx`: A custom hook for fetching data from an API using Axios.
- `pages/Products.jsx`: Component for displaying the list of products.
- `pages/Detail.jsx`: Component for displaying the details of a product.
- `components/ProductCard.jsx`: Component for rendering individual product cards.
- `components/Error.jsx`: Component for displaying error messages.
- `components/Loading.jsx`: Component for displaying loading indicators.

## Getting Started

### Installation

1. Clone this repository to your local machine:

       git clone https://github.com/yourusername/react-native-product-app.git
Navigate to the project directory:

      cd react-native-product-app

Install the required dependencies:

      npm install

### Running the Application

To start the application, follow the instructions for running a React Native app on your target platform (Android or iOS).

For example, to run the app on an Android emulator:


      npx react-native run-android

### Usage

The app displays a list of products fetched from the provided API URL using the useFetch hook. It provides navigation to view product details. The app handles loading and error states appropriately.

Refer to the specific documentation or codebase to learn more about each component and feature.
### License

This project is licensed under the MIT License.


![Screenshot_1690738391](https://github.com/ekeskn/fakestore/assets/96025028/45ffe748-7899-4c74-ad07-458cc32d4548)
![Screenshot_1690738390](https://github.com/ekeskn/fakestore/assets/96025028/4e72c970-b6c0-4696-ab87-0110fd340a97)
