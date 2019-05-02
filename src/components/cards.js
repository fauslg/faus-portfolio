import React from 'react';
import ThirdloveLogo from "../../static/images/thirdlove-logo.png"
import ApexLogo from "../../static/images/apex-logo.svg"
import UniversalLogo from "../../static/images/universal-logo.png"
import Button from "../components/button"
import styled from "styled-components"

const CardsWrapper = styled.div`
  margin-bottom: 73px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Cards = props => (
    <CardsWrapper>
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
    </CardsWrapper>
);

export default Cards;