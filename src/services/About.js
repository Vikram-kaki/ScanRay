import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutUsWrapper = styled(motion.div)`
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

const Section = styled(motion.div)`
  margin-bottom: 40px;
`;

const AboutUs = () => {
  return (
    <AboutUsWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h1>About ScanRay</h1>
        <p>
          Welcome to ScanRay, your trusted partner in medical imaging analysis. Our mission is to transform complex medical reports into clear, actionable insights, empowering you to make informed decisions about your health.
        </p>
      </Section>
      <Section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <h2>Our Story</h2>
        <p>
          Founded in 2024, ScanRay was born out of a desire to bridge the gap between medical professionals and patients. We understand that medical imaging reports can be overwhelming, which is why we’ve assembled a team of experts dedicated to providing you with comprehensive, easy-to-understand analyses. Our goal is to ensure that you feel confident and informed when discussing your health with your doctor.
        </p>
      </Section>
      <Section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <h2>Our Mission</h2>
        <p>
          At ScanRay, our mission is simple: to make medical imaging reports accessible and understandable for everyone. We believe that knowledge is power, and by providing you with clear insights into your health, we’re helping you take control of your well-being.
        </p>
      </Section>
      <Section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        <h2>Our Team</h2>
        <p>
          Our team of radiologists, technologists, and medical experts are passionate about what they do. With years of experience in the field, they are committed to providing accurate and reliable analyses that you can trust. We’re here to support you every step of the way.
        </p>
      </Section>
      <Section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
      >
        <h2>Why Choose Us</h2>
        <ul>
          <motion.li
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <strong>Expertise:</strong> Our team consists of highly qualified professionals with extensive experience in medical imaging.
          </motion.li>
          <motion.li
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.7 }}
          >
            <strong>Clarity:</strong> We break down complex reports into simple, understandable terms.
          </motion.li>
          <motion.li
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.9 }}
          >
            <strong>Convenience:</strong> Easily upload your reports and receive results without leaving your home.
          </motion.li>
          <motion.li
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.1 }}
          >
            <strong>Support:</strong> We’re always here to answer your questions and provide further assistance.
          </motion.li>
        </ul>
      </Section>
      <Section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.3 }}
      >
        <p>
          Ready to learn more? <a href="/services">Explore our services</a> or <a href="/contact">get in touch with us today!</a>
        </p>
      </Section>
    </AboutUsWrapper>
  );
};

export default AboutUs;