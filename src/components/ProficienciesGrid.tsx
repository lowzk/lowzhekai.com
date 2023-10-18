import Grid from "@mui/material/Grid";
import './ProficienciesGrid.css';
import content from "../../public/Content.json";
import ProficienciesBubble from "./ProficienciesBubble";

export default function ProficienciesGrid() {
    return (
        <div>
            <Grid container spacing={2} className="proficiencies-grid">
                <Grid item xs={12} md={6}>
                    <ProficienciesBubble prof_list={content.languages}>Programming Languages</ProficienciesBubble>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ProficienciesBubble prof_list={content.frontend}>Frontend Development</ProficienciesBubble>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ProficienciesBubble prof_list={content.backend}>Backend Development</ProficienciesBubble>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ProficienciesBubble prof_list={content.data_analytics}>Data Analytics and Machine Learning</ProficienciesBubble>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ProficienciesBubble prof_list={content.devops}>Development & Operations</ProficienciesBubble>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ProficienciesBubble prof_list={content.others}>Other skills and hobbies</ProficienciesBubble>
                </Grid>
            </Grid>
        </div>
    );
}
