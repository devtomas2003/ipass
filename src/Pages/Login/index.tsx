import { Container, LoginContainer, LoginTitle, LoginInput, LoginBtn, BtnText, StatePrivSelect } from "./style";
import { FiUpload } from 'react-icons/fi';
import { ImEnter } from 'react-icons/im';

export default function Login(){
    return (
        <Container>
            <LoginContainer>
                <LoginTitle>IPass</LoginTitle>
                <LoginInput type="text" autoComplete="off" autoCapitalize="off" placeholder="Seu e-mail" />
                <LoginBtn>
                    <FiUpload size={20} color="#fff" />
                    <BtnText>Selecionar chave privada</BtnText>
                </LoginBtn>
                <StatePrivSelect>A aguardar seleção da chave privada</StatePrivSelect>
                <LoginBtn>
                    <ImEnter size={20} color="#fff" />
                    <BtnText>Entrar</BtnText>
                </LoginBtn>
            </LoginContainer>
        </Container>    
    );
}