import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <footer className="netflix-footer">
      <div className="footer-container">
        <div className="footer-links">
          <div>
            <Link to="/faq">FAQ</Link>
            <Link to="/investors">Investor Relations</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/speed-test">Speed Test</Link>
          </div>
          <div>
            <Link to="/help-center">Help Center</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/cookies">Cookie Preferences</Link>
            <Link to="/legal">Legal Notices</Link>
          </div>
          <div>
            <Link to="/account">Account</Link>
            <Link to="/ways-to-watch">Ways to Watch</Link>
            <Link to="/corporate">Corporate Information</Link>
            <Link to="/originals">Only on Netflix</Link>
          </div>
          <div className="footer-icons">
            <Link to="/contact">Contact Us</Link>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><YouTubeIcon /></a>
          </div>
        </div>
        <p className="footer-copy">© 2025 Netflix Clone. Made with ❤️ by You</p>
      </div>
    </footer>
  );
};

export default Footer;
