import React from 'react'
import profilePic from "../images/profilepic.jpeg";

const AboutMe = (props) => {
    return (
        <section id="About_Me" className="bg-secondary pt-3 mt-5">
        <div className="container">
          <h2 className="text-white mb-3 mt-2">About Me</h2>
          <div className="row justify-content-center">
            <div className="col-auto">
              <img src={profilePic} alt="Profile portraitd" className="pic" />
            </div>
            <div className="text-white col-sm-8">
              <p>Welcome! </p>
              <br />
              <p>
                My name is Ayami and I am a full time, registered operating room
                nurse. My role as a circulating nurse specializes mostly in the
                service line that includes orthopedic and spine surgeries.
              </p>
              <p>
                I am currently attending a Coding Bootcamp Program through the
                University of Washington that covers lessons and languages for
                full stack web development. This webpage will host personal work
                and projects that display my current skillset.
              </p>
              <p>
                My passion resides in nursing and I want to discover other
                avenues that the career field has to offer. I am learning skills
                that have potential to be useful in Clinical Informatics and
                Patient-Centered Technologies. While this is just one example of
                an area in nursing that can use skills taught from this course,
                this coding Bootcamp opens doors to many other possibilities
                that I look forward to exploring.
              </p>
              <br />
              <p>Thank you for visiting!</p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default AboutMe
