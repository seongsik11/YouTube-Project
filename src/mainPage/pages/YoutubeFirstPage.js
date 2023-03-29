import React from "react";
import Search from "../Atoms/Search";
import Logo from "../Atoms/Logo";
import {Link} from "react-router-dom";
import VideoPage from "../../VideoForm/pages/VideoPage";
import Profile from "../Atoms/Profile";
import styled from "styled-components";
import Hamburger from "../Atoms/Hamburger";

const HeadDiv = styled.div`
{
  margin : 0;
  padding : 0;
  width : 100vw;
  height : 60px;
  display: flex;
  justify-content: space-between;
}`;

const MainDiv = styled.div`
{
  width : 100vw;
  
  margin : 0;
  padding : 0;
  display: flex;
}`;


export default function YoutubeFirstPage() {
    return (
        <div style={{width : "100vh"}}>
            <MainDiv>
                <Hamburger />
                <HeadDiv>
                    <Logo />
                    <Search />
                    <Profile />
                </HeadDiv>
            </MainDiv>
            <Link to="video">
                <VideoPage/>
            </Link>
        </div>
    );
}