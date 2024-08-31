import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactUsWrapper = styled(motion.div)`
  padding: 80px 20px 60px;
  max-width: 1200px;
  margin: 0 auto;
  color: #EAEAEA;
  background-color: #252A34;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #08D9D6;
    font-family: 'Major Mono Display', monospace;
    margin-bottom: 20px;
    font-size: 2.5rem;
  }

  p {
    margin-bottom: 40px;
    font-family: 'Nova Mono', monospace;
    font-size: 1.2rem;
    text-align: center;
    max-width: 600px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;

    label {
      margin-bottom: 5px;
      font-family: 'Nova Mono', monospace;
      font-size: 1.1rem;
      color: #08D9D6;
    }

    input, textarea {
      margin-bottom: 20px;
      padding: 15px;
      font-family: 'Nova Mono', monospace;
      background-color: #393E46;
      color: #EAEAEA;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      transition: background-color 0.3s ease;

      &:focus {
        background-color: #4A4F57;
        outline: none;
      }
    }

    textarea {
      resize: none;
      height: 150px;
      width: 100%; /* Increased width for the message box */
    }

    button {
      padding: 15px 30px;
      background-color: #FF2E63;
      color: #EAEAEA;
      border: none;
      cursor: pointer;
      font-family: 'Nova Mono', monospace;
      border-radius: 50px;
      font-size: 1.1rem;
      transition: background-color 0.3s ease, transform 0.3s ease;

      &:hover {
        background-color: #FF4F7E;
        transform: scale(1.05);
      }

      &:active {
        transform: scale(0.95);
      }
    }
  }
`;

const FormField = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const ContactUs = () => {
	return (
		<ContactUsWrapper
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			<motion.h1
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.5 }}
			>
				Contact Us
			</motion.h1>
			<motion.p
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.7 }}
			>
				Have questions or need assistance? Fill out the form below, and our team will get back to you as soon as possible.
			</motion.p>
			<form>
				<FormField
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.9 }}
				>
					<label>Name</label>
					<input type="text" name="name" required />
				</FormField>
				<FormField
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 1.1 }}
				>
					<label>Email</label>
					<input type="email" name="email" required />
				</FormField>
				<FormField
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 1.3 }}
				>
					<label>Message</label>
					<textarea name="message" rows="5" required />
				</FormField>
				<motion.button
					type="submit"
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 1.5 }}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
				>
					Send Message
				</motion.button>
			</form>
		</ContactUsWrapper>
	);
};

export default ContactUs;
