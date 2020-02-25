import React, {useEffect} from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

export default function ScanResult(props) {

    const [part, setPart] = React.useState([{}]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://api.carlmaier.se/parts/" + props.match.params.equipmentId + "/" + props.match.params.partId);
            const data = await res.json();
            setPart(data);
        }

        fetchData();
        console.log("Fetched scan data");
    }, [props.match.params.equipmentId, props.match.params.partId]);


    return (
        <Grid container justify="center">
            <img src={"/img/" + part.image} alt="Part Preview" height="200px" width="100%"/>
            <Typography variant="h4" gutterBottom>
                Is the part functioning normally?
            </Typography>
            <Button variant="contained">Yes</Button>
            <Button variant="contained">No</Button>
            <Button variant="contained">Cancel</Button>
        </Grid>
    )
}