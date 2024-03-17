### Stock Management App

![ezgif com-speed](https://github.com/cihanbagriyanik/Stock_Management_App_react-redux-formik-yup/assets/132518854/7d3ac39f-f67d-4c8f-9ccf-f5b1622be43d)

### Stock App Backend (Stock API)

[Backend](#backend)

## Folder/File Structure:

```
Stock Management App

├── public
|    ├── assets
├── src
|    ├── app
|    │   └── store.jsx
|    ├── assets
|    ├── components
|    │   ├── brands
|    │   │   ├── BrandsCard.jsx
|    │   │   └── BrandsModal.jsx
|    │   ├── categories
|    │   │   ├── CategorieModal.jsx
|    │   │   └── CategorieTable.jsx
|    │   ├── firms
|    │   │   ├── FirmsCard.jsx
|    │   │   └── FirmsModal.jsx
|    │   ├── home
|    │   │   ├── Charts.jsx
|    │   │   └── KpiCards.jsx
|    │   ├── products
|    │   │   ├── ProductsModal.jsx
|    │   │   └── ProductsTable.jsx
|    │   ├── purchases
|    │   │   ├── PurchasesModal.jsx
|    │   │   └── PurchasesTable.jsx
|    │   ├── sales
|    │   │   ├── SalesModal.jsx
|    │   │   └── SalesTable.jsx
|    │   ├── AuthHeader.jsx
|    │   ├── AuthImage.jsx
|    │   ├── LoginForm.jsx
|    │   ├── MenuListItem.jsx
|    │   └── RegisterForm.jsx
|    ├── features
|    │   ├── authSlice.jsx
|    │   ├── authSliceMiddleware.jsx
|    │   ├── brandsSlice.jsx
|    │   ├── categoriesSlice.jsx
|    │   ├── firmsSlice.jsx
|    │   ├── homeSlice.jsx
|    │   ├── productsSlice.jsx
|    │   ├── purchasesSlice.jsx
|    │   └── salesSlice.jsx
|    ├── helper
|    │   └── ToastNotify.js
|    ├── hooks
|    │   ├── useAuthCall.jsx
|    │   ├── useAxios.jsx
|    │   ├── useBrandsCall.jsx
|    │   ├── useCategoriesCall.jsx
|    │   ├── useFirmsCall.jsx
|    │   ├── useHomeCall.jsx
|    │   ├── useProductsCall.jsx
|    │   ├── usePurchasesCall.jsx
|    │   └── useSalesCall.jsx
|    ├── pages
|    │   ├── Brands.jsx
|    │   ├── Categories.jsx
|    │   ├── Dashboard.jsx
|    │   ├── Firms.jsx
|    │   ├── Home.jsx
|    │   ├── Login.jsx
|    │   ├── LoginMid.jsx
|    │   ├── Products.jsx
|    │   ├── Purchases.jsx
|    │   ├── Register.jsx
|    │   ├── RegisterMid.jsx
|    │   └── Sales.jsx
|    ├── router
|    │   ├── AppRouter.jsx
|    │   └── PrivateRouter.jsx
|    ├── router
|    │   └── globalStyle.js
|    ├── App.jsx
|    ├── index.css
|    ├── main.jsx
├── index.html
├── pacgake.json
├── pnpm-lock.yaml
├── postcss.config.js
├── readme.md
├── tailwind.config.js
├── vercel.json
└── vite.config.js

```

## Installed Packages:

- **@emotion/react**: ^11.11.1
- **@emotion/styled**: ^11.11.0
- **@mui/icons-material**: ^5.14.19
- **@mui/material**: ^5.14.20
- **@mui/styled-engine-sc**: 6.0.0-alpha.8
- **@mui/x-data-grid**: ^6.18.5
- **@reduxjs/toolkit**: ^2.0.1
- **@tremor/react**: ^3.12.1
- **axios**: ^1.6.2
- **formik**: ^2.4.5
- **react**: ^18.2.0
- **react-dom**: ^18.2.0
- **react-redux**: ^9.0.2
- **react-router-dom**: ^6.20.1
- **react-toastify**: ^9.1.3
- **redux-persist**: ^6.0.0
- **styled-components**: ^6.1.1
- **yup**: ^1.3.2

## Description

The Stock Management App is a React-based application designed for managing stock-related operations. It provides features for managing products, purchases, sales, firms, categories, and brands efficiently.

## Technologies Used

- **MUI and MUI icons**: Material-UI components and icons for building a sleek and responsive user interface.
- **Axios**: A library for making HTTP requests, used for handling data fetching and sending operations.
- **Redux/Redux Toolkit**: State management libraries for managing application-wide state and data flow.
- **React Router DOM**: Navigation library for handling routing and navigation within the application.
- **Tremor/React**: Library for enhancing data visualization and charting capabilities.
- **Tailwind CSS**: Utility-first CSS framework for styling components and layouts.
- **MUI X Data Grid**: Material-UI component for displaying and interacting with tabular data efficiently.
- **Formik and Yup**: Libraries for simplifying form management and validation in React applications.

## Features

- **Form Management with Formik and Yup**: Build and manage forms easily with Formik while ensuring data validation with Yup.
- **Persistent Data Storage with Redux Persist**: Store and persist application data on local storage or Async Storage to prevent data loss.
- **Responsive UI with Material-UI**: Utilize Material-UI components and icons to create a responsive and visually appealing user interface.
- **Efficient Data Fetching with Axios**: Fetch data from external APIs or backend servers efficiently using Axios.
- **Enhanced Routing with React Router DOM**: Implement dynamic routing and navigation within the application to enhance user experience.

## Installation

To install and run the Stock Management App locally, follow these steps:

1. Clone the project repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install project dependencies using `pnpm install`.
4. Start the development server with `pnpm run dev`.
5. Access the application at `localhost:5173` in your web browser.

## Usage

Once the application is running, you can use the different features provided to manage the stock efficiently. Navigate through the various sections such as products, purchases, sales, firms, categories, and brands to perform relevant operations.

## Contribution

Contributions to the Stock Management App project are welcome! If you'd like to contribute, please open a pull request with your proposed changes. Feedback and suggestions for improvements are also appreciated.

### Backend

The backend of the Stock Management App is powered by the StockAPI project. Below are the details of the backend:

- **GitHub Repository**: [StockAPI GitHub](https://github.com/cihanbagriyanik/StockAPI)
- **Documentation**: [StockAPI Documentation](https://stockapi-5xmh.onrender.com/)
- **Database Connection**: MongoDB Atlas
- **Technologies Used**:
  - **Express**: Web framework for Node.js.
  - **MongoDB**: NoSQL database used for storing stock-related data.
  - **Mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.
  - **JWT (JSON Web Tokens)**: Authentication mechanism for securing API endpoints.
  - **Swagger UI Express**: Middleware to serve auto-generated API documentation.
  - **Nodemailer**: Library for sending emails.
  - **dotenv**: Library for loading environment variables from a .env file into process.env.
  - **cors**: Middleware for enabling Cross-Origin Resource Sharing (CORS) in Express.
  - **express-async-errors**: Library for handling asynchronous errors in Express middleware.
  - **morgan**: HTTP request logger middleware for Node.js.
  - **swagger-autogen**: Library for generating Swagger documentation for APIs.
- **Package.json**:

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.
