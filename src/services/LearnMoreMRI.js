import React from 'react';
import styled from 'styled-components';

const LearnMoreWrapper = styled.div`
  padding: 50px 100px;
  background-color: #252A34;
  color: #EAEAEA;

  @media (max-width: 768px) {
    padding: 50px 20px;
  }

  h2 {
    font-family: 'Major Mono Display', monospace;
    font-size: 2rem;
    margin-bottom: 20px;
    color: #08D9D6;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

function LearnMoreMRI() {
  return (
    <LearnMoreWrapper>
      <h2>MRI Interpretation</h2>
      <p>
        Our MRI interpretation service provides comprehensive analysis and explanation of your MRI reports. Our experts use state-of-the-art technology to ensure that you receive accurate and detailed insights into your medical condition.
      </p>
      <p>
        Whether you're a patient looking for a better understanding of your MRI results or a healthcare professional seeking to enhance diagnostic accuracy, our service is designed to meet your needs.
      </p>
    </LearnMoreWrapper>
  );
}

export default LearnMoreMRI;