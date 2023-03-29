import React from "react";
import styled from "styled-components";
import { SiYoutubetv } from "react-icons/si";

const YTlogo = styled.div`
{
  width : fit-content;
  height : fit-content;
  display: flex;
}
`;



function logo() {


    function refreshPage() {
        window.location.reload(false);
    }
    return (
        <YTlogo>
            <SiYoutubetv onClick={refreshPage} size="50"/>
        </YTlogo>
    );
}

export default logo;






