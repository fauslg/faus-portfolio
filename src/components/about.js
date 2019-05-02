import React from 'react';
import styled from "styled-components"

const AboutWrapper = styled.div`
  background-color: transparent;
  text-align: center;
  margin: auto 20px 40px;
  line-height: 28px;

  @media (min-width: 1024px) {
    max-width: 800px;
    margin: 0 auto 50px;
    line-height: 28px;
  }
`

const About = props => (
    <AboutWrapper>
    I’m a passionate <span class="semi-bold">Full-stack UX/UI Product Designer</span> from Córdoba, Argentina.
    I’m a firm believer that great design should be simple, and driven by evidence & user needs.
    I’m also a design system advocate. I love photography, minimalism, pugs & coffee!
    </AboutWrapper>
);

export default About;