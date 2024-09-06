

import React, { useEffect,useState } from "react";
import {useLocalState} from "./useLocalStorage";
function Jwttoken() {
    const [jwt, setJwt] = useLocalState("", "jwt");
    useEffect(() => {
      if (!jwt) {
        const reqBody = {
          userName: "pavithraa123",
          password: "pav123",
        };
        fetch("/admin/auth/signin", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "post",
          body: JSON.stringify(reqBody),
        })
          .then((response) => Promise.all([response.json(), response.headers]))
          .then(([body, headers]) => {
            setJwt(headers.get("authorization"));
            console.log(`We have the JWT: ${jwt}`);
            // console.log(body);
          });
      }
    }, [jwt]);
  
    return (
     <div>
        <h1>hello</h1>
        <h6>${jwt}</h6>
     </div>
    );
  }
  
  export default Jwttoken;