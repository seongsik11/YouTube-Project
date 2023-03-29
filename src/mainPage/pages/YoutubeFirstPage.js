import React from "react";
import Search from "../Atoms/Search";
import Logo from "../Atoms/Logo";
import {Link} from "react-router-dom";
import VideoPage from "../../VideoForm/pages/VideoPage";
import Profile from "../Atoms/Profile";
import styled from "styled-components";

const HeadDiv = styled.div`
{
  margin : 0;
  padding : 0;
  width : 100vw;
  height : 60px;
  display: flex;
  justify-content: space-between;
}`;


export default function YoutubeFirstPage() {
    return (
        <div>
            <HeadDiv>
                <Logo />
                <Search />
                <Profile />
            </HeadDiv>
                <Link to="video">
                    <VideoPage/>
                </Link>
        </div>
    );
}