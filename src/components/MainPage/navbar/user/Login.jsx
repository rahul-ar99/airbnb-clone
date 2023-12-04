import React ,{useEffect} from 'react';
import styled from 'styled-components';


const Login = ({loginClose}) => {

    useEffect(()=>{
        document.body.style.overflow = "hidden"
        return ()=>(
            document.body.style.overflow = "auto"
        )
    })
    console.log(loginClose)

    return (
        <Screen 
            onClick={(e) => {
                if (!e.target.closest(Modal)) {
                loginClose(false);
            }}}
        >
            <Modal>
                <LoginNav><LoginHead>Log in or sign up</LoginHead></LoginNav>
                <MainDiv>

                <LoginContent>
                    <ContentHead>Welcome to Airbnb</ContentHead>
                    <LoginForm>
                        <InputDiv>
                            <CountryInput></CountryInput>
                            <NumberInput></NumberInput>
                        </InputDiv>
                        <Text>We'll call or text you to confirm your number Standard message and data rates apply<Privacy> Privacy Policy</Privacy></Text>
                        <ContinueBtn>Countinue</ContinueBtn>
                    </LoginForm>
                </LoginContent>
                <Or><hr />or<hr /></Or>
                <LoginLinks>
                    <Links>
                        <Btn>Countinue with Facebook</Btn>
                    </Links>
                    <Links>
                        <Btn>Countinue with Google</Btn>
                    </Links>
                    <Links>
                        <Btn>Countinue with Apple</Btn>
                    </Links>
                    <Links>
                        <Btn>Countinue with email</Btn>
                    </Links>
                </LoginLinks>

                </MainDiv>
                <CloseBtn onClick={()=>loginClose(false)}>
                    <CloseImg src={require("../../../assets/icons/close.png")}></CloseImg>
                </CloseBtn>
            </Modal>
        </Screen>
    );
};


const Screen = styled.div`
    z-index: 3;
    position: fixed;
    width: 100vw;
    overflow: hidden;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00000092;
`;
const Modal = styled.div`
    z-index: 4;
    background-color:white;
    display: flex;
    flex-direction: column;
    width: 35rem;
    position: relative;
    border-radius: 13px;
    overflow: hidden;
    padding-bottom:23px;

`;

const LoginNav = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    border-bottom: 1px solid #c3c3c3;
`;
const LoginHead = styled.p`
    font-size: 16px;
    font-weight: 600;
    padding: 18px 0;
`;

const MainDiv = styled.div`
    padding: 0 20px;
`;
const LoginContent = styled.div`

`;
const ContentHead = styled.p`
    font-size: 22px;
    padding: 35px 0 20px ;
`;

const InputDiv = styled.div`
    border-radius: 10px;
    border: 1px solid black;
    overflow: hidden;

`

const LoginForm = styled.form`
`;


const CountryInput = styled.input`
    border-bottom: 1px solid black;
    width: 100%;
    padding: 14px 0;
    `;
const NumberInput = styled.input`
width: 100%;
padding: 14px;

`;
const Text = styled.p`
    font-size: 11px;
`;
const Privacy = styled.span`

`;
const Btn = styled.button`
    padding: 12px 0;
    display: flex;
    justify-content: center;
    width: 100%;
    border-radius: 8px;
    border: 1px solid black;
    font-size: 14px;
    font-weight: 500;

`;
const ContinueBtn = styled.div`
    padding: 12px 0;
    display: flex;
    justify-content: center;
    background-color: #FF385C;
    width: 100%;
    border-radius: 8px;
    font-size: 15px;
    color: white;
    font-weight: 600;
    margin-top: 10px;

`;
const Or = styled.div`
    display: flex;
    justify-content: center;
    margin: 18px 0;
`;
const LoginLinks = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 17px;
`;
const Links = styled.li`

`;






const CloseBtn = styled.div`
    position: absolute;
    width: 10px;
    top: 20px;
    left: 20px;
    padding: 5px;
    box-sizing: content-box;
    cursor: pointer;
    `

const CloseImg = styled.img`
    filter:grayscale(100%);
`;





export default Login;