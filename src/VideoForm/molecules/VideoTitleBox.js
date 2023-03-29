import React, {useEffect, useState} from "react";
import axios from "axios";
import Styled from "styled-components";

export default function VideoTitleBox() {
    const [videoTitle, setVideoTitles] = useState("");

    const dataInfo = async () => {
        await axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q=movie&key=AIzaSyALE8i5ioHbPaLZqIvKJf-4m_w4wn8i0HI")
            .then((res) => {
                    setVideoTitles(res.data)
                    console.log(res.data)
                }
            ).catch((err) => {
                if (err.response.status === 401) {
                    console.log(err);
                }
            });
    }

    useEffect(() => {
        dataInfo()
    }, [])

    return (
        <VideoTitleBoxContainer>
            <Box>
                <VideoTitle>
                    영상제목
                </VideoTitle>
                <VideoLike>

                </VideoLike>
            </Box>

        </VideoTitleBoxContainer>
    );
}

const VideoTitleBoxContainer = Styled.div`
    width: 100%;
`;

const Box = Styled.div`
    display: flex;
`;

const VideoTitle = Styled.div`
    font-size: 30px;
    padding-top: 20px;
    padding-left: 20px
`;

const VideoLike = Styled.div`
    
`;