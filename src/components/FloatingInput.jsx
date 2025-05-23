import React, { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react'; // icons

const FloatingInput = ({ label, type = 'text', value, onChange }) => {
  const [touched, setTouched] = useState(false);
  const isValid = value.length > 3; // Example validation rule

  return (
    <div className="relative w-full mt-4">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => setTouched(true)}
        onFocus={() => setTouched(true)}
        placeholder=" "
        className={`peer w-full border rounded-md px-3 pt-5 pb-2 text-sm focus:outline-none focus:ring-2 ${
          isValid ? 'border-green-500 focus:ring-green-400' : touched ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-purple-400'
        }`}
      />
      <label
        className="absolute left-3 top-2 text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-700"
      >
        {label}
      </label>

      {/* ✅ Status Icon */}
      {touched && value && (
        <div className="absolute right-3 top-3">
          {isValid ? (
            <CheckCircle className="w-5 h-5 text-green-500" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-500" />
          )}
        </div>
      )}
    </div>
  );
};

export default FloatingInput;
