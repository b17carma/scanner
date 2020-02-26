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

    const previewStyle = {
    };

    const handleError = err => {
        console.error(err);
    };

    return (
        <div>
            <QrReader
                onError={() => handleError}
                onScan={() => handleScan}
                style={previewStyle}
            />
            <p>Value: {value}</p>
        </div>
    )
}