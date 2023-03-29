import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import YoutubeFirstPage from "./mainPage/pages/YoutubeFirstPage";
import VideoPage from "./VideoForm/pages/VideoPage";



function App() {
    return (

    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< YoutubeFirstPage/>} />
                <Route path="video" element={<VideoPage/>} />
            </Routes>
        </BrowserRouter>
    </div>
    );
}

export default App;