import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default function Scan(props) {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Is the part functioning normally and does it appear as it does on the picture?
            </Typography>
            <Button variant="contained">Yes</Button>
            <Button variant="contained">No</Button>
            <Button variant="contained">Cancel</Button>
        </div>
    )
}