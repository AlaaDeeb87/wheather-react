import React from 'react'
import emailjs from 'emailjs-com'


export const Contact = () => {
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm("service_g15315c", "template_iy63tiq", e.target,"user_ini28Ejpo8f21n2tIsbkX"
    ).then(res=>{
      console.log(res);

    }).catch(err=> console.log(err));
  }
  return (
    <div className="container border"
    style={{marginTop:"0px", width:"100%", height: "700px",
    backgroundImage:`url('https://images.pexels.com/photos/37728/pexels-photo-37728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')`,
    backgroundPosition:"Center",
    backgroundSize:"cover",
    }}>
      <h1 style={{marginTop:'90px'}}>Contact Form</h1>
      <form className="row" style={{margin:"25px 85px 75px 100px"}} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" className="form-control"/>

        <label>Email</label>
        <input type="email" name="user_email" className="form-control"/>

        <label>Message</label>
        <textarea name="message" rows="4" className="form-control"/>
        <input type="submit" value="Send" className='form-control btn btn-primary'
        style={{marginTop:"30px"}}/>

      </form> `
    </div>
  )
}
