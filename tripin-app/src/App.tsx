import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TermsAndConditions from "./pages/TermsAndCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  // return <Tes />
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/TermsAndCondition" element={<TermsAndConditions />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  )
}

export default App