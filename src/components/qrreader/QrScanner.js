import React, {useState} from "react";
import QrReader from "react-qr-reader";

export default function QrScanner() {

    const [value, setValue] = useState("No Result");

    const handleScan = data => {
        if (data) {
            setValue(data)
        }
    };

    const previewStyle = {
    };

    const handleError = err => {
        console.error(err);
    };

    return (
        <div>
            <QrReader
                onError={handleError}
                onScan={handleScan}
                style={previewStyle}
            />
            <p>Value: {value}</p>
        </div>
    )
}