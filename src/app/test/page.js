// In your Server Component (e.g., app/page.js)

import { cookies } from 'next/headers';

export default async function ProtectedPage() {
  // 1. Get the cookies store
  const cookieStore = cookies();

  // 2. Read the token set by the browser/client-side login
  const token = await cookieStore.get('token')?.value;

  if (!token) {
    // Handle unauthenticated user (e.g., redirect or show login prompt)
    return <p>Access Denied: Please log in.</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-sky-50 p-6">
      <div className="max-w-xl w-full bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3">
          Protected Content
        </h1>
        <p className="text-slate-700 mb-6">
          This content is only visible to authenticated users.
        </p>
        <div className="flex gap-3">
          <button className="inline-flex items-center px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium rounded-md shadow-sm">
            Go to Dashboard
          </button>
          <button className="inline-flex items-center px-4 py-2 bg-white border border-slate-200 text-slate-700 text-sm rounded-md hover:bg-slate-50">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}