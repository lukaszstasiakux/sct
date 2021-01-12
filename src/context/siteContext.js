import React, { createContext, useState } from "react";
import { TYPE, SORT } from "../utils/const";

export const SiteContext = createContext();

export const SiteContextProvider = (props) => {
  const [filter, updateFilter] = useState(TYPE.FASHION);
  const [sort, updateSort] = useState(SORT.ASC);
  const [error, updateError] = useState(false);
  return (
    <SiteContext.Provider
      value={{
        filter,
        updateFilter,
        sort,
        updateSort,
        error,
        updateError,
      }}
    >
      {props.children}
    </SiteContext.Provider>
  );
};
