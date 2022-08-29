import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { UserProvider } from './components/UserProvider';
import News from './components/News';
import Cart from './components/CartInfor';
import SignIn from './components/SignIn';
import PageNotFound from './components/PageNotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>

      <BrowserRouter>

        <Routes>
          <Route path='/signIn' element={<SignIn />} />
          <Route path="/" element={<App />} >
            <Route path="cart" element={<Cart />} />
            <Route path="news" element={<News />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>

      </BrowserRouter>
    </UserProvider>

  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
