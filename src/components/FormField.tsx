import { Field, FormData } from '../types';

interface FormFieldProps {
  field: Field;
  value: string | boolean;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

function FormField({ field, value, error, onChange }: FormFieldProps) {
  const { label, type, name, required, options } = field;

  const commonProps = {
    id: name,
    name,
    value: type === 'checkbox' ? undefined : value,
    checked: type === 'checkbox' ? (value as boolean) : undefined,
    onChange,
    className: `w-full p-2 border rounded-md ${
      error ? 'border-red-500' : 'border-gray-300'
    } focus:outline-none focus:ring-2 focus:ring-blue-500`,
  };

  const renderField = () => {
    switch (type) {
      case 'select':
        return (
          <select {...commonProps}>
            <option value="">Select an option</option>
            {options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case 'checkbox':
        return <input type="checkbox" {...commonProps} className="w-auto" />;
      case 'textarea':
        return <textarea {...commonProps} rows={4} />;
      case 'date':
        return <input type="date" {...commonProps} />;
      default:
        return <input type={type} {...commonProps} />;
    }
  };

  return (
    <div className={type === 'checkbox' ? 'flex items-center space-x-2 mb-4' : 'flex flex-col'}>
      <label htmlFor={name} className="mb-1 font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      {renderField()}
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
}

export default FormField;
