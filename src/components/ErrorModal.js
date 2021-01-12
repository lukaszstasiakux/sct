import React from "react";
import styled from "styled-components";

const Overlayer__Modal = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.86);
  display: flex;
  justify-content: center;
  height: 100vh;
  left: 0;
  padding: 2rem;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 20;
`;

const Content__Modal = styled.div`
  width: 100%;
  max-width: 64rem;
  background-color: #ffffff;
  max-height: 100%;
  padding: 4rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Info__Modal = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 2.4rem;
`;

const Action__Modal = styled.div`
  width: 100%;
  text-align: center;
  color: #327935;
  cursor: pointer;
`;
const ErrorModal = () => {
  const refresh = () => {
    window.location.reload();
  };

  return (
    <Overlayer__Modal>
      <Content__Modal>
        <Info__Modal>Ups... something went wrong. Please try again</Info__Modal>
        <Action__Modal onClick={() => refresh()}>Refresh</Action__Modal>
      </Content__Modal>
    </Overlayer__Modal>
  );
};

export default ErrorModal;
