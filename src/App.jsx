// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/theme";

import FavoritesProvider from "./context/FavoritesProvider";

// Pages
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
import DetailsPage from "./pages/Details";
import ContactPage from "./pages/Contact";
import FavoritesPage from "./pages/Favorites";
import RegisterPage from "./pages/RegisterPage";
import CreateRecipePage from "./pages/CreateRecipe";
import ProfilePage from "./pages/Profile";

// rota protegida
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FavoritesProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            {/* Rotas públicas */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/inscricao" element={<RegisterPage />} />

            {/* Rotas protegidas */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/receita/:id"
              element={
                <ProtectedRoute>
                  <DetailsPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/contato"
              element={
                <ProtectedRoute>
                  <ContactPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/favoritos"
              element={
                <ProtectedRoute>
                  <FavoritesPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/receitas/nova"
              element={
                <ProtectedRoute>
                  <CreateRecipePage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/perfil"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </FavoritesProvider>
    </ThemeProvider>
  );
}

export default App;
