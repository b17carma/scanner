import React, {useState} from "react";
import QrReader from "react-qr-reader";
import {useHistory} from "react-router-dom";

export default function QrScanner() {

    const history = useHistory();
    const [value, setValue] = useState("No Result");

    function handleScan(data) {
        if (data) {
            let equipmentPart = data.split(";");
            history.push("/scan/" + equipmentPart[0] + "/" + equipmentPart[1]);

            setValue(data)
        }
    }

    const handleError = err => {
        console.error(err);
    };

    return (
        <div>
            <QrReader
                legacyMode={process.env.REACT_APP_ENVIRONMENT === 'DEVELOPMENT'}
                onImageLoad={() => handleScan}
                onError={() => handleError}
                onScan={() => handleScan}
            />
            <p>Value: {value}</p>
        </div>
    )
}