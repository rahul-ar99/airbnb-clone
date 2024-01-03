import React ,{useEffect, useState, useRef} from 'react';
import styled from 'styled-components';


const Login = ({loginClose, authenticated}) => {


    const [logReply, setLogReply] = useState("asdfsdf")
    

    //import user data from user
    const userName = useRef()
    const email = useRef()
    const phone = useRef()
    const password = useRef()
    const confirmPassword = useRef()



    // steyp
    const [ username1,setusername1] = useState("")
    const [ passoword1,setpassoword1] = useState("")



    // change login and signup with using of hooks
    const [login, setLogin] = useState(true)



    //on login and signup submit
    function submit() {


        // its just a trail for autheticated working
        authenticated(true)

        


        //if user click on create an account this if statement will work
        if(login===false){


            // assign user data to variables
            const getUserName = userName.current.value
            const getMail = email.current.value
            const getPhone = phone.current.value
            const getPassword = password.current.value
            const getConfirmPassword = confirmPassword.current.value

            // create an list with user details object
            const userDetails = [{name:getUserName,mail:getMail,password: getPassword,number: getPhone}]



            // checking uset entered password and confirm password is same
            if(getPassword===getConfirmPassword){
                if(userName){
                    console.log("asdf")
                }
            }
            // password and confirm password is wrong then show this message
            else{
                setLogReply("password didn't match")

            }



            // add userDetails into localstorage
            localStorage.setItem("user1",JSON.stringify(userDetails))


            // just a trail 
            if(getUserName && getMail && getPassword && getPhone && getConfirmPassword){
                console.log(getUserName, getMail, getPassword, getPhone, getConfirmPassword)
            }


            
            // setLogin(true)
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

    //when open this modal, then window scroll is stop
    useEffect(()=>{


        document.body.style.overflow = "hidden"
        return ()=>(
            document.body.style.overflow = "auto"
        )
    })

    return (
        <Screen 
            onClick={(e) => {
                if (!e.target.closest(Modal)) {
                loginClose(false);
            }}}
        >
            <Modal>
                {/* if login is true show login as head otherwise signup is head */}
                <LoginNav><LoginHead>{login === true?"login": "signup"}</LoginHead></LoginNav>
                <MainDiv>

                <LoginContent>

                    <ContentHead>Welcome to Airbnb</ContentHead>
                    <LoginForm>
                        <UserReply>{logReply}</UserReply>
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
                        <ChangeSentence>{login=== true? "if you're new, then ":"you already a member, then ."}
                            <ChangeLogin onClick={()=>{
                                const loginhead = login ===true?false:true
                                setLogin(loginhead)
                                
                            }}>{login=== true? " signup":"login"}</ChangeLogin>
                            </ChangeSentence>
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
const UserReply = styled.p`
    color: red;
`

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

const ChangeSentence = styled.p`
    display: flex;
`
const ChangeLogin = styled.p`
    color: #FF385C;
    cursor: pointer;
`
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
