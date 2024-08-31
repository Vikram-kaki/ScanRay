import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const UploadWrapper = styled(motion.div)`
  padding: 100px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #252A34; /* Primary Background */
  color: #EAEAEA; /* Main Text Color */
  min-height: 100vh;
`;

const UploadForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  background-color: #393E46; /* Secondary Background */
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const FileInput = styled(motion.input)`
  margin: 20px 0;
  padding: 10px;
  border: 2px dashed #08D9D6; /* Primary Teal */
  border-radius: 10px;
  width: 300px;
  text-align: center;
  cursor: pointer;
  background-color: #4A4F57; /* Secondary Grey */
  color: #EAEAEA; /* Main Text Color */

  &:focus {
    outline: none;
    border-color: #FF2E63; /* Button Red */
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 15px 30px;
  background-color: #FF2E63; /* Button Red */
  color: #EAEAEA; /* Main Text Color */
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  font-family: 'Nunito', sans-serif;
  border-radius: 50px; /* Make the button more rounded */

  &:hover {
    background-color: #FF4F7E; /* Button Hover Red */
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Heading = styled(motion.h1)`
  font-family: 'Major Mono Display', monospace;
  font-size: 2.5rem;
  color: #08D9D6; /* Primary Teal */
  margin-bottom: 20px;
`;

function UploadReport() {
  return (
    <UploadWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Heading
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Upload Your Medical Report
      </Heading>
      <UploadForm
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <FileInput
          type="file"
          accept=".jpg,.jpeg,.png,.pdf"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
        <SubmitButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Upload
        </SubmitButton>
      </UploadForm>
    </UploadWrapper>
  );
}

export default UploadReport;