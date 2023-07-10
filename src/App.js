import NavBar from "./scene/NavBar";
import DotGroup from "./scene/DotGroup.jsx";
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScrol = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScrol);
    return () => window.removeEventListener("scroll", handleScrol);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <NavBar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={selectedPage}
      />
      <div className="w-5/6 mx-aut0 md:h-full">
        {isAboveMediumScreen && (
          <DotGroup>
            selectedPage={selectedPage}
            setSelectedPage={selectedPage}
          </DotGroup>
        )}
      </div>
    </div>
  );
}

export default App;
