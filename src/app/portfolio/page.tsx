import { Typography } from "@mui/material";
import HorizontalDisplay, { Details } from "@/components/HorizontalDisplay";
import { jobs, projects } from "../../../public/Portfolio";

export default function Page() {

    return (
        <main>
            <div className="main-container">
                <div className="flex justify-center">
                    <Typography className="header">Professional <span className="text-highlight underline">experience</span></Typography>
                </div>
                <div className="flex justify-center">
                    <HorizontalDisplay details={jobs} flipped={false} />
                </div>
            </div>
            <div className="main-container gradient-to-grey"></div>
            <div className="main-container last-container grey-background" style={{paddingTop:0}}>
                <div className="flex justify-center">
                    <Typography className="header"><span className="text-highlight underline">Projects</span> & Competitions</Typography>
                </div>
                <div className="flex justify-center">
                    <HorizontalDisplay details={projects} flipped={true} />
                </div>
            </div>
        </main>)
}