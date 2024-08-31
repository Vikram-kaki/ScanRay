import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroWrapper = styled(motion.section)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #EAEAEA;
  background-color: #252A34;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const HeroContent = styled(motion.div)`
  max-width: 600px;

  h1 {
    font-family: 'Major Mono Display', monospace;
    font-size: 3rem;
    margin-bottom: 20px;
    color: #08D9D6;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-family: 'Nunito', sans-serif;
    font-size: 1.25rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const CallToAction = styled(motion.button)`
  margin-top: 30px;
  padding: 15px 30px;
  background-color: #FF2E63;
  color: #EAEAEA;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  font-family: 'Nunito', sans-serif;
  border-radius: 50px;

  &:hover {
    background-color: #FF4F7E;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;

function HeroSection() {
  return (
    <HeroWrapper>
      <HeroContent>
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.5 }}
        >
          Upload Your Medical Report
        </motion.h1>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.7 }}
        >
          Get instant insights on your X-ray, CT, and MRI scans.
        </motion.p>
        <Link to="/upload">
          <CallToAction
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.9 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Get Started
          </CallToAction>
        </Link>
      </HeroContent>
    </HeroWrapper>
  );
}

export default HeroSection;