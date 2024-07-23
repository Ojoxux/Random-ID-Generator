import React from 'react';
import { AuthForm } from './components/organisms/AuthForm';
import { useAuth } from './hooks/useAuth';

const App: React.FC = () => {
  const { user, login, signup, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-center">Random Name Generator</h1>
        {user ? (
          <div>
            <p>Welcome, {user.email}</p>
            <button onClick={logout} className="mt-4">
              Logout
            </button>
            {/* TODO: Add NameGenerator component here */}
          </div>
        ) : (
          <AuthForm onLogin={login} onSignup={signup} />
        )}
      </div>
    </div>
  );
};

export default App;
