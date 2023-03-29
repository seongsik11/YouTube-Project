import React from "react";
import {Link} from "react-router-dom";
import VideoPage from "../../VideoForm/pages/VideoPage";
import SideButtons from "../molecules/SideButtons";
import ContentsButtons from "../molecules/ContentsButtons";
import styled from "styled-components";
import HeadHamb from "../molecules/HeadHamb";

const Main = styled.div`
        display: flex;
    `;

const MainDiv = styled.div`
{
  width : 100vw;
  display: flex;
}`;

export default function YoutubeFirstPage() {
    return (
        <div>
            <MainDiv>
                <HeadHamb />
            </MainDiv>
            <Main>
                <SideButtons />
                <ContentsButtons />
            </Main>
            <Link to="video">
            <VideoPage/>
            </Link>
        </div>
    );
}