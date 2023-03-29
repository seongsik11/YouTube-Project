import React from "react";
import styled from "styled-components";
import {RxHamburgerMenu} from "react-icons/rx";

const HamDiv = styled.div`
{
  margin-top: 5px;
  margin-right: 10px;
  width : 30px;
  height : 30px;
  border-radius:  15px;
  align-items: center;
  justify-content: center;
  display: flex;
  &:hover {
    background-color: #E1E1E1;
    
  }
}
`;

function hamburger() {
    return (
        <HamDiv>
            <RxHamburgerMenu />
        </HamDiv>
    );
}

export default hamburger;