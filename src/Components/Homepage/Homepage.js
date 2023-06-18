import React from "react";
import { Button } from "react-bootstrap";

export const Homepage = ({setLoginUser}) => {
  return (
    <>
      <div>
        <h1>This is the HomePage</h1>
      </div>
      <Button onClick={() => setLoginUser({})}>Logout</Button>
    </>
  );
};
