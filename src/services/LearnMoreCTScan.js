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

function LearnMoreCTScan() {
	return (
		<LearnMoreWrapper>
			<h2>CT Scan Insights</h2>
			<p>
				Our CT scan insights service offers detailed analysis and interpretation of your CT scan results. Our team of experts uses advanced algorithms to provide you with comprehensive reports that help you understand the findings better.
			</p>
			<p>
				Whether you're a patient seeking clarity on your medical reports or a healthcare professional looking to enhance diagnostic accuracy, our service is here to assist you.
			</p>
		</LearnMoreWrapper>
	);
}

export default LearnMoreCTScan;