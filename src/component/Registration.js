
import React, { useEffect } from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'

import { useHistory } from "react-router";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


import { useState } from "react";


export function Registration({setCurrentUser,currentUser}){
    

    const paperStyle={padding :60,height:'70vh',width:'50vh', margin:"100px auto"}
    const avatarStyle={backgroundColor:"#51459E",margin:"10px auto"}
    const btnstyle={margin:'20px 0',backgroundColor:"#51459E"}
    const textstyle={margin:'13px 0'}

   
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [show,setShow]=useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [matchIndicator,setMatchIndicator] = useState(true);
    
    const history = useHistory();
    const resetLoginForm = (event) => {
        setFirstName("");
        setLastName("")
            setPassword("");
            setEmail("");
            setConfirmPassword("");
            
        };
    const createAccount = () => {  
        const loginuser={firstName:firstName,lastName:lastName,email:email,password:password }; 
       
        
        fetch("https://login-proces.herokuapp.com/user/signup",
    {
        method:"POST",
        body: JSON.stringify(loginuser),
        headers:{"Content-Type":"application/json"},
    }).then((res)=>{
        setCurrentUser(email)
        if(res.status==200)
          {
            history.push("/")
            window.alert("Activate acount by click URL sent to your mail");
            resetLoginForm();
          }
          else
          {
            window.alert("invalid credential");
           
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
          
        
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><AccountCircleIcon/></Avatar>
                    <h2>SIGN UP</h2>
                </Grid>
                <TextField label='firstName' 
                placeholder='Enter firstName'  
                style={textstyle}
                fullWidth required
                value={firstName}
                
                onChange={event => setFirstName(event.target.value)}
                />
                <TextField label='lastName' 
                placeholder='Enter lastName'  
                style={textstyle}
                fullWidth required
                value={lastName}
                
                onChange={event => setLastName(event.target.value)}
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
                    Password must contain: 1 capital,1 small,1 number,1 special character,max 8 character
                </p>:""}
                
                <Typography > Do you have an account ?
                <Button variant="text" 
                
                style={{color:"#51459E"}}
                onClick={()=>history.push("/")} 
                > Login
                </Button>
                </Typography>
            </Paper>
            </div>
       
    )
}

