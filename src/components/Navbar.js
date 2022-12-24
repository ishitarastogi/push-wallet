import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
// import logo from "./image/logo.png";
import "./Navbar.css";
import { useSigner, useAccount } from "wagmi";

function Navbar() {


  return (
    <div>
      <header>
    <h3>Pusher</h3>
        
        <ConnectButton />
      </header>
    </div>
  );
}

export default Navbar;
