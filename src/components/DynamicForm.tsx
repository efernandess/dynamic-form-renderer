import { useState } from 'react';
import FormField from './FormField';
import FormattedJsonOutput from './FormattedJsonOutput';
import useForm from '../hooks/useForm';
import { Schema, FormData } from '../types';

interface DynamicFormProps {
  schema: Schema;
}

function DynamicForm({ schema }: DynamicFormProps) {
  const { fields } = schema;
  const { formData, errors, handleChange, validateForm } = useForm(fields);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmittedData(formData);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((field) => (
          <FormField
            key={field.name}
            field={field}
            value={formData[field.name] || ''}
            error={errors[field.name]}
            onChange={handleChange}
          />
        ))}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
      {submittedData && <FormattedJsonOutput data={submittedData} />}
    </div>
  );
}

export default DynamicForm;
