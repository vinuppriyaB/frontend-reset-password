
import React, { useEffect } from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'

import { useHistory } from "react-router";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


import { useState } from "react";


export function Registration({setCurrentUser,currentUser}){
    

    const paperStyle={padding :50,height:'55vh',width:380, margin:"100px auto"}
    const avatarStyle={backgroundColor:"#51459E"}
    const btnstyle={margin:'20px 0',backgroundColor:"#51459E"}
    const textstyle={margin:'10px 0'}

   
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [show,setShow]=useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [matchIndicator,setMatchIndicator] = useState(true);
    
    const history = useHistory();
    const resetLoginForm = (event) => {
            setName("");
            setPassword("");
            setEmail("");
            setConfirmPassword("");
            
        };
    const createAccount = () => {  
        const loginuser={username:name,email:email,password:password }; 
       
        
        fetch("http://localhost:8500/user/signup",
    {
        method:"POST",
        body: JSON.stringify(loginuser),
        headers:{"Content-Type":"application/json"},
    }).then((res)=>{
        setCurrentUser(name)
        if(res.status==400)
          {
            window.alert("Account Exist");
          }
          else
          {
            
            window.alert("Register successfully");
           
          }
        
        resetLoginForm();
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
          
        
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><AccountCircleIcon/></Avatar>
                    <h2>SIGN UP</h2>
                </Grid>
                <TextField label='Username' 
                placeholder='Enter username'  
                style={textstyle}
                fullWidth required
                value={name}
                
                onChange={event => setName(event.target.value)}
                />
                <TextField label='Email' 
                placeholder='Enter Email'  
                style={textstyle}
                fullWidth required
                value={email}
                onChange={event => setEmail(event.target.value)}
                />
                
                <TextField 
                label='Password' 
                name="pass"
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
                name="confirmpass"
                placeholder='Confirm password'  
                style={textstyle} 
                type='password' 
                fullWidth required
                value={confirmPassword}
                
                onChange={(event) => {
                    setConfirmPassword(event.target.value);
                    // checkPassword(event);
                    
                }}
                />

                {matchIndicator ? "":<p className="pass-match notmatch">Password should Match</p>}
                
                
                <Button type='submit' 
                className="btn-color"
                color='primary' 
                variant="contained" 
                style={btnstyle} 
                fullWidth
                disabled={ matchIndicator? false : true}
                onClick={() => {createAccount()
                    
                }}  
                
                
                >Register</Button>
                
               {show? <p className="pasword-hint">
                    Password must contain: 1 capital,1 small,1 number,1 special character,max 8 char
                </p>:""}
                
                <Typography > Do you have an account ?
                <Button variant="text" 
                
                style={{color:"#51459E"}}
                onClick={()=>history.push("/")} 
                > Login in
                </Button>
                </Typography>
            </Paper>
            </div>
       
    )
}

