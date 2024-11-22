import React from 'react'
import my from "../../assets/my_pic.jpg"
import "./About.css"
const About = () => {
    return (
        <>
            <div id="about" className="about">
                <div id="about_tittle">
                    <h1>About me</h1>
                </div>
                <div className="about_sections">
                    <div className="about_left">
                        <img src={my} alt="" />
                    </div>
                    <div className="about_right">
                        <div className="about_para">

                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, fugiat  Lorem ipsum dolor sit amet consectetur adipisicing elit.  officiis incidunt tempora magni ratione. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, eveniet.</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, vero! Lorem,  Magni, dolores expedita modi officiis facilis ducimus?</p>
                        </div>
                        <div className="about_skills">
                            <div className="about_skill"><p>HTML & css </p><hr style={{ width: "50%" }} /></div>
                            <div className="about_skill"><p>React Js</p><hr style={{ width: "60%" }} /></div>
                            <div className="about_skill"><p> JavaScript </p><hr style={{ width: "70%" }} /></div>
                            <div className="about_skill"><p> Node Js </p><hr style={{ width: "40%" }} /></div>
                        </div>
                    </div>
                </div>
                <div className="about_achivments">
                    <div className="about_achiv">
                        <h1>1+</h1>
                        <p>YEAR EXPRIENCE</p>
                    </div>
                    <hr />
                    <div className="about_achiv">
                        <h1>6+</h1>
                        <p>PROJECT COMPLETED</p>
                    </div>
                    <hr />
                    <div className="about_achiv">
                        <h1>5+</h1>
                        <p>HAPPY CLIENTS</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
