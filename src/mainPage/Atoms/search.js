import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from 'react-icons/ai';

const SearchInput = styled.input`
{width : 540px;
  height : 40px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  border : solid 1px lightgrey;
  padding-left: 10px;
  font-size: 20px;
};
`;

const SearchButton = styled.button`
{
  margin:0;
  width : 64px;
  height : 40px;
  border : solid 1px lightgrey;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;

  
  &:hover {
    background-color: #E1E1E1;
  }
};
`;



const SearchDiv = styled.div`
{
  width : fit-content;
  height : fit-content;
  align-items: center;
}
`;



function Search() {
    return (

            <SearchDiv>
        <SearchInput type={"text"} placeholder={"검색"}></SearchInput>
        <SearchButton style={{verticalAlign : "middle"}}>
            <AiOutlineSearch/>
        </SearchButton>
            </SearchDiv>

    )
}

export default Search;