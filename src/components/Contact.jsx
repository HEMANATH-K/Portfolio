import  './Contact.css';
export  default function Contact(){
return(
    
    <div className='contact-page'>
        <div className='contact-container'>
           <h1>Contact Me</h1>
        <div className="contact-info">
          <p><center><strong>Phone:</strong> +91 88256 25298</center></p>
          <p><center><strong>Email:</strong> hemanathkumar773@gmail.com</center></p>
        </div>
        
        <h2><center>Connect with me</center></h2>
           <ul className="online">
  <li>
    <a href="https://github.com/HEMANATH-K" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-github"></i> GitHub
    </a>
  </li>
  <li>
    <a href="https://www.linkedin.com/in/hemanath-k-238505257/" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin"></i> LinkedIn
    </a>
  </li>
</ul>

        </div>
    </div>
   
)
}