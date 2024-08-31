import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterWrapper = styled(motion.footer)`
  padding: 20px 50px;
  background-color: #252A34;
  color: #EAEAEA;
  text-align: center;
  font-family: 'Nunito', sans-serif;

  @media (max-width: 768px) {
    padding: 20px;
    font-size: 0.9rem;
  }
`;

function Footer() {
  return (
    <FooterWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      <p>&copy; 2024 ScanRay. All rights reserved.</p>
    </FooterWrapper>
  );
}

export default Footer;