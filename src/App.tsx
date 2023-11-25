import "./App.css";
import { ChatScreen } from "./pages/chat/ChatScreen";
import { Routes, Route } from "react-router-dom";
import { LoginScreen } from "./pages/login/LoginScreen";
import { RegisterScreen } from "./pages/register/RegisterScreen";
import { RequireAuth } from "react-auth-kit";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth loginPath={"/login"}>
            <ChatScreen />
          </RequireAuth>
        }
      />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route
        path="*"
        element={
          <RequireAuth loginPath={"/login"}>
            <ChatScreen />
          </RequireAuth>
        }
      />
    </Routes>
  );
}

export default App;
