import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

export default function Scan(props) {
    return (
        <Grid container justify="center">
            <Typography variant="h4" gutterBottom>
                Is the part functioning normally?
            </Typography>
            <Button variant="contained">Yes</Button>
            <Button variant="contained">No</Button>
            <Button variant="contained">Cancel</Button>
        </Grid>
    )
}