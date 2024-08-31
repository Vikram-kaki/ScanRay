import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ankleImage from '../assets/images/X-Ray/ankle-2253057_1920.jpg';
import fractureImage from '../assets/images/X-Ray/fracture-bone-2333164_1920.jpg';
import xrayImage from '../assets/images/X-Ray/xray-1129436_1920.jpg';

const LearnMoreWrapper = styled.div`
  padding: 80px 100px 50px; /* Added top padding */
  background-color: #252A34; /* Primary Background */
  color: #EAEAEA; /* Main Text Color */

  @media (max-width: 768px) {
    padding: 80px 20px 50px; /* Adjusted padding for smaller screens */
  }

  h2 {
    font-family: 'Major Mono Display', monospace;
    font-size: 2rem;
    margin-bottom: 20px;
    color: #08D9D6; /* Primary Teal */

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-family: 'Nova Mono', monospace;
    font-size: 1rem;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

const ImageWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled(motion.img)`
  max-width: 30%;
  border-radius: 8px;
  border: 2px solid #08D9D6; /* Primary Teal */

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 20px;
  }
`;

function LearnMoreXRay() {
	return (
		<LearnMoreWrapper>
			<h2>X-ray Analysis</h2>
			<p>
				Our advanced X-ray analysis service provides you with instant insights into your X-ray reports. Using cutting-edge technology, we analyze the images and provide detailed reports to help you understand your medical condition better.
			</p>
			<ImageWrapper>
				<Image
					src={ankleImage}
					alt="Ankle X-ray"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.5 }}
				/>
				<Image
					src={fractureImage}
					alt="Fracture Bone X-ray"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.7 }}
				/>
				<Image
					src={xrayImage}
					alt="General X-ray"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.9 }}
				/>
			</ImageWrapper>
			<p>
				Whether you're a patient or a healthcare professional, our service is designed to make the interpretation of X-ray images more efficient and accurate.
			</p>
		</LearnMoreWrapper>
	);
}

export default LearnMoreXRay;