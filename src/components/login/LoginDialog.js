// import styled from '@emotion/styled';
import {Dialog, Box, TextField, Button, Typography, styled} from '@mui/material';
import { useState, useContext } from 'react';
import { authenticatesSignup } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Component = styled(Box)`
    height: 70vh;
    width: 90vh;
`

const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height: 80%;
    width: 28%;
    padding: 45px 35px;
    & > p, & > h5{
        color: #FFFFFF;
        font-weight: 600;
    }
`

const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 35px;
    flex:1;
    & > div, & >button, &>p{
        margin-top: 20px;
    }

`

const LoginButton = styled(Button)`
        text-transform: none;
        background: #FB6418;
        color: #fff;
        height: 48px;
        border-radius: 2px;

`
const LoginOTP = styled(Button)`
        text-transform: none;
        background: #fff;
        color: #2874f0;
        height: 48px;
        border-radius: 2px;
        box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);


`

const Text = styled(Typography)`
    font-size: 12px;
    color: #878787;


`
const CreateAccount = styled(Typography)`
    font-size: 14px;
    text-align:center;
    color: #2874f0;
    font-weight: 600;
    cursor:pointer;
`

const accountInitialValues = {
    login:{
        view: 'login',
        heading:"Login",
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup:{
        view: 'signup',
        heading:`Look Like you're new here`,
        subHeading: "Sign up with your mobile number to get started"
    }
}
const signupInitialValues = {
    firstname: '',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:''
}
 
const LoginDialog = ({open, setOpen}) =>{

    const [account, toggleAccount] = useState(accountInitialValues.login);
    const [signup, setSignup] = useState(signupInitialValues);
    const { setAccount} = useContext(DataContext);

    const handleClose = () =>{
        setOpen(false);
        toggleAccount(accountInitialValues.login);
    }

    const toggleSignup = () =>{
        toggleAccount(accountInitialValues.signup);
    }

    const onInputChange = (e) =>{
        setSignup({ ...signup, [e.target.name]: e.target.value});
    }
    const signupUser = async () =>{
        let response = await authenticatesSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.firstname);
    }

    return (

        
        <Dialog open = {open} onClose = {handleClose} PaperProps={{ sx:{maxWidth:'unset'}}}>
            <Component>
                <Box style = {{display: 'flex', height:'100%'}} >
                
                <Image>
                    <Typography variant='h5'>{account.heading}</Typography>
                    <Typography style={{ marginTop: 20}}>{account.subHeading}</Typography>
                </Image>
                {
                    account.view === 'login' ?
                    <Wrapper>
                        <TextField variant='standard' label = 'Enter Email/Mobile number'/>
                        <TextField variant='standard' label = 'Enter Password'/>
                        <Text>By Continuing , You agree to flipkart's term use and Privacy Policy</Text>
                        <LoginButton>Login</LoginButton>
                        <Typography style={{textAlign:'center'}}>OR</Typography>
                        <LoginOTP>Request OTP</LoginOTP>
                        <CreateAccount onClick={() => toggleSignup()}>Now to flipkart? create an account</CreateAccount>
                    </Wrapper>
                    :
                    <Wrapper>
                        <TextField variant='standard' onChange={(e) => onInputChange(e)} name='firstname' label = 'Enter firstname'/>
                        <TextField variant='standard' onChange={(e) => onInputChange(e)} name='lastname' label = 'Enter lastname'/>
                        <TextField variant='standard' onChange={(e) => onInputChange(e)} name='username'label = 'Enter username'/>
                        <TextField variant='standard' onChange={(e) => onInputChange(e)} name='email' label = 'Enter email'/>
                        <TextField variant='standard' onChange={(e) => onInputChange(e)} name='password' label = 'Enter password'/>
                        <TextField variant='standard' onChange={(e) => onInputChange(e)} name='phone' label = 'Enter phone'/>
                        <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
                        
    
                    </Wrapper>
                }
                
                </Box>
            </Component>

        </Dialog>
    )
}

export default LoginDialog;