import React from "react";
import Articles from "./components/Articles";
import TypeFilter from "./components/TypeFilter";
import { AppWrapper, Site } from "./components/Layout";
import { SiteContextProvider } from "./context/siteContext";
import Sort from "./components/Sort";

const App = () => {
  return (
    <SiteContextProvider>
      <Site>
        <AppWrapper>
          <Sort />
          <TypeFilter />
          <Articles />
        </AppWrapper>
      </Site>
    </SiteContextProvider>
  );
};

export default App;
