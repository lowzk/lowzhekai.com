import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Grid } from '@mui/material';
import "./Footer.css";

export default function Footer() {
    return (
        <div>
            <footer className="footer-container">
                <Grid container>
                    <Grid item xs={0} md={3}/>
                    <Grid item xs={12} md={3}>
                        <p className="footer-text">Low Zhe Kai © 2023 All Rights Reserved</p>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <a href="https://www.linkedin.com/in/lowzhekai/" target="_blank" rel="noreferrer">
                            <LinkedInIcon className="footer-icon"/>
                        </a>
                        <a href="https://github.com/lowzk" target="_blank" rel="noreferrer">
                            <GitHubIcon className="footer-icon"/>
                        </a>
                        <a href="mailto:lowzhekai69@gmail.com" target="_blank" rel="noreferrer">
                            <AttachEmailIcon className="footer-icon"/>
                        </a>
                    </Grid>
                    <Grid item xs={0} md={3}/>
                </Grid>
            </footer>
        </div>)
}