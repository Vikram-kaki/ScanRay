import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderWrapper = styled(motion.header)`
  position: fixed;
  width: 100%;
  background-color: #252A34; /* Primary Background */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Logo = styled(motion.h1)`
  font-family: 'Major Mono Display', monospace;
  font-size: 1.5rem;
  font-weight: bold;
  color: #08D9D6; /* Primary Teal */

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Nav = styled(motion.nav)`
  display: flex;
  align-items: center;

  & a {
    margin-right: 20px;
    text-decoration: none;
    color: #EAEAEA; /* Main Text Color */
    font-size: 1rem;
    transition: color 0.3s ease;
    font-family: 'Nova Mono', monospace;

    &:hover {
      color: #08D9D6; /* Primary Teal */
    }

    &.active {
      color: #08D9D6; /* Primary Teal */
      border-bottom: 2px solid #08D9D6; /* Primary Teal */
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const SidebarToggle = styled(motion.button)`
  background: none;
  border: none;
  color: #EAEAEA; /* Main Text Color */
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;
  display: none;

  &:hover {
    color: #08D9D6; /* Primary Teal */
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const Sidebar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: ${({ $isVisible }) => ($isVisible ? '0' : '-250px')};
  width: 250px;
  height: 100%;
  background-color: #252A34; /* Primary Background */
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
  transition: left 0.3s ease;
  z-index: 999;
  padding: 20px;

  & a {
    display: block;
    margin-bottom: 20px;
    text-decoration: none;
    color: #EAEAEA; /* Main Text Color */
    font-size: 1rem;
    transition: color 0.3s ease;
    font-family: 'Nova Mono', monospace;

    &:hover {
      color: #08D9D6; /* Primary Teal */
    }

    &.active {
      color: #08D9D6; /* Primary Teal */
      border-bottom: 2px solid #08D9D6; /* Primary Teal */
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

function Header() {
	const location = useLocation();
	const [isSidebarVisible, setIsSidebarVisible] = useState(false);
	const sidebarRef = useRef(null);
	const toggleRef = useRef(null);

	const toggleSidebar = () => {
		setIsSidebarVisible(!isSidebarVisible);
	};

	const handleClickOutside = (event) => {
		if (
			sidebarRef.current &&
			!sidebarRef.current.contains(event.target) &&
			toggleRef.current &&
			!toggleRef.current.contains(event.target)
		) {
			setIsSidebarVisible(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<HeaderWrapper
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<SidebarToggle
				ref={toggleRef}
				onClick={toggleSidebar}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
			>
				{isSidebarVisible ? '☰' : '☰'}
			</SidebarToggle>
			<Logo
				initial={{ opacity: 0, x: -20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
				whileHover={{ scale: 1.1 }}
			>
				ScanRay
			</Logo>
			<Nav
				initial={{ opacity: 0, x: 20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5, delay: 0.4 }}
			>
				<Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
				<Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
				<Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
				<Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
				<Link to="/upload" className={location.pathname === '/upload' ? 'active' : ''}>Upload Report</Link>
			</Nav>
			<Sidebar
				ref={sidebarRef}
				$isVisible={isSidebarVisible}
				initial={{ x: -250 }}
				animate={{ x: isSidebarVisible ? 0 : -250 }}
				transition={{ duration: 0.3 }}
			>
				<Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={toggleSidebar}>Home</Link>
				<Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={toggleSidebar}>About</Link>
				<Link to="/services" className={location.pathname === '/services' ? 'active' : ''} onClick={toggleSidebar}>Services</Link>
				<Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={toggleSidebar}>Contact</Link>
				<Link to="/upload" className={location.pathname === '/upload' ? 'active' : ''} onClick={toggleSidebar}>Upload Report</Link>
			</Sidebar>
		</HeaderWrapper>
	);
}

export default Header;