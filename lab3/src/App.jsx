import React, { useState } from 'react';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // CREATE: Add a new todo
  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput('');
  };

  // READ: (Handled by mapping the 'todos' array below)

  // UPDATE: Toggle completion status
  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  // DELETE: Remove a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <div className="p-10 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Lab 3: Todo List</h1>
      
      {/* Input Area */}
      <div className="flex gap-2 mb-4">
        <input 
          className="border p-2 flex-grow rounded"
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="New task..."
        />
        <button onClick={addTodo} className="bg-green-500 text-white px-4 py-2 rounded">Add</button>
      </div>

      {/* List Area */}
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className="flex justify-between items-center p-2 border-b">
            <span 
              onClick={() => toggleTodo(todo.id)}
              className={todo.completed ? "line-through text-gray-500 cursor-pointer" : "cursor-pointer"}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} className="text-red-500">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}