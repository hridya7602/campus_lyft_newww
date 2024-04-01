import React,{useState} from 'react'
import PhoneInput from 'react-phone-input-2'
import "./Phone.css"
import {Button} from '@mui/material'
import TextField from '@mui/material/TextField';
import { auth } from '../firebase/setup';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

const PhoneSignin = () => {

    const [phone,setPhone] = useState("")
    const [user,setUser] = useState(null)
    const [otp,setOtp]= useState("")
    const sendOtp = async () => {
        try {
            const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
            const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
            setUser(confirmation); // Set the user after sending OTP
            console.log(confirmation);
        } catch (error) {
            console.error(error);
        }
    }
    
    const verifyOtp = async () => {
        try {
           const data = await user.confirm(otp);
           console.log(data);
        } catch (error) {
            console.error(error);
        }
    }
    
  return (
    <div className='phone-signin'>
        <div className='phone-content'>
        <PhoneInput
        country={"in"} 
        value={phone}
        onChange={(phone)=>setPhone("+"+phone)}
        />

        <Button onClick={sendOtp} sx={{marginTop:"10px"}} variant='contained'>Send otp</Button>
        <div style={{marginTop:"10px"}}id="recaptcha"></div>
        <br />
        <TextField onChange={(e) => setOtp(e.target.value)} sx={{ marginTop:"10px",width:"300px"}}variant='outlined' size='small' label="enter otp"/>
        <br />
       
        <Button onClick={verifyOtp} sx={{marginTop:"10px"}} variant="contained" color="success">Verify otp</Button>
    </div>
        </div>
        
  )
}

export default PhoneSignin