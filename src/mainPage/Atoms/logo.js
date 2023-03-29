import React from "react";
import styled from "styled-components";
import { BsYoutube } from "react-icons/bs"

const youtube = styled.div`
{
  background-color: black;
}
`;

function logo() {


    function refreshPage() {
        window.location.reload(false);
    }
    return (
        <div className={youtube} onClick={refreshPage}>
            <BsYoutube/>
        </div>
    );
}

export default logo;






