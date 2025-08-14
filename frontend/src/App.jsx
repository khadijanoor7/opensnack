import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <header className="bg-white shadow-md py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-usersnack-dark">
              Usersnack Pizza
            </h1>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center">
          <Routes>
            <Route
              path="/"
              element={
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-usersnack-primary mb-4">
                    Welcome to Usersnack Pizza!
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Delicious pizzas delivered with passion
                  </p>
                </div>
              }
            />
          </Routes>
        </main>

        <footer className="bg-usersnack-dark text-white py-4">
          <div className="container mx-auto px-4 text-center">
            <p>© 2025 Usersnack Pizza. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
