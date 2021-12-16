
import React from 'react'
import { Grid,Paper, Avatar, TextField, Button} from '@material-ui/core'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useParams ,useHistory} from 'react-router-dom';
import { useState,useEffect } from "react";
import { VibrationOutlined } from '@material-ui/icons';


export function ResetPassword({setCurrentUser,currentUser}){
  const {token}= useParams();  
  const history =useHistory();
    const paperStyle={padding :50,height:'40vh',width:380, margin:"100px auto"}
    const avatarStyle={backgroundColor:"#51459E"}
    const btnstyle={margin:'20px 0',backgroundColor:"#51459E"}
    const textstyle={margin:'10px 0'}

    
    const [confirmPassword, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [show,setShow]=useState(false);
    const [matchIndicator,setMatchIndicator] = useState(true);
    
    const resetLoginForm = (event) => {
           
            setPassword("");
            setEmail("");
            setConfirmPassword("");
            
        };
    const createAccount = () => {  
        const loginuser={email:currentUser,newpassword:password }; 
       
        console.log(loginuser);
        fetch("https://login-proces.herokuapp.com/reset-password/user",
    {
        method:"POST",
        body: JSON.stringify(loginuser),
        headers:{"Content-Type":"application/json"},
    }).then((res)=>{
        
        if(res.status==200)
          {
            window.alert("Reset successfully ");
            history.push("/application")
            resetLoginForm();
            
          }
          else
          {
            
            window.alert("invalid credential ");
          
          }
        
        
    }).catch((e)=> console.log("ERROR"))  
}
    function checkPassword(event){
            
        
        console.log(password,confirmPassword)
        if(password!=confirmPassword)
        {
            setMatchIndicator(false)
        }
        else
        {
            setMatchIndicator(true)
        }
    }
    useEffect(()=>checkPassword(),[confirmPassword])

    return(
        <div>
            {/* <LoginNavbar/> */}
        
        
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><AccountCircleIcon/></Avatar>
                    <h2>Reset Password</h2>
                </Grid>
                
                
                
                <TextField 
                label='Password' 
                placeholder='Enter password'  
                style={textstyle} 
                type='password' 
                fullWidth required
                value={password}
                onMouseOver={()=>setShow(true)}
                onMouseOut={()=>setShow(false)}
                onChange={event => setPassword(event.target.value)}
                />
                <TextField 
                label='Confirm Password' 
                placeholder='Enter password'  
                style={textstyle} 
                type='password' 
                fullWidth required
                value={confirmPassword}
                
                onChange={event => setConfirmPassword(event.target.value)}
                />
                
                {matchIndicator ? "":<p className="pass-match notmatch">Password should Match</p>}
                
                <Button type='submit' 
                className="btn-color"
                color='primary' 
                variant="contained" 
                style={btnstyle} 
                fullWidth
                onClick={() => {createAccount()
                }}
                >change password</Button>
                
               {show? <p className="pasword-hint">
                    Password must contain: 1 capital,1 small,1 number,1 special character,max 8 char
                </p>:""}
                
                
            </Paper>
            </div>
       
    )
}

