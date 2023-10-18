"use client"

import './profile.css'
import Image from 'next/image'
import border from "../../public/Border.png";
import portafilter from '../../public/Portafilter.png'
import { Typography } from '@mui/material';
import AlternatingElements from '@/components/AlternatingElements';
import Link from "@mui/material/Link";
import EditNoteIcon from '@mui/icons-material/EditNote';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import Button from "@mui/material/Button";
import { useMediaQuery } from '@mui/material';
import content from "../../public/Content.json";
import NotePad from '@/components/Notepad';
import { Note } from '@mui/icons-material';
import ProficienciesGrid from '@/components/ProficienciesGrid';

export default function Profile() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const isMobile = useMediaQuery('(max-width: 899px)');
  return (
    <div>
      <div className='main-container'>
        <div className="relative profile-container">
          <div id="top-left-border">
            <Image
              src={border}
              alt=""
              fill
              className='no-display-mobile'
            />
          </div>
          <div id="bottom-right-border">
            <Image
              src={border}
              alt=""
              fill
              className='rotate-180 no-display-mobile'
            />
          </div>
          <div id="top-right-border">
            <Image
              src={portafilter}
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div>
            <Typography className="profile-subheader">Hey there! I am</Typography>
            <Typography className="profile-name">ZHE KAI!</Typography>
            <AlternatingElements />
          </div>
          <div className='flex'>
            <Link href="/contact" underline="none">
              <Button variant="contained" className="profile-button" startIcon={!isMobile ? <EditNoteIcon /> : null}>
                Get in touch
              </Button>
            </Link>
            <Link href="#section0" underline="none" onClick={handleScroll}>
              <Button className='profile-button' id="find-out-more" startIcon={!isMobile ? <ConnectWithoutContactIcon /> : null}>
                Find out more
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="gradient-to-grey main-container" id="section0">
        <NotePad>{content.notepad}</NotePad>
      </div>
      <div className="grey-background text-center main-container">
        <Typography className='header'>
          My <span className='underline text-highlight'>proficiencies</span> at a glance
        </Typography>
        <Typography className='subheader'>
          {content.proficiencies}
        </Typography>
      </div>
      <div className="grey-background main-container last-container">
        <ProficienciesGrid/>
      </div>
    </div>
  )
}
