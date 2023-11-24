import "./App.css";
import { ChatScreen } from "./pages/chat/ChatScreen";
import { Routes, Route } from "react-router-dom";
import { LoginScreen } from "./pages/login/LoginScreen";
import { RegisterScreen } from "./pages/register/RegisterScreen";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ChatScreen />}></Route>
        <Route path="/register" element={<RegisterScreen />}></Route>
        <Route path="/login" element={<LoginScreen />}></Route>
      </Routes>
    </div>
  );
}

export default App;
