import styled from "styled-components";
import { BREAKPOINTS } from "../utils/const";

export const Site = styled.div`
  width: 100%;
  display: flex;
  font-size: 1.6rem;
  min-height: 100vh;
`;

export const AppWrapper = styled.div`
  width: 100%;
  max-width: 90rem;
  margin: 0 auto;
  display: flex;
  position: relative;
  padding: 8rem 0;
  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    flex-direction: column;
    padding: 2rem 0;
  }
`;

export const ContentArea = styled.div`
  width: calc(100% - 20rem);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    width: 100%;
    padding: 0 2rem;
  }
`;
