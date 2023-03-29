import React from "react";
import ContentsButton from "../Atoms/ContentsButton";
import styled from "styled-components";

const Content = styled.div`
        width: 100%;
        margin-left: 65px;
        margin-top: 20px;
    `;

const menuItem=[
    {
        name:"전체"
    },
    {
        name:"음악"
    },
    {
        name:"게임"
    },
    {
        name:"스포츠"
    }
]


const ContentsButtons = () => {
    return (
        <Content>
            <div style={{display:"flex"}}>
                {menuItem.map((item, index) =>(
                    <ContentsButton name={item.name} key={index}/>
                ))}
            </div>
        </Content>
    );
}


export default ContentsButtons;