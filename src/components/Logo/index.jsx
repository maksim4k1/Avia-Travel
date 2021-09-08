import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/Logo.svg";

const LogoElement = styled.div`
  width: 100%;
  height: 60px;
  margin: 0 0 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 100%;
`;

function Logo () {
  return(
    <LogoElement>
      <Link to="/">
        <Image src={logo} alt="Avia Travel" />
      </Link>
    </LogoElement>
  );
}

export default Logo;