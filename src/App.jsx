// Remove the import statement for BrowserRouter if it's imported elsewhere

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Logo";
import Notification from "./components/Notification";
import Streak from "./components/Streak";
import User from "./components/User";

function Share() {
  return (
    <>
      <Navbar />
      <Notification />
    </>
  );
}
function Home() {
  return (
      <>
      <Navbar />
      <Streak/>
      <Notification />
    </>
  );
}


 
function Leaderboard() {
  return (
    <>
      <Navbar />
 
      <Notification />
    </>
  );
}

function App() {
  return (
    <div>
      <Routes>
        {/* Define the route for the root path */}
        <Route path="/" element={<Home />} />
        <Route path="/Leaderboard" element={<Leaderboard />} />
        <Route path="/Share" element={<Share />} />
     
      </Routes>
    </div>
  );
}



export default App;
