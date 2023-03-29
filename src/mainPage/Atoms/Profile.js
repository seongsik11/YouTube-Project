import React from "react";
import styled from "styled-components";

const ProfileDiv = styled.div`

{
  width : 30px;
  height : 30px;
  border-radius : 30px;
  background-color: black;
  color : white;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-right : 20px;
  
}
    
`;

function profile() {
    return (

        <ProfileDiv>
            S
        </ProfileDiv>

    );
}

export default profile;