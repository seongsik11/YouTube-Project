import React from "react";
import styled from "styled-components";
import { SiYoutube } from "react-icons/si";
import {GrCatalogOption} from "react-icons/gr";

const YTlogo = styled.div`
{
 
  width : fit-content;
  height : fit-content;
  display: flex;
}

  .MainLogo {
    margin-top: 7px;
    margin-right: 5px;
    height : 30px;
    width : 30px;
  }
  
`;

const LogoP = styled.p`
{
  font-size: 15px;
  
}`;

function logo() {


    function refreshPage() {
        window.location.reload(false);
    }
    return (

        <YTlogo onClick={refreshPage}>
            <SiYoutube className="MainLogo" color="red"/>
            <LogoP>YouTube</LogoP>
        </YTlogo>


    );
}

export default logo;






