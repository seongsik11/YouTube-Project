import React, {useEffect, useState} from "react";
import axios from "axios";
import Styled from "styled-components";


export default function VideoTitleBox() {
    const [videoTitle, setVideoTitles] = useState("");

    const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=movie&key=AIzaSyBGQQv0H_lEPn79gwqqbNj1yl89gCRIpWE"

    const dataInfo = async () => {
        await axios.get(url)
            .then((res) => {
                    setVideoTitles(res.data)

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