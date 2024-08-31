import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FeaturesWrapper = styled(motion.section)`
  padding: 50px 100px;
  background-color: #252A34; /* Primary Background */

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const FeatureItem = styled(motion.div)`
  background-color: #393E46; /* Secondary Background */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  h3 {
    font-family: 'Major Mono Display', monospace;
    margin-bottom: 15px;
    font-size: 1.5rem;
    color: #08D9D6; /* Primary Teal */

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  p {
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    color: #EAEAEA; /* Main Text Color */

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  &:hover {
    transform: translateY(-10px);
  }
`;

function FeaturesSection() {
  return (
    <FeaturesWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <motion.h2
        style={{ fontFamily: 'Major Mono Display', fontSize: '2rem', marginBottom: '20px', color: '#08D9D6' }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        Our Services
      </motion.h2>
      <FeatureGrid>
        <FeatureItem
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3>X-ray Analysis</h3>
          <p>Upload and get instant analysis on your X-ray reports.</p>
        </FeatureItem>
        <FeatureItem
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3>CT Scan Insights</h3>
          <p>Detailed insights from your CT scan results.</p>
        </FeatureItem>
        <FeatureItem
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3>MRI Interpretation</h3>
          <p>Comprehensive MRI report analysis and explanations.</p>
        </FeatureItem>
      </FeatureGrid>
    </FeaturesWrapper>
  );
}

export default FeaturesSection;