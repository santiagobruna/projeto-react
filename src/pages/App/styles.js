import  {styled}  from "styled-components";

export const Container = styled.div `
    background-color: #7091F5;
    padding: 20px;
    border-radius: 10px;

    h1{
        color: #FFF;
    }

    input {
        margin-top: 35px;
        margin-right: 15px;
        height: 35px;
        border: none;
        border-radius: 5px;
        outline: none;
        padding-left: 10px;
    }
`

export const  AddButton = styled.button `
    background-color: #97FFF4;
    color: #000;
    height: 35px;
    border: none;
    border-radius: 3px;
    padding: 0.5rem;
    cursor: pointer;

    &:hover {
        background-color: #45FFCA;
        opacity: 0.8;
    }
`

export const Product = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    background-color: #FFF;
    border-radius: 4px;
    margin-top: 15px;
    padding: 10px;
    font-size: 20px;

    p {
        text-transform: capitalize;
        font-weight: bold;
    }
`
export const TrashButton = styled.button `
    background-color: transparent;
    font-size: 20px;
    border: none;

   
`