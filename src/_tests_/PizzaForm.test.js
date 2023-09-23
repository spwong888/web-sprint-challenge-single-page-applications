import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import PizzaForm from './PizzaForm';

test('Form has validation for #name-input with error message "name must be at least 2 characters"', async () => {
  const { getByLabelText, getByText } = render(<PizzaForm />);

  const nameInput = getByLabelText('Name:');
  fireEvent.change(nameInput, { target: { value: 'A' } }); // Input a name with less than 2 characters

  // Use a regular expression to match the error message text
  const errorMessage = getByText(/name must be at least 2 characters/i);

  expect(errorMessage).toBeInTheDocument();

  await waitFor(() => {
    const updatedErrorMessage = getByText('name must be at least 2 characters');
    expect(updatedErrorMessage).toBeInTheDocument();
  });
});