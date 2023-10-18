"use client"

import { Details } from "./HorizontalDisplay";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ProficienciesBubble from "./ProficienciesBubble";
import Image from "next/image";
import "./JobDisplay.css"
import Link from "next/link";
import { useMediaQuery } from "@mui/material";

interface JobDisplayProps {
    detail: Details;
}

export default function FlippedJobDisplay({ detail }: JobDisplayProps) {
    const photograph = detail.photograph;
    const header = detail.header;
    const subheader = detail.subheader;
    const logo = detail.logo;
    const date = detail.date;
    const write_up = detail.write_up;
    const sentences = write_up.split('. ').map((sentence, index, array) => {
        if (index === array.length - 1 && sentence !== '') {
            if (sentence.endsWith('.')) {
                return sentence.slice(0, -1);
            } else {
                return sentence;
            }
        } else {
            return sentence.trim();
        }
    });
    const relevant_skills = detail.relevant_skills;
    const color = detail.color;
    const website_link = detail.website_link;
    const isMobile = useMediaQuery('(max-width: 899px)');
    return (
        <div>
            <Grid container spacing={2}>
                {/* Relevant skills */}
                {!isMobile ? (
                    <Grid item xs={6}>
                        <ProficienciesBubble prof_list={relevant_skills} style={{ backgroundColor: color }}>Relevant skills</ProficienciesBubble>
                    </Grid>
                ) : null}
                {/* Job title, company and date */}
                <Grid item xs={12} md={6}>
                    <Grid container spacing={0}>
                        <Grid item xs={9} style={{ textAlign: "left" }}>
                            <Link href={website_link} target="_blank">
                                <Typography className="jd-header">{header}</Typography>
                                <Typography className="jd-subheader">{subheader}</Typography>
                                <Typography className="jd-subheader">{date}</Typography>
                            </Link>
                        </Grid>
                        <Grid item xs={3}>
                            <Link href={website_link} target="_blank">
                                <div className="logo-container relative">
                                    <Image
                                        src={logo}
                                        alt=""
                                        className="image-logo"
                                        fill
                                        priority
                                    />
                                </div>
                            </Link>
                        </Grid>

                    </Grid>
                </Grid>

                {/* Relevant skills */}
                {isMobile ? (
                    <Grid item xs={12}>
                        <ProficienciesBubble prof_list={relevant_skills} style={{ backgroundColor: color }}>Relevant skills</ProficienciesBubble>
                    </Grid>
                ) : null}

                {/* Write up */}
                <Grid item xs={12} md={6} style={{ textAlign: "left" }}>
                    <div className="writeup" style={{ backgroundColor: color }}>
                        <p className="writeup-header">How did I contribute?</p>
                        <ul>
                            {sentences.map((sentence, index) => (
                                <li key={index} style={{ marginBottom: '12px' }}>{sentence}</li>
                            ))}
                        </ul>
                    </div>
                </Grid>

                {/* Photograph */}
                {!isMobile ? (
                    <Grid item xs={12} md={6}>
                        <Link href={website_link} target="_blank">
                            <Image
                                src={photograph}
                                alt=""
                                className="image"
                                priority
                            />
                        </Link>
                    </Grid>) : null}
            </Grid>
        </div>
    )
}