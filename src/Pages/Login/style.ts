import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 100px;
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ecedef;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 5px;
    padding: 10px;
    width: 30%;
`;

export const LoginTitle = styled.h1`
    font-size: 25px;
    margin-top: 15px;
`;

export const LoginInput = styled.input`
    margin-top: 15px;
    padding: 10px;
    border: 1px solid #a1a6a9;
    width: 90%;
    outline: none;
    &::placeholder{
        color: #a1a6a9;
    }
`;

export const LoginBtn = styled.div`
    background: #006fb9;
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    width: 90%;
    justify-content: center;
    padding: 10px;
    align-items: center;
    user-select: none;
    cursor: pointer;
`;

export const BtnText = styled.p`
    color: #fff;
    font-size: 18px;
    margin-left: 10px;
    font-weight: bold;
`;

export const StatePrivSelect = styled.p`
    align-self: flex-start;
    margin-left: calc(5% - 10px);
    margin-top: 5px;
`;