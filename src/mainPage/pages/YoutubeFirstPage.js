import React from "react";

import {Link} from "react-router-dom";
import VideoPage from "../../VideoForm/pages/VideoPage";

import styled from "styled-components";
import HeadHamb from "../Molecules/HeadHamb";




const MainDiv = styled.div`
{
  width : 100vw;
  display: flex;
}`;


export default function YoutubeFirstPage() {
    return (
        <div style={{width : "100vh"}}>
            <MainDiv>
                <HeadHamb/>
            </MainDiv>
            <Link to="video">
                <VideoPage/>
            </Link>
        </div>
    );
}