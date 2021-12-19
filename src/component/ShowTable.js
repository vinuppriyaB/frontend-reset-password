import { useEffect,useState } from "react"
import {Navbar} from "./Navbar";
import { Footer } from './Footer';

export function ShowTable(){
       const [url,setUrl]=useState([]);

       useEffect(()=>getdata(),[])
    const getdata=()=>{
        fetch("https://login-proces.herokuapp.com/urlshorten",
        {method:"GET",})
        .then((data)=>data.json())
        .then((mvs)=>{setUrl(mvs)
        })
        .catch(e=> console.log(e))

               
      }
     
    return(
         <div>
            <div>
                <Navbar/>
            </div>
         
         <div className="table-content">
         <h3>URL TABLE</h3>
         <table className="table1 ">
            <thead >
                <tr>
                    <th scope="col">s.no</th>
                    <th scope="col">URL</th>
                    <th scope="col">Shorten</th>
                    <th scope="col">Visit</th>
                </tr>
            </thead>
            <tbody>
        
            {url.map((u,index)=> (
                <Table
                key={index}
                long={u.long}
                short={u.short}
                visit={u.visit}
                index={index}

                />
                
            ))}
            
            </tbody>
            </table>
            </div> 
            <div>
            <Footer/>
            </div>
        </div>
    )
}

export function Table({index,long,short,visit}){

    const [longUrl,setLongUrl]=useState("");
    // useEffect(()=>redirect(),[])
    const redirect=(short)=>{
        fetch(`https://login-proces.herokuapp.com/urlshorten/${short}`,
        {method:"GET",})
        .then((data)=>data.json())
        .then((mvs)=>{setLongUrl(mvs)
        
        })
        .catch(e=> console.log(e))

    }

    return(
        <>
        
                <tr>
                <td>  {index+1}   </td>
                <td>  {long}    </td>
                <td> <a href={"https://login-proces.herokuapp.com/urlshorten/"+short} target="_blank" onClick={()=>redirect(short)}>{short}</a> </td>
                <td>    {visit}   </td>
                </tr>
            
        </>
    )
}