import NavBar from "./scene/NavBar";
import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  return (
    <div className="app bg-deep-blue">
      <NavBar selectedPage={selectedPage} setSelectedPage={selectedPage} />
    </div>
  );
}

export default App;
