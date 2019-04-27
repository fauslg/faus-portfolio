import React from "react"
import TopImage from "../../static/images/faus-profile.png"
import HelloImage from "../../static/images/hello.svg"
import ThirdloveLogo from "../../static/images/thirdlove-logo.png"
import ApexLogo from "../../static/images/apex-logo.svg"
import UniversalLogo from "../../static/images/universal-logo.png"
import Button from "../components/button"
import { Helmet } from "react-helmet"

export default () => (
    <div class="container">
    <Helmet>
        <title>Faustino Gaitan | UX / UI Product Designer</title>
    </Helmet>
     <img src={TopImage} alt="Profile Picture" class="top-image"/>
     <div class="header-section">
       <img src={HelloImage} alt="Hello Emoji" class="hello-image"/>
       <h1 class="main-heading">Hello, I'm <mark>Faus</mark>!</h1>
     </div>
     <div class="about">
    I’m a passionate <span class="semi-bold">Full-stack UX/UI Product Designer</span> from Argentina.<br />
    I’m a firm believer that great design should be simple, and driven by evidence & user needs.<br />
    I’m also a design system advocate. I love photography, minimalism, pugs & coffee!<br />
    </div>
    <div class="social-links">
      <h2 class="subheading">Connect with me</h2>
      <a href="https://www.behance.net/faustinogaitan" target="_blank" rel="noopener norefferer" class="social-link">behance</a>
      <a href="https://github.com/fauslg" target="_blank" rel="noopener norefferer" class="social-link">github</a>
      <a href="https://www.linkedin.com/in/faustinogaitan/" target="_blank" rel="noopener norefferer" class="social-link">linkedin</a>
      <a href="https://twitter.com/fausgaitan" target="_blank" rel="noopener norefferer" class="social-link">twitter</a>
      <a href="https://medium.com/@faustinogaitan" target="_blank" rel="noopener norefferer" class="social-link">medium</a>
      <a href="https://www.instagram.com/fauslg/" target="_blank" rel="noopener norefferer" class="social-link">instagram</a>
    </div>
    <div class="experience-case-studies">
      <h2 class="subheading">Experience & Case Studies</h2>
      <div class="card-container">
      <div class="card pink-gradient card-thirdlove">
      <div class="logo-wrapper"><img src={ThirdloveLogo} alt="Thirdlove Logo" class="card-logo"/></div>
        <Button buttonText="UX Case Study" />
      </div>
      <div class="card grey-gradient card-apex">
      <div class="logo-wrapper"><img src={ApexLogo} alt="Apex Logo" class="card-logo apex-logo"/></div>
      <Button buttonText="Design System" />
      </div>
      <div class="card green-gradient card-umg">
      <div class="logo-wrapper"><img src={UniversalLogo} alt="Universal Logo" class="card-logo umg-logo"/></div>
      <Button buttonText="Read More" />
      </div>
      </div>
    </div>

    <div class="footer">
    Faustino Gaitan &#169; 2019 | Developed with Gatsbyjs
    </div>
    </div>
  )
