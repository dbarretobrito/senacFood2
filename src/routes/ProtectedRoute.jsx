// src/routes/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const MAX_INACTIVITY_MS = 5 * 60 * 1000;

function isSessionExpired() {
  const lastActivity = localStorage.getItem("senacfood_last_activity");

  if (!lastActivity) {
    return true;
  }

  const last = Number(lastActivity);
  if (Number.isNaN(last)) {
    return true;
  }

  const diff = Date.now() - last;
  return diff > MAX_INACTIVITY_MS;
}

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("senacfood_token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Se a sessão expirou, limpa e manda pro login
  if (isSessionExpired()) {
    localStorage.removeItem("senacfood_token");
    localStorage.removeItem("senacfood_last_activity");
    return <Navigate to="/login" replace />;
  }

  return children;
}
