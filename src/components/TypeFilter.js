import React, { useContext } from "react";
import styled from "styled-components";
import OptionFilter from "./OptionFilter";
import { AVAILABLE_FILTERS, BREAKPOINTS } from "../utils/const";
import { SiteContext } from "../context/siteContext";

const Wrapper__TypeFilter = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  padding: 0 2rem;
  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    width: 100%;
  }
`;
const Label__TypeFilter = styled.div`
  text-decoration: underline;
  margin-bottom: 1.6rem;
  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    margin-bottom: 0.8rem;
  }
`;
const Options__TypeFilter = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    flex-direction: row;
    margin-bottom: 0.4rem;
  }
`;

const TypeFilter = () => {
  const { filter, updateFilter } = useContext(SiteContext);

  const changeFilter = (filterName) => {
    if (filterName !== filter) {
      updateFilter(filterName);
    }
  };

  return (
    <Wrapper__TypeFilter>
      <Label__TypeFilter>Data sources</Label__TypeFilter>
      <Options__TypeFilter>
        {AVAILABLE_FILTERS.map((item) => {
          return (
            <OptionFilter
              check={filter === item}
              label={item}
              onClick={changeFilter}
            />
          );
        })}
      </Options__TypeFilter>
    </Wrapper__TypeFilter>
  );
};

export default TypeFilter;
