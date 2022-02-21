import { Container, LoginContainer, LoginTitle, LoginInput, LoginBtn, BtnText, StatePrivSelect, BoxAccountActions, LinkAction, CopyRight, FlagsBox, Flag } from "./style";
import { FiUpload } from 'react-icons/fi';
import { ImEnter } from 'react-icons/im';

import PTFlag from '../../assets/pt-flag.png';
import USFlag from '../../assets/usa-flag.png';
import ESFlag from '../../assets/spain-flag.png';

export default function Login(){
    return (
        <Container>
            <LoginContainer>
                <LoginTitle>IPass</LoginTitle>
                <LoginInput type="text" autoComplete="off" autoCapitalize="off" placeholder="Seu e-mail" />
                <LoginBtn isAtive={false}>
                    <FiUpload size={20} color="#333" />
                    <BtnText>Selecionar chave privada</BtnText>
                </LoginBtn>
                <StatePrivSelect>A aguardar seleção da chave privada</StatePrivSelect>
                <LoginBtn isAtive={true}>
                    <ImEnter size={20} color="#fff" />
                    <BtnText>Entrar</BtnText>
                </LoginBtn>
                <BoxAccountActions>
                    <LinkAction>Nova conta</LinkAction>
                    <LinkAction>Precisa de ajuda?</LinkAction>
                </BoxAccountActions>
                <FlagsBox>
                    <Flag title="PT" src={PTFlag} width={25} />
                    <Flag title="US" src={USFlag} width={32} />
                    <Flag title="ES" src={ESFlag} width={25} />
                </FlagsBox>
                <CopyRight>Copyright (c) 2022 Tomás Dinis. Todos os direitos reservados.</CopyRight>
            </LoginContainer>
        </Container>    
    );
}