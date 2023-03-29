import React, {useEffect, useState} from "react";
import axios from "axios";
import YouTube from "react-youtube";

export default function Video({width, height}) {

    const [videos, setVideos] = useState("");

    const dataInfo = async () => {
        await axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q=movie&key=AIzaSyALE8i5ioHbPaLZqIvKJf-4m_w4wn8i0HI")
            .then((res) => {
                    setVideos(res.data)
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
        <div>
            <YouTube
                key={videos.items}
                opts={{
                    width: `${width}`,
                    // height: `${height}`,
                    height: `${"900px"}`,
                    playerVars: {
                        autoplay: 0,
                        modestBranding: 1,
                    },
                }}

            />
        </div>
    );
}