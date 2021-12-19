import React from 'react'
import {Paper,  Button } from '@material-ui/core'
import TextField from '@mui/material/TextField';
import {Navbar} from "./Navbar";
import { Footer } from './Footer';
import { useState } from "react";


export const CreateUrl=()=>{
    

    const paperStyle={padding :50,height:'40vh',width:"50vw", margin:"100px auto"}
    
    const btnstyle={margin:'20px 0',backgroundColor:"#51459E"}
    const textstyle={margin:'20px 0'}

   
    const [long, setLong] = useState("");
    
    
   
    const resetLoginForm = (event) => {
        setLong("");
        
          
            
        };
    const createprocess = () => {  
        const createdurl={long:long}; 
        
        
        fetch("https://login-proces.herokuapp.com/urlshorten/create",
    {
        method:"POST",
        body: JSON.stringify(createdurl),
        headers:{"Content-Type":"application/json"},
    }).then((res)=>{
        
        if(res.status==200)
          {
            
            resetLoginForm();
          }
          else
          {
            window.alert("Invalid user account");
           

          }
         
        
       
    }).catch((e)=> console.log("ERROR"))  
}

    return(
            
        <div>
            <div>
                <Navbar/>
            </div>
            
            <div >
            <Paper elevation={10} style={paperStyle} className="paper-style">
            <h3 className="h3-tag">Create Shorten URL</h3>
               
                <TextField label='URL' 
                id="outlined-basic"
                placeholder='Enter URL'  
                style={textstyle}
                fullWidth required
                value={long}
                onChange={event => setLong(event.target.value)}
                />
                
                
                <Button type='submit' 
                className="btn-color"
                color='primary' 
                variant="contained" 
                style={btnstyle} 
                fullWidth
                onClick={() => {
                    createprocess()
                }}
                >Generate</Button>
                
            </Paper>
            </div>
            <div>
            <Footer/>
            </div>

            </div>    
       
    )
}

