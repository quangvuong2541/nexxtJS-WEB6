import styled from "styled-components";

export const Wrapper = styled.div`
    display :flex;
    justify-content : space-between;
    border-bottom: 1px solid lightblue;
    padding-bottom:  20px;
    div{
        flex: 1 ;
    }
    .information, button{
        display: flex;
        justify-content: space-around;
    }
    img {
        max-height: 250px;
        object-fit: cover;
        border-radius: 20px 20px 0 0 ;
    }
    div {
        padding: 1rem;
        height: 100% ;
    }

`