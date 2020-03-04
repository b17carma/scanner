import React, {useState} from "react";
import QrReader from "react-qr-reader";
import {useHistory} from "react-router-dom";
import {Paper} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Alert from "@material-ui/lab/Alert";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1)
    },
    paper: {
        padding: theme.spacing(1),
        marginBottom: theme.spacing(1)
    }
}));

export default function QrScanner() {
    const history = useHistory();
    const [error, setError] = useState(false);

    function handleScan(data) {
        if (data) {
            if (!data.includes(";")) {
                setError(true);
                return;
            }

            let equipmentPart = data.split(";");
            history.push("/scan/" + equipmentPart[0] + "/" + equipmentPart[1]);
        }
    }

    const handleError = err => {
        console.error(err);
    };

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            {error ? <Alert severity="error">Error reading QR-Code, please try again.</Alert> : null}
            <Paper className={classes.paper}>
                <QrReader onError={handleError} onScan={handleScan}/>
            </Paper>
        </Box>

    )
}