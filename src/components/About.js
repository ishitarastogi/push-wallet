import React from 'react'
import * as PushAPI from "@pushprotocol/restapi";
import { useSigner, useAccount } from "wagmi";
import "./About.css"
function About() {
         const { data: signer, isError, isLoading } = useSigner();
         const { address } = useAccount();
         async function Subscribe() {
           await PushAPI.channels.subscribe({
             signer: signer,
             channelAddress:
               "eip155:80001:0x9147BDf9aaca01B5f2680633e254a9776ecB10e5", // channel address in CAIP
             userAddress: `eip155:80001:${address}`, // user address in CAIP
             onSuccess: () => {
               console.log("opt in success");
             },
             onError: () => {
               console.error("opt in error");
             },
             env: "staging",
           });
         }

  return (
    <div className="main">
        <h1>About Us</h1>
      <div className="text">
        lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet,
        consectetur adip lorem ipsum dolor sit amet, consectetur lorem ipsum
        dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur
        adip lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
        consectetur adip,lorem ipsum dolor sit amet, consectetur adip lorem
        ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
        consectetur adip,lorem ipsum dolor sit amet, consectetur adip lorem
        ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
        consectetur adip,lorem ipsum dolor sit amet, consectetur adip lorem
        ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
        consectetur adip,lorem ipsum  sit amet, consectetur adip lorem
        ipsum dolor sit amet, consectetur
      </div>
      <div>
        {" "}
        <button className="btns " onClick={Subscribe}>
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default About