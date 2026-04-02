'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser, clearCurrentUser } from '@/lib/storage';
import { CurrentUser } from '@/types/index';
import { ProtectedRoute } from '@/components/ProtectedRoute';

function DashboardContent() {
  const router = useRouter();
  const [user, setUser] = useState<CurrentUser | null>(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
  }, []);

  const handleLogout = () => {
    clearCurrentUser();
    router.push('/');
  };

  if (!user) {
    return null;
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome to your account</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-8 border-l-4 border-blue-600">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Account Information</h2>
          <p className="text-gray-700 mb-2">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="text-gray-700">
            <strong>Logged in at:</strong> {new Date(user.loginTime).toLocaleString()}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}
