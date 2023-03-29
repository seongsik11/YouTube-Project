import SideButton from "../Atoms/SideButton";
import React from "react";
import {AiOutlineHome} from "react-icons/ai";
import {FaRegThumbsUp} from "react-icons/fa";
import {RxCounterClockwiseClock} from "react-icons/rx";
import {AiOutlineClockCircle} from "react-icons/ai";
import {ImBoxAdd} from "react-icons/im";
import styled from "styled-components";

const Side = styled.div`
        width: 250px;
        height: 100%;
        margin-left: 10px;
        margin-top: 20px;
    `;

const menuItem=[
    {
        name:"홈",
        icon:<AiOutlineHome size={24} style={{paddingRight: "20px", paddingLeft: "7px" , verticalAlign: "middle", paddingBottom:"3px"}}/>
    },
    {
        name:"구독",
        icon:<ImBoxAdd size={24} style={{paddingRight: "20px", paddingLeft: "7px" , verticalAlign: "middle", paddingBottom:"3px"}}/>
    }
]
const menuItem2=[
    {
        name:"시청 기록",
        icon:<RxCounterClockwiseClock size={24} style={{paddingRight: "20px", paddingLeft: "7px" , verticalAlign: "middle", paddingBottom:"3px"}}/>
    },
    {
        name:"나중에 볼 동영상",
        icon:<AiOutlineClockCircle size={24} style={{paddingRight: "20px", paddingLeft: "7px" , verticalAlign: "middle", paddingBottom:"3px"}}/>
    },
    {
        name:"좋아요 표시한 동영상",
        icon:<FaRegThumbsUp size={24} style={{paddingRight: "20px", paddingLeft: "7px" , verticalAlign: "middle", paddingBottom:"3px"}}/>
    }
]

const SideButtons = () => {
    return (
        <Side>
            <div>
                {menuItem.map((item, index) => (
                    <SideButton icon={item.icon} name={item.name} key={index}/>
                ))}
                <hr/>
                {menuItem2.map((item, index) => (
                    <SideButton icon={item.icon} name={item.name} key={index}/>
                ))}
            </div>
        </Side>
    );
}


export default SideButtons;