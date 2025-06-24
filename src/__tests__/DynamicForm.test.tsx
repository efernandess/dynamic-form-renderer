import React from 'react'; // Added
import { render, screen, fireEvent } from '@testing-library/react';
import DynamicForm from '../components/DynamicForm';
import schema from '../schema.json';
import { Schema } from '../types';

describe('DynamicForm', () => {
  it('renders all fields from the schema', () => {
    render(<DynamicForm schema={schema as Schema} />);
    schema.fields.forEach((field: { label: string }) => {
      expect(screen.getByLabelText(new RegExp(`^${field.label}`))).toBeInTheDocument();
    });
  });

  it('displays errors for required fields on submit', async () => {
    render(<DynamicForm schema={schema as Schema} />);
    fireEvent.click(screen.getByText('Submit'));
    expect(
      await screen.findByText((content, element) =>
        content.includes('Name is required')
      )
    ).toBeInTheDocument();
  });

  it('displays submitted data as JSON', async () => {
    render(<DynamicForm schema={schema as Schema} />);
    fireEvent.input(screen.getByLabelText(/^Name/), { target: { value: 'John' } });
    fireEvent.input(screen.getByLabelText(/^Date of Birth/), { target: { value: '2000-01-01' } });
    fireEvent.click(screen.getByText('Submit'));
    expect(
      await screen.findByText((content, element) =>
        content.includes('"name": "John"')
      )
    ).toBeInTheDocument();
  });
});
