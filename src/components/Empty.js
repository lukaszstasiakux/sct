import React from "react";
import styled from "styled-components";

const Wrapper__Empty = styled.div`
  width: 100%;
  padding: 4rem 0;
  text-align: center;
`;
const Empty = () => {
  return <Wrapper__Empty>Nothing is here</Wrapper__Empty>;
};

export default Empty;
