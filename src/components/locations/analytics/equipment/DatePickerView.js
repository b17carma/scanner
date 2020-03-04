import Container from "@material-ui/core/Container";
import {KeyboardDatePicker} from "@material-ui/pickers";
import Divider from "@material-ui/core/Divider";
import React from "react";

export default function DatePickerView(props) {
    return (
        <Container>
            <div>
                <KeyboardDatePicker
                    margin="normal"
                    id="start-date-picker"
                    label="Start date"
                    value={props.startDate}
                    format="MM/DD/YYYY"
                    onChange={props.handleStartDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </div>
            <div>
                <KeyboardDatePicker
                    margin="normal"
                    id="end-date-picker"
                    label="End date"
                    value={props.endDate}
                    format="MM/DD/YYYY"
                    onChange={props.handleEndDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </div>
            <Divider/>
        </Container>
    )
}