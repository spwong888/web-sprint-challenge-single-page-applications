import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import PizzaForm from './PizzaForm';

test('Fill out #pizza-form, submit #pizza-form with data to https://reqres.in/api/orders', async () => {
  const { getByLabelText, getByText } = render(<PizzaForm />);

  // Fill out form fields with data
  const nameInput = getByLabelText('Name:');
  const sizeDropdown = getByLabelText('Size:');
  const pepperoniCheckbox = getByLabelText('Pepperoni');
  // Fill out other form fields as needed

  fireEvent.change(nameInput, { target: { value: 'Tony Stark' } });
  fireEvent.change(sizeDropdown, { target: { value: 'Large' } });
  fireEvent.click(pepperoniCheckbox);

  // Submit the form
  const orderButton = getByText('Add to Order');
  fireEvent.click(orderButton);

  // Wait for the form submission to complete (you might need to adjust this)
  await waitFor(() => {
    // Check for success message or other post-submission behavior
    const successMessage = getByText('Order submitted successfully');
    expect(successMessage).toBeInTheDocument();
  });
});