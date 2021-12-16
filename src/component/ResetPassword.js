
import React from 'react'
import { Grid,Paper, Avatar, TextField, Button} from '@material-ui/core'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useParams } from 'react-router-dom';
import { useState } from "react";


export function ResetPassword({setCurrentUser,currentUser}){
  const {token}= useParams();  
  
    const paperStyle={padding :50,height:'40vh',width:380, margin:"100px auto"}
    const avatarStyle={backgroundColor:"#51459E"}
    const btnstyle={margin:'20px 0',backgroundColor:"#51459E"}
    const textstyle={margin:'10px 0'}

    
    const [confirmPassword, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState(currentUser);
    const [show,setShow]=useState(false);
    
    
    const resetLoginForm = (event) => {
           
            setPassword("");
            setEmail("");
            setConfirmPassword("");
            
        };
    const createAccount = () => {  
        const loginuser={email:email,newpassword:password ,token:token}; 
       
        
        fetch("http://localhost:8500/reset-password/user",
    {
        method:"POST",
        body: JSON.stringify(loginuser),
        headers:{"Content-Type":"application/json"},
    }).then((res)=>{
        
        if(res.status==400)
          {
            window.alert("invalid credential ");
          }
          else
          {
            window.alert("Reset successfully ");
            
          
          }
        
        resetLoginForm();
    }).catch((e)=> console.log("ERROR"))  
}

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

