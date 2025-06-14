// app/register/page.tsx
import React from 'react';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create a new account
        </h2>
        {/* Your Registration Form component will go here later */}
        <p className="text-center text-sm text-gray-600">
          Already have an account? <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Sign in</a>
        </p>
      </div>
    </div>
  );
}