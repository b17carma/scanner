import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Card from "@material-ui/core/Card";
import React, {useEffect, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    paper: {
        marginBottom: theme.spacing(1)
    }
}));

export default function ScanResultSteps(props) {
    const classes = useStyles();

    const [steps, setSteps] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchStepData() {
            const res = await fetch(process.env.REACT_APP_API_LOCATION + "/components/" + props.part.equipment._id + "/" + props.part._id + "/steps");

            res.json().then((res) => {
                setSteps(res);
                setLoading(false)
            }).catch(console.log)
        }

        fetchStepData();

        console.log("Fetched step data");
    }, [props.part.equipment, props.part._id]);

    if (loading || steps.length === 0) {
        return (
            <div/>
        );
    }

    return (
        <Card className={classes.paper} variant="outlined">
            {steps.map((step, i) => (
                <ExpansionPanel key={i}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                        <Typography>{step.identifier}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            {step.description}
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            ))}
        </Card>
    )
}