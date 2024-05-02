import React, { useState, useEffect } from "react";
import { ThemePlantar } from "./Components/Themes/style";
import Layout from "./views/Layout";

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("#fff");

  useEffect(() => {
    const hostname = window.location.hostname;

    if (hostname === "https://plantar.com.br") {
      setBackgroundColor("#eee");
    } else if (hostname === "localhost" || hostname === "localhost:3000") {
      setBackgroundColor("#fff");
    }
  }, []);

  return (
    <>
      <ThemePlantar backgroundColor={backgroundColor}>
        <Layout />
      </ThemePlantar>
    </>
  );
};

export default App;
