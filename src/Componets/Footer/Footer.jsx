import React from 'react'
import "./Footer.css"
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer_left">
                    <div className="logo">
                    <h1><span>@</span>bhay</h1>
                  
                    </div>
                    <br />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa magnam voluptatem nulla deleniti, pariatur vero</p>
                </div>
                <div className="footer_right">
                    <div className="footer_inp">
                     {/* <FaLocationDot/> */}
                        <input type="email" placeholder='Enter the Email' />
                    </div>
                    <button className="btn">Connet with </button>
                </div>
            </div> 
            {/* <hr /> */}
            <hr style={{ width: "80%", margin:"auto" }}/>
            <br />
            <div className="foooter_bootem">
                <p>@ 2024 Abhay.All rigth reserved</p>
                <div className="footer_service">
                    <p>Tearm of service</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
                

            </div>
                <h1><br /></h1>
              
        </>
    )

}

export default Footer
