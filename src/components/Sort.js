import React, { useContext } from "react";
import styled from "styled-components";
import { BREAKPOINTS, SORT } from "../utils/const";
import { SiteContext } from "../context/siteContext";

const Wrapper__Sort = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 2rem;
  right: 0rem;
  cursor: pointer;
  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    top: 1.2rem;
    right: 1.2rem;
  }
  i {
    font-size: 3.2rem;
    line-height: 3.2rem;
    width: 3.2rem;
    text-align: left;
    display: flex;
  }
`;

const Label__Sort = styled.div`
  text-decoration: underline;
`;

const Sort = () => {
  const { sort, updateSort } = useContext(SiteContext);

  const toggleSort = () => {
    updateSort(sort === SORT.ASC ? SORT.DESC : SORT.ASC);
  };
  return (
    <Wrapper__Sort onClick={() => toggleSort()}>
      <Label__Sort>Sort by date</Label__Sort>
      <i class="material-icons">
        {sort === SORT.ASC ? "arrow_drop_down" : "arrow_drop_up"}
      </i>
    </Wrapper__Sort>
  );
};

export default Sort;
