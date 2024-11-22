import React from 'react'
import "./Contex.css"
import { HiOutlineMail } from "react-icons/hi";
import { MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
const Contex = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "d067be75-ab8d-4ae9-833a-24ab59357bb9");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };
    

  return (
    <>
      <div id="Contect" className="contect">
        <div className="contect_tittle">
            <h1>Get in touch</h1>
        </div>
        <div className="contect_sections">
            <div className="contect_left">
                <h1>Let's talk</h1>
                <p>I am currently avaliable to talk on new project Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                <div className="contect_details">
                    <div className="contect_detail">
                     <HiOutlineMail/> <p>abhayrahangadale6gmail.com</p>
                    </div>
                    <div className="contect_detail">
                    <MdCall /> <p>+91-6265672882</p>
                    </div>
                    <div className="contect_detail">
                     <FaLocationDot/> <p>JABALPUR MP IN</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contect_right">
                 <label htmlFor="">Your Name</label>
                 <input type="text" placeholder='Enter the name' name='name' />
                 <label htmlFor="">Your Email</label>
                 <input type="text" placeholder='Enter the Email' name='email' />
                  <label htmlFor="">Write your message here</label>
                  <textarea name="message" rows="8" placeholder='Enter your Massage'></textarea>
                  <button type='submit' className='Contect_submit'>Submit Now</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default Contex
