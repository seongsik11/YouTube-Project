import React from "react";
import styled from "styled-components";

const ContentsButton = ({name}) => {


    const Bar = styled.div`
      padding: 9px;
      min-width: 45px;
      height: 24px;
      line-height: 24px;
      color: black;
      text-align: center;
      background-color: #eeecec;
      margin-right: 20px;
      border-radius: 8px;

      &:hover {
        background-color: #E1E1E1;
        border-radius: 11px;
      }

      &:active {
        background-color: black;
        color: white;
      }
    `;


    return (
        <Bar>
            <div>
                {name}
            </div>
        </Bar>
    );

}

export default ContentsButton;

