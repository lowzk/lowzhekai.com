"use client"
import './contact.css';
import Typography from "@mui/material/Typography";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactForm from '@/components/ContactForm';

export default function page() {
    return (
        <div className='main-container fill-screen flex flex-col justify-center items-center' style={{ paddingTop: 0 }}>
            <Typography className='header'>Let's get in touch!</Typography>
            <Typography className='subheader'>Drop me an email or take a look at my socials.</Typography>
            <Typography className='subheader'>Always happy to connect, thanks for visiting!</Typography>
            <div>
                <a href="https://www.linkedin.com/in/lowzhekai/" target="_blank" rel="noreferrer">
                    <LinkedInIcon className="contact-icon" />
                </a>
                <a href="https://github.com/lowzk" target="_blank" rel="noreferrer">
                    <GitHubIcon className="contact-icon" />
                </a>
                <a href="mailto:lowzhekai.work@gmail.com" target="_blank" rel="noreferrer">
                    <AttachEmailIcon className="contact-icon" />
                </a>
            </div>
            <ContactForm />
        </div>)
}