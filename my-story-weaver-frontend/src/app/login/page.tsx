// app/login/page.tsx
import React from 'react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        {/* Your Login Form component will go here later */}
        <p className="text-center text-sm text-gray-600">
          Or <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">register a new account</a>
        </p>
      </div>
    </div>
  );
}