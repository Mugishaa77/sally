import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
            
export default function Contact () {
    return (
        <div className="contact" id="contact" >
             <div className="contact-body">
                <h2>Contact Information</h2>
                <p>Feel free to contact to me on:</p>

           <h3 className="phone">
                <FontAwesomeIcon icon={faPhone} /> 
                <a
                href="tel:+254707720597"
                target="_blank"
                title="Call"
                rel="noopener noreferrer"
            > +254 707 720 597
              </a></h3>
           

            <h3 className="email">
            
                <FontAwesomeIcon icon={faEnvelope} /></h3>
                 <a
                href="mailto:sallywanga2016@gmail.com"
                title= "Email"
                target="_blank"
                rel="noopener noreferrer"
                className="email-link"
              > Sallywanga2016@gmail.com</a>

              <hr/>

              
              <div className="socials">
            
              <span className="medium" title="medium">
              <a href="https://swugisha.medium.com/" alt="" title="" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-medium" viewBox="0 0 16 16">
  <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"/>
</svg></a>
              </span>
             

 <span className="linkedin" title="linkedin">
              <a href="https://www.linkedin.com/in/swugisha/" title="" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
</svg>
             </a>
</span>



              </div>
            <p className="regards">I look foward to connecting with you.
            <br/>
            <span>Regards.</span>
                
            </p>
            <hr/>
            </div>
            
            </div>

    )
}