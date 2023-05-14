import styled from "@emotion/styled";

export const PaintContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const PaintBoard = styled.canvas`
    width: 40%;
    height: 70%;
    background-color: rgb(240, 248, 255);
    border-radius: 10px;
    box-shadow: 1px 1px 25px 1px rgb(14, 1, 1);
`;

export const SelectColor = styled.div`
    width: 40%;
    height: 10%;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ColorBtn = styled.button`
    padding: 5%;    
    border: none;
    outline: none;
    border-radius: 50%;
    background-color: ${(props) => props.color ? props.color : "none" };
    cursor: pointer;
`;