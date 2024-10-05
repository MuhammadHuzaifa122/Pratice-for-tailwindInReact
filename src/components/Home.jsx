import React from "react";
import NewCounter from "./NewCounter";
import OldCounter from "./OldCounter";

export default function Home() {
  return (
    <>
      <div>Welcome to Home</div>
      <NewCounter name="New Counter" />
      <hr className="my-4" />
      <OldCounter name="Old Counter" />
    </>
  );
}
