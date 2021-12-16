
import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useHistory } from "react-router";
// import {LockOutlinedIcon} from "@material-ui/icons/LockOutlined"


import { useState } from "react";


export const Login=({setCurrentUser,currentUser})=>{
    

    const paperStyle={padding :50,height:'50vh',width:380, margin:"100px auto"}
    const avatarStyle={backgroundColor:"#51459E"}
    const btnstyle={margin:'20px 0',backgroundColor:"#51459E"}
    const textstyle={margin:'20px 0'}

   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    
    const history = useHistory();
    const resetLoginForm = (event) => {
            setEmail("");
            setPassword("");
          
            
        };
    const loginprocess = () => {  
        const loginuser={email:email,password:password }; 
        
        
        fetch("https://login-proces.herokuapp.com/user/login",
    {
        method:"POST",
        body: JSON.stringify(loginuser),
        headers:{"Content-Type":"application/json"},
    }).then((res)=>{
         setCurrentUser(email)
        if(res.status==401)
          {
            window.alert("Invalid user account");
          }
          else
          {
            
            history.push("/application")

          }
         
        
        resetLoginForm();
    }).catch((e)=> console.log("ERROR"))  
}

    return(
        <div>
            {/* <LoginNavbar/> */}
            <div>
        
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Log In</h2>
                </Grid>
                <TextField label='Email' 
                placeholder='Enter Email'  
                style={textstyle}
                fullWidth required
                value={email}
                onChange={event => setEmail(event.target.value)}
                />
                <TextField 
                label='Password' 
                placeholder='Enter password'  
                style={textstyle} 
                type='password' 
                fullWidth required
                value={password}
                onChange={event => setPassword(event.target.value)}
                />
                
                <Button type='submit' 
                className="btn-color"
                color='primary' 
                variant="contained" 
                style={btnstyle} 
                fullWidth
                onClick={() => {loginprocess()
                }}
                >Sign in</Button>
                <Button variant="text" 
                
                style={{color:"#51459E"}}
                onClick={()=>history.push("/forgetpassword")} 
                > Forgot password ?
                </Button>
                
                
                <Typography > Don't you have an account ?
                <Button variant="text" 
                
                style={{color:"#51459E"}}
                onClick={()=>history.push("/signup")} 
                > sign up
                </Button>
                </Typography>
            </Paper>
            </div>

            </div>    
       
    )
}

