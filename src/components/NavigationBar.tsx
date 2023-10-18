"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "@mui/material/Link";
import AppsIcon from '@mui/icons-material/Apps';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import PortraitIcon from '@mui/icons-material/Portrait';
import FeedIcon from '@mui/icons-material/Feed';
import NavigationBarIcon from '../../public/NavigationBar.png'
import NavigationBarIconSmall from '../../public/ZheKai.png'
import { useMediaQuery } from "@mui/material";
import MenuDrawer from "./MenuDrawer";
import links from '../../public/Links.json'
import "./NavigationBar.css"
import { Feed } from "@mui/icons-material";

export default function NavigationBar() {
    const isMobile = useMediaQuery('(max-width: 899px)');
    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container alignItems="center">
                    {isMobile ? (
                        <Grid item xs={1.5}>
                            <MenuDrawer />
                        </Grid>) : null}
                    <Grid item xs={3.5} md={1.5} />
                    <Grid item xs={2} md={1.5} className="flex items-center justify-center">
                        <Link href="/">
                            {isMobile ? (
                                <Image
                                    src={NavigationBarIconSmall}
                                    alt="Navigation Bar Icon"
                                    style={{ width: "100%", maxWidth: "80px", height: "auto" }}
                                    className="hover-glow"
                                />) : (<Image
                                    src={NavigationBarIcon}
                                    alt="Navigation Bar Icon"
                                    style={{ width: "100%", maxWidth: "180px", minWidth: "130px", height: "auto" }}
                                    className="hover-glow"
                                />)}
                        </Link>
                    </Grid>
                    <Grid item xs={0} md={0.75} />
                    {!isMobile ? (
                        <Grid item xs={1.5}>
                            <Link href="/" underline="none">
                                <Button variant="contained" disableElevation endIcon={<PortraitIcon />}>
                                    Profile
                                </Button>
                            </Link>
                        </Grid>) : null}
                    {!isMobile ? (
                        <Grid item xs={1.5}>
                            <Link href="/portfolio" underline="none">
                                <Button variant="contained" disableElevation endIcon={<AppsIcon />}>
                                    Portfolio
                                </Button>
                            </Link>
                        </Grid>) : null}
                    {!isMobile ? (
                        <Grid item xs={1.5}>
                            <Link href="/contact" underline="none">
                                <Button variant="contained" disableElevation endIcon={<ConnectWithoutContactIcon />}>
                                    Contact
                                </Button>
                            </Link>
                        </Grid>) : null}
                    <Grid item xs={3.5} md={0.75} />
                    <Grid item xs={1.5}>
                        <Link href={links.resume} target="_blank" underline="none">
                            {isMobile ? (
                                <button className="icon-button">
                                    <FeedIcon />
                                </button>
                            ) : (
                                <Button variant="outlined" className="resume" disableElevation>
                                    Resume
                                </Button>
                            )}
                        </Link>
                    </Grid>
                    <Grid item xs={0} md={1.5} />
                </Grid>
            </Toolbar>
        </AppBar>
    )
}