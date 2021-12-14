import {  Button} from '@material-ui/core'

import { useHistory } from "react-router";
export function Application(){
    const history = useHistory();
    return(
        <div className="application">
        WELCOME TO APPLICATION
        <Button type='submit' 
        className="btn-color"
        color='primary' 
        variant="contained" 
        
        onClick={()=> history.push("/") } 
        > back</Button>
        
        </div>
    )
}