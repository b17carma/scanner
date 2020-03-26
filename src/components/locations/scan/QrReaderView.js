import React, {useState} from "react";
import QrReader from "react-qr-reader";
import {useHistory} from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import Box from "@material-ui/core/Box";

export default function QrReaderView() {
    const history = useHistory();
    const [error, setError] = useState(false);

    function handleScan(data) {
        if (data) {
            if (!data.includes(";")) {
                setError(true);
                return;
            }

            let split = data.split(";");
            let equipment = split[0];
            let component = split[1];

            history.push("/scan/" + equipment + "/" + component);
        }
    }

    const handleError = err => {
        console.error(err);
    };

    return (
        <Box>
            {error ? <Alert severity="error">Error reading QR-Code, please try again.</Alert> : null}
                <QrReader onError={handleError} onScan={handleScan}/>
        </Box>

    )
}
