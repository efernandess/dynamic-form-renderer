import { renderHook, act } from '@testing-library/react';
import useForm from '../hooks/useForm';
import { Field } from '../types';

describe('useForm', () => {
  const fields: Field[] = [
    { label: 'Name', type: 'text', name: 'name', required: true },
    { label: 'Age', type: 'number', name: 'age' },
  ];

  it('initialises form data correctly', () => {
    const { result } = renderHook(() => useForm(fields));
    expect(result.current.formData).toEqual({ name: '', age: '' });
  });

  it('handles input changes', () => {
    const { result } = renderHook(() => useForm(fields));
    act(() => {
      result.current.handleChange({
        target: { name: 'name', value: 'John' },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.formData.name).toBe('John');
  });

  it('validates required fields', () => {
    const { result } = renderHook(() => useForm(fields));
    act(() => {
      expect(result.current.validateForm()).toBe(false);
    });
    expect(result.current.errors.name).toBe('Name is required');
  });
});
