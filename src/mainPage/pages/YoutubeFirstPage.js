import React from "react";
import Search from "../Atoms/Search";
import Logo from "../Atoms/Logo";
import {Link} from "react-router-dom";
import VideoPage from "../../VideoForm/pages/VideoPage";
import SideButtons from "../molecules/SideButtons";
import ContentsButtons from "../molecules/ContentsButtons";
import styled from "styled-components";

const Main = styled.div`
        display: flex;
    `;

export default function YoutubeFirstPage() {
    return (
        <div>
            <Search />
            <Logo />
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