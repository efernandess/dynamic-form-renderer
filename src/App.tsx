import DynamicForm from './components/DynamicForm';
import schema from './schema.json';
import { Schema } from './types';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-center mb-8">{schema.title}</h1>
        <DynamicForm schema={schema as Schema} />
      </div>
    </div>
  );
}

export default App;
