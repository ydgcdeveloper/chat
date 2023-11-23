import "./App.css";
import { ChatScreen } from "./pages/chat/ChatScreen";
import { Routes, Route } from "react-router-dom";
import { LoginScreen } from "./pages/login/LoginScreen";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ChatScreen />}></Route>
        <Route path="/login" element={<LoginScreen />}></Route>
      </Routes>
    </div>
  );
}

export default App;
