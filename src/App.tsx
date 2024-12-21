import { Routes, Route } from "react-router-dom";
import { SignIn } from "./pages/signIn";
import "./index.css";
import { DASHBORD_ROUTES } from "./routes/admin/dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      {DASHBORD_ROUTES}
    </Routes>
  );
}

export default App;
