import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from 'react-icons/ai';

const SearchInput = styled.input`
{width : 500px;
  height : 35px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  border : solid 1px lightgrey;
  padding-left: 10px;
};
`;

const SearchButton = styled.button`
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
            <AiOutlineSearch size="20"/>
        </SearchButton>
            </SearchDiv>

    )
}

export default Search;