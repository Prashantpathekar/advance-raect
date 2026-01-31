import { Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import Form from "./Form"; // Register form

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/register" element={<Form />} />
    </Routes>
  );
};

export default App;
