import React from "react";
import styled from "styled-components";
import { dateFormater } from "../helpers/articles";
import { BREAKPOINTS } from "../utils/const";

const Wrapper__ArticleContent = styled.div`
  width: calc(100% - 16rem);
  display: flex;
  flex-direction: column;
  padding: 0.8rem;
  @media (max-width: ${BREAKPOINTS.SMALL}) {
    width: calc(100% - 14rem);
  }
`;
const Header__ArticleContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.6rem;
  @media (max-width: ${BREAKPOINTS.SMALL}) {
    flex-direction: column;
  }
`;
const Title__ArticleContent = styled.div`
  font-size: 2.4rem;
  font-weight: bold;
  color: #333333;
  width: calc(100% - 10rem);
  padding-right: 0.8rem;
  @media (max-width: ${BREAKPOINTS.SMALL}) {
    font-size: 2rem;
    width: 100%;
  }
  @media (max-width: ${BREAKPOINTS.MINI}) {
    font-weight: normal;
  }
`;
const Date__ArticleContent = styled.div`
  text-align: right;
  width: 10rem;
  font-size: 1.4rem;
  color: #568459;
  @media (max-width: ${BREAKPOINTS.SMALL}) {
    text-align: left;
    margin-top: 0.8rem;
  }
`;

const Text__ArticleContent = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  width: 90%;
  @media (max-width: ${BREAKPOINTS.SMALL}) {
    display: none;
  }
`;

const ArticleContent = ({ title, date, preamble }) => {
  return (
    <Wrapper__ArticleContent>
      <Header__ArticleContent>
        <Title__ArticleContent>{title}</Title__ArticleContent>
        <Date__ArticleContent>{dateFormater(date)}</Date__ArticleContent>
      </Header__ArticleContent>
      <Text__ArticleContent>{preamble}</Text__ArticleContent>
    </Wrapper__ArticleContent>
  );
};

export default ArticleContent;
