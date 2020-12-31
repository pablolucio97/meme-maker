
import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    
    `

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 550px;
    border-radius: 8px;
    box-shadow: 0 0 3px 1px #222;
    background: #fff;
    padding: 20px;
    margin: 20px auto;

    h2{
        color: #392d2d;
        font-size: 1.6rem;
    }
    `

export const Templates = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90px;
    background: #eee;
    border-radius: 8px;
    overflow-y: hidden;
    margin: 10px auto;
    padding: 0 15px;
    
    button{
        border: 0;
        background: transparent;
        margin-right: 10px;
        
        &.selected{
            filter: brightness(.8);
            border: 3px dotted #22ddff
        }

        img{
            width: 53px;
            height: 53px
        }

    }
`

export const Form = styled.form`
    input{
        width: 100%;
        height: 40px;
        border-radius: 4px;
        border: 1px solid #dbdbdb;
        font-size: 1.2rem;
        margin-bottom: 10px;
        padding: 0px 7px;
        margin-top: 10px;
    }
`


export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 40px;
    border-radius: 8px;
    background-color: #4395d8;
    color: #fff;
    font-size: 1.4rem;
    transition: background .2s ease-in;

    &:hover{
        background: #3678a3
    }

`
