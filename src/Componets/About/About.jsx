import React from 'react'
import my from "../../assets/image.png"
import "./About.css"
const About = () => {
    return (
        <>
            <div id="about" className="about">
                <div id="about_tittle">
                    <h1>About me</h1>
                </div>
                <div className="about_sections">
                    <div className="about_left " >
                        <img src={my} alt="" />
                    </div>
                    <div className="about_right">
                        <div className="about_para">
                            <p>i am a passionate and skilled MERN stack developer with a strong foundation in both front-end and back-end technologies. As a final-year Computer Science student, he has honed his expertise in React.js, Node.js, Express, and MongoDB, creating dynamic and user-friendly web applications. And commitment to excellence is reflected in his ability to build responsive designs using HTML, CSS, and Tailwind CSS, while ensuring seamless functionality with robust JavaScript logic.</p>
                             <p>As a final-year Computer Science student, I have developed projects like a <span>CourseBazaar </span> and <span> BookMyShow clone </span> </p>
                        </div>
                        <div className="about_skills">
                            <div className="about_skill"><p>HTML & css </p><hr style={{ width: "50%" }} /></div>
                            <div className="about_skill"><p> JavaScript </p><hr style={{ width: "70%" }} /></div>
                            <div className="about_skill"><p>React.Js</p><hr style={{ width: "60%" }} /></div>
                            <div className="about_skill"><p> Node.js </p><hr style={{ width: "40%" }} /></div>
                            <div className="about_skill"><p>Express.js</p><hr style={{ width: "60%" }} /></div>
                            <div className="about_skill"><p> Mongoose </p><hr style={{ width: "70%" }} /></div>
                           
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
