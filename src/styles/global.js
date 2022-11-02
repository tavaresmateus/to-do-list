import styled, {createGlobalStyle} from "styled-components"
export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }

    body{
        background-color: #011F26;
        font-family: 'Quicksand', sans-serif;
        color: white;
    }

    h1{
        margin: auto;
    }

    input, textarea, button{
        cursor: pointer;
    }

    .input-todo {
        border-radius: 4px;
        width: 100%;
        font-size: 2rem;
    }

    header{
        width: 100%;
    }

    .todo{
        margin-top: 20px;
        display: flex;
        width: 100%;
    }

    .todo button{
        width: 50px;
        height: 70px;
        margin-left: 20px;
    }

    .task-box{
        background-color: black;
        width: 50%;
        margin: 10px auto;
        padding: 1.2rem;
        border-radius: 5px;
        display: flex;
    }

    .task-box p {
        position: relative;
        top: 2px;
        margin-left: 10px;
        font-size: 1.5rem;
    }

    .task-box.completed{
        opacity: 0.3;
    }

    .check-and-text{
        width: 100%;
        margin:0;   
        display: flex;
    }
    .checkbox-container{
        width: 100%;
        margin:0;   
        display: flex;
    }

    .input-task {
        padding: 10px;
        width: 50px;
    }

    p{
       width: 90%;
    }

    .button-remove{
        cursor: pointer;
    }

    @media(max-width: 700px){
        .container{
            width: 90%;
            margin: 10px auto;
        }
        
    }
`;
