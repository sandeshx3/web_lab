import React, { useState } from 'react';

// 1. The Custom Input Component
const CustomInput = ({ label, type = "text", name, value, onChange, placeholder }) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

// 2. The Main Page
export default function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
return (
  /* This div ensures the form is centered on the whole screen */
  <div className="min-h-screen w-screen bg-gray-100 flex items-center justify-center m-0 p-4">
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6 uppercase tracking-tight">
        {isLogin ? 'Login' : 'Register'}
      </h2>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        {!isLogin && (
          <CustomInput label="Full Name" name="name" placeholder="John Doe" onChange={handleChange} />
        )}
        
        <CustomInput 
          label="Email Address" 
          name="email" 
          type="email" 
          placeholder="name@test.com" 
          onChange={handleChange} 
        />
        
        <CustomInput 
          label="Password" 
          name="password" 
          type="password" 
          placeholder="••••••••" 
          onChange={handleChange} 
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg">
          {isLogin ? 'Sign In' : 'Create Account'}
        </button>
      </form>

      <button 
        onClick={() => setIsLogin(!isLogin)} 
        className="w-full mt-6 text-sm font-medium text-blue-600 hover:text-blue-800 transition"
      >
        {isLogin ? "New here? Create an account" : "Already have an account? Log in"}
      </button>
    </div>
  </div>
);
}