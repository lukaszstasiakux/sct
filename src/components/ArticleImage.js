import React from "react";
import styled from "styled-components";
import { BREAKPOINTS } from "../utils/const";

const Wrapper__ArticleImage = styled.div`
  max-width: 18rem;
  width: 100%;
  height: auto;
  overflow: hidden;
  img {
    width: 100%;
    display: block;
    height: auto;
  }
  @media (max-width: ${BREAKPOINTS.SMALL}) {
    max-width: 14rem;
  }
`;

const ArticleImage = ({ src }) => {
  return (
    <Wrapper__ArticleImage>
      <img src={src} />
    </Wrapper__ArticleImage>
  );
};
export default ArticleImage;
