import React from "react";
import styled from "styled-components";

const SideButton = ({icon, name}) => {


    const Bar = styled.div`
        padding: 9px;
        width: 230px;
        height: 36px;
        line-height: 36px;
        margin-bottom: 2px;
        color: black;
        
        &:hover{
          background-color: #E1E1E1;
          border-radius: 16px;
        }
    `;


    return (
        <Bar>
            <div>
                {icon}
                {name}
            </div>
        </Bar>
    );

}

export default SideButton;

