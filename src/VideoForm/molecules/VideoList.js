import React, {useEffect, useState} from "react";
import axios from "axios";
import Styled from "styled-components";

export default function VideoList({width, height}) {
    const [sideVideos, setSideVideos] = useState("");

    const dataInfo = async () => {
        await axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q=movie&key=AIzaSyALE8i5ioHbPaLZqIvKJf-4m_w4wn8i0HI")
            .then((res) => {
                    setSideVideos(res.data)
                    console.log(res.data)
                }
            ).catch((err) => {
                if (err.response.status === 401) {
                    console.log(err);
                }
            });
    }

    useEffect(() => {
        dataInfo();
    }, [])

    return (
        <ListBox style={{width: `${width}`, height: `${height}`}}>
            {
                sideVideos.items && sideVideos.items.map((item, index) => {
                    return (
                        <div key={index} style={{position:"relative",  display:"flex", justifyContent:"left", marginLeft:"50px",marginBottom: "20px"}}>
                            <img src={item.snippet.thumbnails.default.url} alt="" style={{width: "168px", height:"94px"}}/>
                            <p style={{marginLeft: "20px", fontSize: "20px", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", wordBreak:"break-all", width:"200px", height:"80px"}}>{item.snippet.title}</p>
                        </div>
                    );
                })
            }
        </ListBox>
    );
}

const ListBox = Styled.div`
    float: left;
`;