// Footer.js
import React from 'react';
import { InstagramOutlined, TwitterOutlined, FacebookOutlined } from '@ant-design/icons';
import { FooterContainer, SocialIconsContainer, SocialIcon, FooterText } from './Footer.styled'

const Footer = () => {
  return (
    <FooterContainer>
      <SocialIconsContainer>
        <SocialIcon href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <InstagramOutlined />
        </SocialIcon>
      
        <SocialIcon href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <TwitterOutlined />
        </SocialIcon>
     
        <SocialIcon href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FacebookOutlined />
        </SocialIcon>
      </SocialIconsContainer>
      <FooterText>&copy; 2023 E-commerce Site. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
