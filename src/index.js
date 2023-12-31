import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserProvider } from './context/user.context';
import  {ProductsProvider} from './context/product.context';
import { CartProvider } from './context/cart.context';
import './index.scss';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <ProductsProvider>
       <UserProvider>
        <CartProvider>
         <App />
        </CartProvider>
        </UserProvider>
       </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
