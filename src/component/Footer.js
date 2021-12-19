import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';

export function Footer(){
    return(
        <div className="footer">
       <span>contact us :</span>
       
        <FacebookIcon className="icon-color"/>
        <LinkedInIcon className="icon-color"/>
        <InstagramIcon className="icon-color"/>
        <GoogleIcon className="icon-color"/>
        
        </div>
    )
}