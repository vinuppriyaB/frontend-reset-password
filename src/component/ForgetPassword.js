
import React from 'react'
import { Grid,Paper, Avatar, TextField, Button } from '@material-ui/core'

import { useHistory } from "react-router";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



import { useState } from "react";


export function ForgetPassword({setCurrentUser,currentUser}){
    

    const paperStyle={padding :50,height:'40vh',width:380, margin:"100px auto"}
    const avatarStyle={backgroundColor:"#51459E"}
    const btnstyle={margin:'20px 0',backgroundColor:"#51459E"}
    const textstyle={margin:'10px 0'}

    
    const [email, setEmail] = useState("");
    
    const [checkMail,setCheckMail]=useState(false);
    
    const history = useHistory();
    const resetLoginForm = (event) => {
           
            setEmail("");
            
        };
    const sendMail = () => {  
        const userEmail={email:email}; 
        console.log(userEmail)
        console.log(currentUser)
        fetch("https://login-proces.herokuapp.com/forget-password",
    {
        method:"POST",
        body: JSON.stringify(userEmail),
        headers:{"Content-Type":"application/json"},
    }).then((res)=>{
        
        if(res.status==200)
          {
            setCheckMail(true);
            setTimeout(()=>{
              history.push("/")
            },2000)
            resetLoginForm();
          }
          else
          {
            window.alert("invalid credential ");
            
          }
        
       
    }).catch((e)=> console.log("ERROR"))  
}

    return(
        <div>
            {/* <LoginNavbar/> */}
        
        
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><AccountCircleIcon/></Avatar>
                    <h2>Forget Password</h2>
                </Grid>
                
                <TextField label='Email' 
                placeholder='Enter Email'  
                style={textstyle}
                fullWidth required
                value={email}
                onChange={event => {
                    setEmail(event.target.value)
                    console.log(email)
                    setCurrentUser(event.target.value);
                    console.log(currentUser)
                }}
                />
                
                
                <Button type='submit' 
                className="btn-color"
                color='primary' 
                variant="contained" 
                style={btnstyle} 
                fullWidth
                onClick={() => {
                    
      
                    sendMail()
                }}
                >send link</Button>
                
               {checkMail? <p className="pasword-hint">
                   check mail for reset link
                </p>:""}
                
                
            </Paper>
            </div>
       
    )
}

