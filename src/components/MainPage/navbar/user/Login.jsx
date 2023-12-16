import React ,{useEffect, useState, useRef} from 'react';
import styled from 'styled-components';


const Login = ({loginClose}) => {
    

    //import user data from user
    const userName = useRef()
    const email = useRef()
    const password = useRef()
    const phone = useRef()
    const confirmPassword = useRef()


    // change log in and signup with using of hooks
    const [login, setLogin] = useState(true)



    //on login and signup submit
    function submit() {


        //if user click on create an account this if statement will work
        if(login==false){


            // assign user data to variables
            const getUserName = userName.current.value
            const getMail = email.current.value
            const getPassword = password.current.value
            const getPhone = phone.current.value
            const getConfirmPassword = confirmPassword.current.value

            const userDetails = [{"name":getUserName, "mail":getMail,"password": getPassword,"number": getPhone}]

            localStorage.setItem("user",userDetails)


            if(getUserName, getMail, getPassword, getPhone, getConfirmPassword)
                console.log(getUserName, getMail, getPassword, getPhone, getConfirmPassword)


            
            setLogin(true)
        }


        //else user want to login, this else statement will work
        else if(phone.current.value && password.current.value ){

            const user = localStorage.getItem("user")
            let jsonData;
            if (user) {
            try {
                jsonData = JSON.parse(user);
                console.log()
            } catch (error) {
                console.error('Error parsing JSON data:', error);
            }
            }
        }


    }
    useEffect(()=>{
        document.body.style.overflow = "hidden"
        return ()=>(
            document.body.style.overflow = "auto"
        )
    })
    // console.log(loginClose)

    return (
        <Screen 
            onClick={(e) => {
                if (!e.target.closest(Modal)) {
                loginClose(false);
            }}}
        >
            <Modal>
                {/* if login is true show login as head otherwise signup is head */}
                <LoginNav><LoginHead>{login=== true?"login": "signup"}</LoginHead></LoginNav>
                <MainDiv>

                <LoginContent>

                    <ContentHead>Welcome to Airbnb</ContentHead>
                    <LoginForm>
                        <InputDiv>
                            {/* if signup page is true */}
                            <CountryInput ref={phone} type='text' placeholder='Phone no'></CountryInput>
                            {login===false && 
                            <>
                                <NumberInput ref={userName} type='text' placeholder='Username'></NumberInput>
                                <NumberInput ref={email} type='email' placeholder='Email'></NumberInput>
                                <NumberInput ref={password} type='password' placeholder='password'></NumberInput>
                                <NumberInput ref={confirmPassword} type='password' placeholder='password'></NumberInput>
                            </>
                            }
                            {login &&  <NumberInput ref={password} placeholder='password'></NumberInput>}
                           
                        </InputDiv>
                        <Text>We'll call or text you to confirm your number Standard message and data rates apply<Privacy> Privacy Policy</Privacy></Text>
                        <ContinueBtn onClick={submit}>Countinue</ContinueBtn>
                        <ContinueBtn onClick={()=>{
                            const loginhead = login ===true?false:true
                            setLogin(loginhead)

                            }}>{login=== true? "signup":"login"}</ContinueBtn>
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
                    <CloseImg src={require("../../../../assets/icons/close.png")}></CloseImg>
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
    &:last-child{
        outline: 1px solid black;
    }

`

const LoginForm = styled.form`

`;


const CountryInput = styled.input`
    border-bottom: 1px solid black;
    width: 100%;
    padding: 14px;
    `;
const NumberInput = styled.input`
    width: 100%;
    padding: 14px;
    &:not(:last-child){
        border-bottom: 1px solid black;

    }

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
    cursor: pointer;

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