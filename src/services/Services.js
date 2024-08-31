import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ServicesWrapper = styled(motion.div)`
  padding: 80px 20px 60px; /* Adjusted padding: top, horizontal, bottom */
  max-width: 1200px;
  margin: 0 auto;
  color: #EAEAEA;
  background-color: #252A34;

  h1 {
    color: #08D9D6;
    font-family: 'Major Mono Display', monospace;
    margin-bottom: 20px;
  }

  h2 {
    font-family: 'Nova Mono', monospace;
    margin-top: 40px;
    color: #08D9D6;
  }

  p {
    margin-bottom: 20px;
    font-family: 'Nova Mono', monospace;
  }

  ul {
    margin-left: 20px;
    list-style: disc;

    li {
      margin-bottom: 10px;
      font-family: 'Nova Mono', monospace;
    }
  }

  a {
    color: #08D9D6;
    text-decoration: none;
    font-family: 'Nova Mono', monospace;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Service = styled(motion.div)`
  margin-bottom: 40px;
`;

const Services = () => {
  return (
    <ServicesWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Our Services
      </motion.h1>

      <Service
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <h2>X-Ray Analysis</h2>
        <p>
          Our X-Ray Analysis service provides a thorough examination of your X-Ray images. Our experts will identify any abnormalities or areas of concern and present the findings in a clear and concise manner.
        </p>
        <ul>
          <motion.li
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            Detailed Report: You’ll receive a comprehensive report explaining the findings in your X-Ray.
          </motion.li>
          <motion.li
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            Expert Consultation: Schedule a consultation with our radiologists to discuss the results in detail.
          </motion.li>
          <motion.li
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            Follow-Up Support: We offer ongoing support to help you understand your report and next steps.
          </motion.li>
        </ul>
        <p>
          <Link to="/services/xray">Learn More About X-Ray Analysis</Link>
        </p>
      </Service>

      <Service
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <h2>CT Scan Analysis</h2>
        <p>
          CT scans provide a more detailed view of your body’s internal structures. Our CT Scan Analysis service offers a deep dive into these images, ensuring that you understand every aspect of the results.
        </p>
        <ul>
          <motion.li
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.7 }}
          >
            In-Depth Explanation: We’ll provide an in-depth explanation of the findings in your CT scan.
          </motion.li>
          <motion.li
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.9 }}
          >
            Personalized Insights: Our team tailors the analysis to your specific health concerns.
          </motion.li>
          <motion.li
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.1 }}
          >
            Next Steps: We’ll guide you on what to discuss with your doctor based on the report.
          </motion.li>
        </ul>
        <p>
          <Link to="/services/ctscan">Discover More About CT Scan Analysis</Link>
        </p>
      </Service>

      <Service
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.3 }}
      >
        <h2>MRI Analysis</h2>
        <p>
          MRI scans are highly detailed and can be difficult to interpret. Our MRI Analysis service ensures that you receive a clear and accurate understanding of your scan results.
        </p>
        <ul>
          <motion.li
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.5 }}
          >
            Comprehensive Analysis: Receive a detailed report of your MRI scan findings.
          </motion.li>
          <motion.li
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.7 }}
          >
            Expert Review: Our radiologists will review your scan and highlight any significant areas.
          </motion.li>
          <motion.li
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.9 }}
          >
            Consultation Available: Have a one-on-one discussion with our experts to go over your report.
          </motion.li>
        </ul>
        <p>
          <Link to="/services/mri">Explore MRI Analysis Services</Link>
        </p>
      </Service>

      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 3.1 }}
      >
        How It Works
      </motion.h2>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 3.3 }}
      >
        <strong>Step 1: Upload Your Report</strong><br />
        Simply upload your medical imaging reports through our secure platform.
      </motion.p>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 3.5 }}
      >
        <strong>Step 2: Receive Expert Analysis</strong><br />
        Our team of experts reviews your reports and provides detailed explanations.
      </motion.p>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 3.7 }}
      >
        <strong>Step 3: Get Your Results</strong><br />
        Receive your report analysis via email or schedule a call with our experts.
      </motion.p>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 3.9 }}
      >
        <Link to="/upload">Get Started Now</Link>
      </motion.p>
    </ServicesWrapper>
  );
};

export default Services;