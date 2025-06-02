// app/page.tsx
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Story Weaver!</h1>
      <p className="text-lg mt-4">Your collaborative storytelling journey begins here.</p>
      <Link href="/login">
        <button>Go to Login</button>
      </Link>
      <Link href="/register">
        <button>Sign Up Here</button>
      </Link>
    </main>
  );
}