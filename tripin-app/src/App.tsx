import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TermsAndConditions from "./components/TermsAndCondition";
import Dashboard from "./components/dashboard";
import PrivacyPolicy from "./components/PrivacyPolicy";
import LoginTes from "./components/LoginTes";
// import Tes from "./components/tes";


function App() {
  // return <Tes />
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/TermsAndCondition" element={<TermsAndConditions />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App