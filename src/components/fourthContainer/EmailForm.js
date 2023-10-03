import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {

    const [code, setCode] = useState(0);
    const [newCode, setNewCode] = useState(0);
    const [visitorEmail, setVisitorEmail] = useState('');
    const [visitorName, setVisitorName] = useState('');
    const [subject , setSubject] = useState('');
    const [message , setMessage] = useState('');
    const [vStatus, setVStatus] = useState('F');
    const [errorMessage,setErrorMessage] = useState('');
    const [isDisabled, setDisabled] = useState(false);
    const handleVistorName = (e) => {

        setVisitorName(e.target.value);
        generateCode();
    }

    const handleVisitorEmail = (e) => {

        setVisitorEmail(e.target.value);
        generateCode();
    }

    const handleCodeChange = (e) => {

        setNewCode(e.target.value);
    }

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    }

    const handleMessageChange = (e) => {

        setMessage(e.target.value);
    }

    const generateCode = (e) =>{

        setCode(Math.floor(Math.random()*99999));

    }

    const disableButton = () => {

        setDisabled(true);
        setTimeout(() => {
            setDisabled(false);
          }, 60000);
    }
  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    if( visitorEmail=='' || visitorName == '' || subject == '' || message == '')
    {
        setErrorMessage('One or more fields are empty!');

    }
    else{

        emailjs.sendForm('service_kozc8fr', 'template_a0v6brx', e.target, '0EJNnqqf8fE9jNpN8')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
          
      }, (error) => {
          console.log(error.text);
      });
    }
  }

  function sendCode(EVENT) {

    EVENT.preventDefault();    
    emailjs.sendForm('service_j36bcvl', 'template_3e3rr0z', EVENT.target, '0EJNnqqf8fE9jNpN8')
      .then((result) => {

        //setDisabled('True');
        //setTimeout(() => {
        //    setDisabled('False');
        //  }, 10000);
        
      }, (error) => {
          console.log(error.text);
      });
    
  }

  const checkCode = (e) => {
    e.preventDefault();  
    if(newCode==code)
        {
            setVStatus('T');
            setErrorMessage('Email Verified')
        }
        else{

            setVStatus('F');            
            setErrorMessage('Incorrect Code, try again!');
        }
          
  }
  return (
    <div className="contact-form" id='CONTACT'>
        <h1 className='contact-heading'>GET IN TOUCH</h1>
        <form onSubmit={sendCode}>

            <div className='form-row-1'>
                <div>
                    <input type='text' 
                    name='to_name' 
                    onChange={handleVistorName}
                    
                    /><br></br>
                    <label>Name</label>
                </div>
            </div>
            <div>
            <div className='form-row-2'>
                <div className='email-div'>
                    <input 
                    type='text' 
                    name='to_mail' 
                    onChange={handleVisitorEmail}
                    />
                    <label>Email</label> 
                </div>
                 
                <div>
                    <input type='text' hidden value={code} name='verification_code'/>
                    <input 
                        type='submit' 
                        value='Send Code'
                        className='contact-form-btn'
                    />
                </div>
                   
            </div>
            </div>            
       </form>
       <form onSubmit={checkCode}>
        <div className='form-row-3'>
            <div>
                    <input type='text' onChange={handleCodeChange} name='vcode' className='input-ver-code'/><br></br>
                    <label className='ver-code'>Verification Code</label>      
                </div>       
                <div>
                    <input 
                        type='submit' 
                        value='Verify' 
                        className='contact-form-btn'
                    />
                </div>
        </div>
       </form>

      <form  onSubmit={sendEmail} method='post'>            
            <input type="text" name="from_name" hidden value={visitorName}/>           
            <input type="email" name="from_email" hidden value={visitorEmail} /> 
            
            <div className='form-row-4'>
                <input type="text" name="subject" onChange={handleSubjectChange} className='subject-div'/>
                <label>Subject</label>
            </div>   
            <div className='form-row-5'>
                <div className='mail-div'>
                    <textarea className='textarea' onChange={handleMessageChange} name="html_message" />
                    <label>Message</label>
                </div>
                <div className='send-btn'>
                    {vStatus==='T' ? 
                        <input type="submit" value="Send" className='contact-form-btn'/>: 
                        <input type='submit' value='Send' disabled className='contact-form-btn-disabled'/>
                    }
                </div>               
               
            </div>
            
    </form>
    <div className='error-div'>
                    {errorMessage}
    </div>
    </div>
  );
}