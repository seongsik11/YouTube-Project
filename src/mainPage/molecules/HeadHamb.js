import React from "react";
import Hamburger from "../Atoms/Hamburger";
import Logo from "../Atoms/Logo";
import Search from "../Atoms/Search";
import Profile from "../Atoms/Profile";
import styled from "styled-components";

const HeadDiv = styled.div`
{
  margin : 0;
  padding : 0;
  width : 100vw;
  height : 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}`;

function headhamber() {
    return (
        <>
            <Hamburger />
            <HeadDiv>
                <Logo />
                <Search />
                <Profile />
            </HeadDiv>
        </>
    );
}

export default headhamber;