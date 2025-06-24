import React from 'react'; // Added
import { render, screen } from '@testing-library/react';
import FormField from '../components/FormField';
import { Field } from '../types';

describe('FormField', () => {
  it('renders a text input field', () => {
    const field: Field = { label: 'Name', type: 'text', name: 'name', required: true };
    render(<FormField field={field} value="" onChange={() => {}} />);
    expect(screen.getByLabelText(/Name/)).toHaveAttribute('type', 'text');
  });

  it('renders a select field with options', () => {
    const field: Field = {
      label: 'Gender',
      type: 'select',
      name: 'gender',
      options: ['Male', 'Female'],
    };
    render(<FormField field={field} value="" onChange={() => {}} />);
    expect(screen.getByLabelText(/Gender/)).toContainElement(
      screen.getByText('Male')
    );
  });

  it('displays error message when provided', () => {
    const field: Field = { label: 'Name', type: 'text', name: 'name' };
    render(
      <FormField field={field} value="" error="Name is required" onChange={() => {}} />
    );
    expect(screen.getByText('Name is required')).toBeInTheDocument();
  });
});
