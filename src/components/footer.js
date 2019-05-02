import React from 'react';
import styled from "styled-components"

const FooterWrapper = styled.div`
  border-top: 1px solid #D7D7D7;
  margin: 0 auto;
  font-size: 12px;
  padding-top: 20px;
  padding-bottom: 10px;
  max-width: 100%;

  @media (min-width: 1024px) {
    max-width: 890px;
  }
`

const Footer = props => (
  <FooterWrapper>
  Faustino Gaitan &#169; 2019 | Developed with Gatsbyjs
  </FooterWrapper>
);

export default Footer;