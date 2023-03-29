import React from "react";
import Styled from "styled-components";
import Video from "../atoms/Video";
import VideoTitleBox from "../molecules/VideoTitleBox";
import VideoList from "../molecules/VideoList";

export default function VideoPage() {

    return(
        <Container>
                <VideoContainer>
                    <VideoBox>
                        <Video width={"100%"} height={"100%"}/>
                        <VideoTitleBox />
                    </VideoBox>
                    <VideoListBox>
                        <VideoList width={"70%"}/>
                    </VideoListBox>
                </VideoContainer>
                <ChatListContainer></ChatListContainer>
        </Container>
    );
}

const Container = Styled.div`
    display: flex;
`;

const HeaderBox = Styled.div`
    display: flex;
    width: 100%;
    height: 56px;
    flex-direction: 'row'; 
    align-items: 'center'; 
    padding: 0 16px;
`;



const VideoContainer = Styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 65%;
    margin-top: 50px;
    margin-left: 5%;
    margin-right: 5%;
    border: 1px solid black;
    
`;

const VideoBox = Styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 55%;
`;

const VideoListBox = Styled.div`
    position: relative;
    width:370px;
    height: 100%;
    overflow-x: auto;
    flex-basis: 20%;
`;

const ChatListContainer = Styled.div`
    
`;