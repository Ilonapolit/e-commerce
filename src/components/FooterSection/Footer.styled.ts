import React from 'react';
import styled from 'styled-components';
import { InstagramOutlined, TwitterOutlined, FacebookOutlined } from '@ant-design/icons';


export const FooterContainer = styled.div`
  background-color: #f8f8f8;
  padding: 20px 0;
  text-align: center;
`;

export const SocialIconsContainer = styled.div`
  margin-top: 20px;
`;

export const SocialIcon = styled.a`
  margin: 0 10px;
  font-size: 24px;
  color: #1890ff; 
`;

export const FooterText = styled.p`
  color: #666;
  font-size: 14px;
  margin: 10px 0;
`;