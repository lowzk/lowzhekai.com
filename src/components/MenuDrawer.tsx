"use client";
import { useState } from "react";
import { Button, List, ListItem, ListItemText, ListItemIcon, Drawer } from "@mui/material";
import AppsIcon from '@mui/icons-material/Apps';
import MenuIcon from '@mui/icons-material/Menu';
import PortraitIcon from '@mui/icons-material/Portrait';
import FeedIcon from '@mui/icons-material/Feed';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import links from '../../public/Links.json'
import "./MenuDrawer.css";
type DrawerState = 'open' | 'closed';

export default function MenuDrawer() {

    const [drawerState, setDrawerState] = useState<DrawerState>('closed');

    const toggleDrawer = (state: DrawerState) => {
        setDrawerState(state);
        console.log(drawerState);
    };

    return (
        <div>
            <button onClick={() => toggleDrawer('open')} className="icon-button">
                <MenuIcon />
            </button>
            <Drawer anchor="left" open={drawerState === 'open'} onClose={() => toggleDrawer('closed')}>
                <List>
                    <ListItem component="a" href="/">
                        <ListItemIcon>
                            <PortraitIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItem>
                    <ListItem component="a" href="/portfolio">
                        <ListItemIcon>
                            <AppsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Portfolio" />
                    </ListItem>
                    <ListItem component="a" href="/contact">
                        <ListItemIcon>
                            <ConnectWithoutContactIcon />
                        </ListItemIcon>
                        <ListItemText primary="Contact" />
                    </ListItem>
                    <ListItem component="a" href={links.resume} target="_blank">
                        <ListItemIcon>
                            <FeedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Resume" />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    )
}