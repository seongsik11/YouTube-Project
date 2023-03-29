import React from "react";
import Search from "../atoms/Search";
import Logo from "../atoms/Logo";
import {Link} from "react-router-dom";
import VideoPage from "../../VideoForm/pages/VideoPage";

export default function YoutubeFirstPage() {
    return (
        <div>
            <Search />
            <Logo />
            <Link to="video">
            <VideoPage/>
            </Link>
        </div>
    );
}