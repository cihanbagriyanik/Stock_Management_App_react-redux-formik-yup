# Stock App

![ezgif com-speed](https://github.com/cihanbagriyanik/Stock_Management_App_react-redux-formik-yup/assets/132518854/7d3ac39f-f67d-4c8f-9ccf-f5b1622be43d)

# Installed Packages

MUI and MUI icons
axios
redux/redux toolkit
react-toastify
react-router-dom
tremor/react and tailwindcss
mui x data grid
Formik and Yup

"Build forms in React, without the tears."

Create forms in React without tears.

Formik is a library designed to simplify form management in React applications. It provides features that make form state management, value tracking, displaying error messages, and submitting the form to the server easy. It also offers useful helper functions for tracking form values, controlling form status, and organizing the structure of forms.

Yup, on the other hand, is a schema-based validation library used to define form validation rules. It is employed to specify requirements for form fields, data types, length constraints, custom validation functions, and more. Yup validates input values according to these rules and generates error messages when needed.

Advantages of Formik and Yup:

Easy to use: Formik simplifies the management of form processes, handling form state, input values, and error messages automatically.
Validation: Yup provides powerful schema-based validation to check the accuracy of form inputs, allowing you to display appropriate error messages for invalid entries.
Flexibility: Formik and Yup together offer a flexible form management solution. You can customize forms according to your needs using customizable components and functions.
Formik, being a library for simplifying form management in React applications, has the following advantages:

Form State Management: Formik facilitates form state management, automatically tracking and updating values, selected options, and other form states for input fields.
Tracking Values: Formik monitors the value of each input field in the form, allowing you to receive instant feedback when users enter or modify values.
Displaying Error Messages: Formik makes it easy to handle error situations in your form, enabling you to use custom error components and provide instant feedback for entries that do not comply with validation rules.
Submitting the Form to the Server: Formik streamlines the process of submitting forms to the server, helping with necessary tasks to transmit form data and manage server responses.
Helper Functions: Formik offers useful helper functions for organizing and controlling the structure of forms. For example, you can easily check the validation status of the form, clear input fields, reset the form, or restart the form.
Yup is a schema-based validation library used to define form validation rules. Some features of Yup and how it is used are explained below:

Schema Definition: Yup allows you to define form validation rules. For instance, you can specify requirements for fields, data types, minimum/maximum length, custom validation functions, etc.
Validation Rules: Yup can combine a set of validation rules and apply these rules to the fields of the form. For example, required() indicates that a field cannot be left blank, while email() specifies that a field must be a valid email address.
Error Messages: Yup generates error messages for entries that do not comply with form validation rules. You can customize error messages or use default ones.
Yup GitHub
Formik Documentation

Redux Persist

Redux Persist is a library used to store data on local storage and/or Async Storage for Redux-based applications. It prevents data loss in the Redux store when the application is restarted or the page is refreshed.

Using Redux Persist is quite simple. First, install the redux-persist library, then create a persistedReducer and a persistor using the persistReducer and persistStore functions. The persistedReducer works like a regular Redux reducer but uses a storage strategy provided by redux-persist to store data. The persistor is an instance of the persistedReducer and is set up with the Redux store using the persistStore function provided by redux-persist.

For example, to create a persistedReducer and persistor using redux-persist, follow these steps:

Install the redux-persist library: npm install redux-persist.
When creating the Redux store, use persistReducer to create a persistedReducer:

```
import { createStore } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

```

1. Use the persistStore function to create the persistor:

```
import { persistStore } from 'redux-persist';

const persistor = persistStore(store);

```

The persistedReducer and persistor created this way can be used to store your Redux store data on local storage or Async Storage.

```jsx
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./app/store";
// ... normal setup, create store and persistor, import components etc.

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootComponent />
      </PersistGate>
    </Provider>
  );
};
```

For more information, you can refer to the official documentation of
Redux Persist: Redux Persist GitHub

For handling non-serializable errors, see here.
### Absolute Path ve Relative Path

Absolute Path and Relative Path

The terms 'Absolute Path' and 'Relative Path' are not used correctly in the context of React Router DOM. In React Router DOM, the 'path' prop is used to define paths, determining how specific the path is.

Route path='search' element={ Home/ } /: This route definition matches any URL with the 'search' path segment. It matches any URL starting with '/search' (e.g., '/search/results', '/search/users', etc.).
Route path='/search' element={ Home/ } /: This route definition only matches the exact '/search' URL. It matches only URLs that precisely match '/search' and does not match more specific sub-paths like '/search/results' or '/search/users'.
In React Router DOM, a 'path' prefixed with the '/' character represents an "absolute path" relative to the root. 'Path' elements without a leading '/' represent a "relative path" based on the current URL.

Nested routes can define sub-paths with a relative path without explicitly specifying the parent path.

```jsx
<Router>
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="register" element={<Register />} />
    <Route path="stock" element={<PrivateRouter />}>
      <Route path="" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="purchases" element={<Purchases />} />
        <Route path="sales" element={<Sales />} />
        <Route path="products" element={<Products />} />
        <Route path="firms" element={<Firms />} />
        <Route path="brands" element={<Brands />} />
      </Route>
    </Route>
  </Routes>
</Router>
```

However, if you want to define sub-paths with an absolute path in nested routes, you need to explicitly specify the parent path:

```jsx
<Router>
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/stock" element={<PrivateRouter />}>
      <Route path="" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="/stock/purchases" element={<Purchases />} />
        <Route path="/stock/sales" element={<Sales />} />
        <Route path="/stock/products" element={<Products />} />
        <Route path="/stock/firms" element={<Firms />} />
        <Route path="/stock/brands" element={<Brands />} />
      </Route>
    </Route>
  </Routes>
</Router>
```

Public Folder and CSS Mask Feature

Images and other files placed in the public folder can be used directly by specifying their path without importing them into the React project. This is because, when React projects are built, index.html and the files in the public folder are in the same directory. In this way, the paths for the icons in the drawer are provided.

The CSS mask property is used to place icons (SVG images) inside a div. Why didn't we use bgImage? Because bgImage covers the entire div. In this case, we cannot reflect the background color. Therefore, using the mask property with SVG images allows us to adjust the color.

Axios Instance and Interceptors

Axios is a library used for making HTTP requests. Axios instances are useful for managing requests to different endpoints, and interceptors are functions that run before and after requests, performing tasks such as automatically adding tokens or handling error situations.

To create an Axios instance, use the axios.create() function, which returns a customized Axios instance. For example::

```
import axios from 'axios';

const instance = axios.create({
  baseURL: '<https://example.com/api>',
  headers: {'Authorization': `Token ${token}`}
});

```

This code creates an Axios instance for requests to https://example.com/api and automatically adds the Authorization header with the Token ${token} value to each request.

Interceptors can be defined using the instance.interceptors object. For example:
```
instance.interceptors.request.use(
  (config) => {
    // istek göndermeden önce yapılacak işlemler
    return config;
  },
  (error) => {
    // istek gönderirken hata oluşursa yapılacak işlemler
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    // başarılı yanıt alındığında yapılacak işlemler
    return response;
  },
  (error) => {
    // hata yanıtı alındığında yapılacak işlemler
    return Promise.reject(error);
  }
);

```

This code adds interceptors to the instance. The request interceptor defines tasks to be performed before sending the request, and the response interceptor defines tasks to be performed when a response is received. Interceptors are automatically executed before or after requests, allowing tasks such as automatically adding tokens or handling error situations.
