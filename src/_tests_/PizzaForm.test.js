import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import PizzaForm from './PizzaForm';

test('Fill out #pizza-form, submit #pizza-form with data to https://reqres.in/api/orders', async () => {
  const { getByLabelText, getByText, queryByText } = render(<PizzaForm />);

  const nameInput = getByLabelText('Name:');
  const sizeDropdown = getByLabelText('Size:');
  const pepperoniCheckbox = getByLabelText('pepperoni'); // Use the value attribute
  const specialTextarea = getByTestId('special-text'); // Select by data-testid
  const submitButton = getByText('Add to Order');
  const successMessage = getByText('Order submitted successfully');
  const errorMessage = queryByText('An error occurred'); // Use queryByText to check for absence

  fireEvent.change(nameInput, { target: { value: 'Tony Stark' } });
  fireEvent.change(sizeDropdown, { target: { value: 'Large' } });
  fireEvent.click(pepperoniCheckbox);
  fireEvent.change(specialTextarea, { target: { value: 'Special instructions go here' } });
  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(successMessage).toBeInTheDocument();
    expect(errorMessage).not.toBeInTheDocument(); // Ensure error message is not present
  });
});