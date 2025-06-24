import { FormData } from '../types';

interface FormattedJsonOutputProps {
  data: FormData;
}

function FormattedJsonOutput({ data }: FormattedJsonOutputProps) {
  return (
    <div className="mt-6 p-4 bg-gray-100 rounded-md">
      <h2 className="text-lg font-semibold mb-2">Submitted Data</h2>
      <pre className="text-sm overflow-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

export default FormattedJsonOutput;
