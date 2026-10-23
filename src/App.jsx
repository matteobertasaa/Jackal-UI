import { useState } from "react";
import Navbar from "./core/layout/Navbar";
import Home from "./pages/Home";
import ComponentsLibrary from "./pages/ComponentsLibrary";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-night font-sans text-sand selection:bg-fur selection:text-night">
      <Navbar page={page} setPage={setPage} />
      {page === "home" && <Home setPage={setPage} />}
      {page === "components" && <ComponentsLibrary />}
    </div>
  );
}
