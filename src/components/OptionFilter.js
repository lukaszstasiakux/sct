import React from "react";
import styled from "styled-components";
import { BREAKPOINTS } from "../utils/const";

const Wrapper__OptionFilter = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  margin-bottom: 0.8rem;
  color: ${(p) => (p.selected ? "#327935" : "#000000")};
  i {
    font-size: 2.4rem;
    line-height: 2.4rem;
    width: 2.4rem;
    text-align: left;
    margin-right: 0.4rem;
    color: ${(p) => (p.selected ? "#327935" : "#000000")};
  }
  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    margin-right: 1.6rem;
  }
`;

const Label__OptionFilter = styled.div`
  text-transform: capitalize;
`;

const OptionFilter = ({ check, label, onClick }) => {
  return (
    <Wrapper__OptionFilter onClick={() => onClick(label)} selected={check}>
      <i class="material-icons" selected={check}>
        {check ? "check_box" : "check_box_outline_blank"}
      </i>
      <Label__OptionFilter>{label}</Label__OptionFilter>
    </Wrapper__OptionFilter>
  );
};

export default OptionFilter;
