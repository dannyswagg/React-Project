import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import image2 from "../Assests/image2.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${image2});
    background-size: cover;
    height: 200px;
    color: #f2f7ff;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: red;
    position: absolute;
    top: 0;
    left: 0;
    botom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => {
  return (
    <Styles>
      <div className="jumbo container-fluid text-center p-5">
        <div className="overlay"></div>
        <Container>
          <h1>Welcome User!</h1>
          <p>Watch out for more amazing React projets here.</p>
        </Container>
      </div>
    </Styles>
  );
};
