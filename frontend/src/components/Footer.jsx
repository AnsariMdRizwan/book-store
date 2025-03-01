import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    const handleWhatsAppClick = () => {
        const phoneNumber = '8092651420'; // Replace with your WhatsApp number
        const message = 'Chat with Rizwan'; // Optional message to include
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <>
            <div>
                <hr />
                <footer className="footer footer-center text-base-content rounded p-10 dark:bg-slate-900 dark:text-white">
                    <nav className="grid grid-flow-col gap-4">
                        <a className="link link-hover" href='/About'>About us</a>
                        <a className="link link-hover" href='/Contact'>Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <div className="grid grid-flow-col gap-4">
                            
                            <SocialIcon className='hover:scale-105 duration-200' url="https://www.instagram.com/md.rizw_an3192/" target="_blank" />
                            <SocialIcon className='hover:scale-105 duration-200' url="https://www.facebook.com/a.rizwan.5815" target="_blank" />
                            <div onClick={handleWhatsAppClick} style={{ cursor: 'pointer' }}>
                                <SocialIcon url="https://whatsapp.com" target="_blank" rel="noopener noreferrer" />
                            </div>
                        </div>
                    </nav>
                    <aside>
                        <a>Copyright © {new Date().getFullYear()} - All right reserved by Ansari MD Rizwan</a>
                    </aside>
                </footer>
            </div>
        </>
    );
}

export default Footer;
