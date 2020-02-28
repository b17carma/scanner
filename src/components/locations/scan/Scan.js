import React, {useState} from "react";
import QrReader from "react-qr-reader";
import {useHistory} from "react-router-dom";
import {Paper} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1)
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
            if (!data.contains(";")) {
                setError(true);
                return;
            }

            let equipmentPart = data.split(";");
            history.push("/scan/" + equipmentPart[0] + "/" + equipmentPart[1]);
        }
    }

    const previewStyle = {
    };

    const handleError = err => {
        console.error(err);
    };

    const classes = useStyles();

    return (
        <Container className={classes.root}>
            {error ? <Alert severity="error">Error reading QR-Code, please try again.</Alert> : null}
            <Paper className={classes.paper}>
                <QrReader
                    onError={handleError}
                    onScan={handleScan}
                    style={previewStyle}
                />
            </Paper>
        </Container>

    )
}