import React from "react";
import axios from "axios";

export const getVideoApi = async () => {
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