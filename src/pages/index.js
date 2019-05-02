import React from "react"
import TopImage from "../../static/images/faus-profile.png"
import HelloImage from "../../static/images/hello.svg"
import About from "../components/about"
import Cards from "../components/cards"
import Footer from "../components/footer"
import SocialLinks from "../components/social-links"
import { Helmet } from "react-helmet"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 50px;
`

export default () => (
    <Container>
    <Helmet>
        <title>Faustino Gaitan | UX / UI Product Designer</title>
    </Helmet>
     <img src={TopImage} alt="Profile Picture" class="top-image"/>
     <div class="header-section">
       <img src={HelloImage} alt="Hello Emoji" class="hello-image"/>
       <h1 class="main-heading">Hello, I'm <mark>Faus</mark>!</h1>
     </div>
    <About />
    <SocialLinks />
    <Cards />
    <Footer />
    </Container>
  )
