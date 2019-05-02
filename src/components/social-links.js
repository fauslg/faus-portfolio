import React from 'react';
import BehanceLogo from "../../static/images/behance.svg"
import GithubLogo from "../../static/images/github.svg"
import LinkedinLogo from "../../static/images/linkedin.svg"
import TwitterLogo from "../../static/images/twitter.svg"
import MediumLogo from "../../static/images/medium.png"
import InstagramLogo from "../../static/images/instagram.svg"
import styled from "styled-components"

const SocialLinksWrapper = styled.div`
  background-color: transparent;
  text-align: center;
  margin-bottom: 50px
`

const SocialLinksDesktop = styled.div`
  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: block;
    height: 40px;
  }
`

const SocialLinksMobile = styled.div`
  @media (max-width: 768px) {
    display: block;
    max-width: 300px;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    display: none;
  }
`

const SocialLinks = props => (
  <SocialLinksWrapper>
  <h2 class="subheading">Connect with me</h2>
  <SocialLinksDesktop>
  <a href="https://www.behance.net/faustinogaitan" target="_blank" rel="noopener norefferer" class="social-link">behance</a>
  <a href="https://github.com/fauslg" target="_blank" rel="noopener norefferer" class="social-link">github</a>
  <a href="https://www.linkedin.com/in/faustinogaitan/" target="_blank" rel="noopener norefferer" class="social-link">linkedin</a>
  <a href="https://twitter.com/fausgaitan" target="_blank" rel="noopener norefferer" class="social-link">twitter</a>
  <a href="https://medium.com/@faustinogaitan" target="_blank" rel="noopener norefferer" class="social-link">medium</a>
  <a href="https://www.instagram.com/fauslg/" target="_blank" rel="noopener norefferer" class="social-link">instagram</a>
  </SocialLinksDesktop>
  <SocialLinksMobile>
  <a href="https://www.behance.net/faustinogaitan" target="_blank" rel="noopener norefferer" class=""><img src={BehanceLogo} alt="Behance Logo" class="social-icon"/></a>
  <a href="https://github.com/fauslg" target="_blank" rel="noopener norefferer" class=""><img src={GithubLogo} alt="Github Logo" class="social-icon"/></a>
  <a href="https://www.linkedin.com/in/faustinogaitan/" target="_blank" rel="noopener norefferer" class=""><img src={LinkedinLogo} alt="Linkedin Logo" class="social-icon"/></a>
  <a href="https://twitter.com/fausgaitan" target="_blank" rel="noopener norefferer" class=""><img src={TwitterLogo} alt="Github Logo" class="social-icon"/></a>
  <a href="https://medium.com/@faustinogaitan" target="_blank" rel="noopener norefferer" class=""><img src={MediumLogo} alt="Github Logo" class="social-icon"/></a>
  <a href="https://www.instagram.com/fauslg/" target="_blank" rel="noopener norefferer" class=""><img src={InstagramLogo} alt="Github Logo" class="social-icon"/></a>
  </SocialLinksMobile>
  </SocialLinksWrapper>
);

export default SocialLinks;