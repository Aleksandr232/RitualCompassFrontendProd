import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Button } from "@ritual/shared";

const queryClient = new QueryClient();

// Динамические импорты микрофронтендов
const UserApp = React.lazy(() => import("user/UserApp"));
const AdminApp = React.lazy(() => import("admin/AdminApp"));

/**
 * Основной компонент root-config приложения
 * @returns React компонент
 */
export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <h1 className="text-xl font-bold">Ritual Compass</h1>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <Link
                      to="/"
                      className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Home
                    </Link>
                    <Link
                      to="/user"
                      className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      User App
                    </Link>
                    <Link
                      to="/admin"
                      className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Admin App
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              <Routes>
                <Route
                  path="/"
                  element={
                    <div className="text-center">
                      <h2 className="text-2xl font-bold mb-4">
                        Welcome to Ritual Compass
                      </h2>
                      <Button variant="primary" size="large">
                        Get Started
                      </Button>
                    </div>
                  }
                />
                <Route
                  path="/user/*"
                  element={
                    <Suspense fallback={<div>Loading User App...</div>}>
                      <UserApp />
                    </Suspense>
                  }
                />
                <Route
                  path="/admin/*"
                  element={
                    <Suspense fallback={<div>Loading Admin App...</div>}>
                      <AdminApp />
                    </Suspense>
                  }
                />
              </Routes>
            </div>
          </main>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
