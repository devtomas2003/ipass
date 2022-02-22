import styled from "styled-components";
import Background from "../../assets/bg.png";

type propsBtnLogin = {
    isAtive: boolean;
};

export const PageContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background: url(${Background}) no-repeat;
    background-position-y: 78%;
`;

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
    background: ${(props: propsBtnLogin) => props.isAtive ? '#006fb9' : '#e0e7eb'};
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    width: 90%;
    justify-content: center;
    padding: 10px;
    align-items: center;
    user-select: none;
    cursor: pointer;
    border-radius: 5px;
    color: ${(props: propsBtnLogin) => props.isAtive ? '#fff' : '#333'};
`;

export const BtnText = styled.p`
    font-size: 18px;
    margin-left: 10px;
    font-weight: bold;
`;

export const BoxAccountActions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 94%;
    margin-top: 10px;
`;

export const LinkAction = styled.a`
    text-decoration: underline;
    cursor: pointer;
`;

export const CopyRight = styled.p`
    align-self: flex-end;
    margin-top: 10px;
    margin-bottom: 5px;
    margin-right: 3%;
`;

export const FlagsBox = styled.div`
    align-self: flex-start;
    margin-left: 3%;
    margin-top: 50px;
`;

export const Flag = styled.img`
    cursor: pointer;
    &:not(:first-child){
        margin-left: 3px;
    }
`;