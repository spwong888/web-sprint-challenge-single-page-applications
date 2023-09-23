import React, { useState } from 'react';

function PizzaForm() {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(''); 
  const [size, setSize] = useState('');
  const [toppings, setToppings] = useState([]);
  const [specialInstructions, setSpecialInstructions] = useState('');

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
  
    // Validate the name
    if (newName.length < 2) {
      setNameError('name must be at least 2 characters');
    } else {
      setNameError('');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (name.length < 2) {
      alert('name must be at least 2 characters');
      return;
    }
    if (!size) {
        alert('Please select a size');
        return;
    }
    const formData = {
      name,
      size,
      toppings,
      special: specialInstructions,
    };
    console.log(formData);
    // Submit the form data and handle the database record here
  };

  const handleToppingChange = (topping, isChecked) => {
    if (isChecked) {
      setToppings([...toppings, topping]);
    } else {
      setToppings(toppings.filter((t) => t !== topping));
    }
  };

  return (
    <div>
      <form id="pizza-form" onSubmit={handleFormSubmit}>
        <div>
        <label htmlFor="name-input">Name:</label>
        <input
          type="text"
          id="name-input"
          value={name}
          onChange={(e) => handleNameChange(e.target.value)}
          onBlur={() => {
            if (name.length < 2) {
              setNameError("name must be at least 2 characters");
            } else {
              setNameError("");
            }
          }}
        />
        {nameError && <p className="error-message">{nameError}</p>}
        </div>
        <div>
          <label htmlFor="size-dropdown">Size:</label>
          <select
            id="size-dropdown"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="">Select a size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            {/* Add options for pizza sizes here */}
          </select>
        </div>
        <div>
          <label>Toppings:</label>
          <div id="toppings-checkbox-group">
            <label>
                <input
                type="checkbox"
                name="topping"
                value="pepperoni"
                checked={toppings.includes("pepperoni")}
                onChange={(e) => handleToppingChange("pepperoni", e.target.checked)}
                />
              Pepperoni
            </label>
            <label>
                <input 
                type="checkbox"
                name="topping"
                value="sausage"
                checked={toppings.includes("sausage")}
                onChange={(e) => handleToppingChange("sausage", e.target.checked)}
                />
                Sausage
            </label>
            <label>
                <input
                type="checkbox"
                name="topping"
                value="mushrooms"
                checked={toppings.includes("mushrooms")}
                onChange={(e) => handleToppingChange("mushrooms", e.target.checked)}
                />
                Mushrooms
            </label>
            <label>
                <input
                type="checkbox"
                name="topping"
                value="onions"
                checked={toppings.includes("onions")}
                onChange={(e) => handleToppingChange("onions", e.target.checked)}
                />
                Onions
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="special-text">Special Instructions:</label>
          <textarea
            id="special-text"
            value={specialInstructions}
            onChange={(e) => setSpecialInstructions(e.target.value)}
          />
        </div>
        <button type="submit" id="order-button">
          Add to Order
        </button>
      </form>
    </div>
  );
}

export default PizzaForm;