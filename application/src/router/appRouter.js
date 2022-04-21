import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main, Login, OrderForm, ViewOrders} from '../components';

const AppRouter = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<OrderForm />} />
        <Route path="/view-orders" element={<ViewOrders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
