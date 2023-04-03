import React from "react";
import { UserContextProvider } from "./src/context/UserContext";
import Index from "./Index"

export default function App() {
  return (
    <UserContextProvider>
      <Index />
    </UserContextProvider>
  );
}
