import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import PizzaForm from './PizzaForm';

function HomePage() {
  return (
    <div>
      <h1>Welcome to our Pizza Ordering App</h1>
      <Link to="/pizza" id="order-pizza">Order Pizza</Link>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pizza" element={<PizzaForm />} />
        <Route path="/pizza/:id" element={<PizzaForm />} />
        {/* Other routes go here */}
      </Routes>
    </div>
  );
}