import React, { useState } from "react";
import gifLogo from "../Assets/aa_f.gif";
import staticLogo from "../Assets/aa.jpg";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

function FdaoLogo() {
  // State for tracking if the logo is hovered
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  // Event handlers for logo hover
  const handleLogoHoverEnter = () => setIsLogoHovered(true);
  const handleLogoHoverLeave = () => setIsLogoHovered(false);

  return (
    <div
      className="relative flex items-center bg-black p-4 cursor-pointer"
      onMouseEnter={handleLogoHoverEnter}
      onMouseLeave={handleLogoHoverLeave}
    >
      <img
        src={isLogoHovered ? gifLogo : staticLogo} // Use gifLogo if hovered, otherwise use staticLogo
        alt="Logo"
        className="w-14 h-14" // Set standard logo dimensions
      />
      <span className="text-xl ml-2" style={{ color: '#D9811E' }}>
        Freelancers DAO
      </span>
      <button
        className="absolute top-0 right-0 mt-2 mr-2 p-2 bg-orange-500 text-white rounded hover:bg-orange-600"
        onClick={() => alert("Button clicked!")}
      >
        <AccountBalanceWalletIcon />
        wallet
      </button>
    </div>
  );
}

export default FdaoLogo;
