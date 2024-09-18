import React from 'react';
import { ILinkItem } from '../types/common';

type Props = {};

const FOOTER_LINKS: ILinkItem[] = [
  { id: 1, link: '/about', title: 'About us' },
  { id: 2, link: '/contact', title: 'Contact' },
  { id: 3, link: '/privacy', title: 'Privacy Policy' },
  { id: 4, link: '/terms', title: 'Terms of Service' },
];

const SOCIAL_LINKS: ILinkItem[] = [
  { id: 1, link: 'https://www.facebook.com', title: 'Facebook' },
  { id: 2, link: 'https://www.twitter.com', title: 'Twitter' },
  { id: 3, link: 'https://www.instagram.com', title: 'Instagram' },
];

const Footer = (props: Props) => {
  return (
    <footer className="footer p-4">
      <div className="footer-content">
        <div className="logo lg:w-1/4 flex lg:justify-start justify-center">
          <a href="#">LOGO</a>
        </div>
        <div className="footer-links lg:w-2/4 flex justify-center">
          <ul>
            {FOOTER_LINKS.map((link) => (
              <li key={link.id}>
                <a href={link.link}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-social  lg:w-1/4 flex justify-end">
          {SOCIAL_LINKS.map((link) => (
            <a key={link.id} href={link.link} target="_blank" rel="noopener noreferrer">
              {link.title}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-bottom text-center">
        <p>&copy; 2024 Truong Nguyen. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
