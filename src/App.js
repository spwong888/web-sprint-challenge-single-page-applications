import React from 'react';
import { Route, Link } from 'react-router-dom';
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
      <Route exact path="/" component={HomePage} />
      <Route path="/pizza" component={PizzaForm} />
      <Route path="/pizza/:id" component={PizzaForm} />
      {/* Other routes go here */}
    </div>
  );
}