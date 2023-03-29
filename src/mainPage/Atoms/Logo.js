import React from "react";
import styled from "styled-components";
import { SiYoutube } from "react-icons/si";

const YTlogo = styled.div`
{
  margin-top: 5px;
  width : fit-content;
  height : fit-content;
  display: flex;
}

  .MainLogo {
    height : 30px;
    width : 30px;
  }
  
`;

function logo() {


    function refreshPage() {
        window.location.reload(false);
    }
    return (
        <YTlogo>
            <SiYoutube onClick={refreshPage} className="MainLogo" />
        </YTlogo>
    );
}

export default logo;






