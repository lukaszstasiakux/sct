import React from "react";
import styled from "styled-components";
import ArticleContent from "./ArticleContent";
import ArticleImage from "./ArticleImage";

const Wrapper__Article = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 3.2rem;
  background-color: #ffffff;
`;

const Article = ({ details }) => {
  const { image, title, date, preamble, id } = details;
  return (
    <Wrapper__Article data-id={id}>
      <ArticleImage src={image} />
      <ArticleContent title={title} date={date} preamble={preamble} />
    </Wrapper__Article>
  );
};

export default Article;
