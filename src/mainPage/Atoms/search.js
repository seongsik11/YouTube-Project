import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from 'react-icons/ai';

const _input = styled.input`
{width : 500px;
  height : 35px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  border : solid 1px lightgrey;
  padding-left: 10px;
};
`;

const _button = styled.button`
{width : 65px;
  height : 39px;
  border : solid 1px lightgrey;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  &:hover {
    background-color: #E1E1E1;
  }
};
`;



const _div = styled.div`
{
  width : fit-content;
  height : fit-content;
  align-items: center;
}
`;



function search() {
    return (

            <_div>
        <_input type={"text"} placeholder={"검색"}></_input>
        <_button>
            <AiOutlineSearch/>
        </_button>
            </_div>

    )
}

export default search;