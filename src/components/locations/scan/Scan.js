import React, {useEffect} from "react";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
        padding: theme.spacing(1)
    },
}));

export default function Scan(props) {

    const [parts, setParts] = React.useState({});

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://jsonplaceholder.typicode.com/todos/" + props.match.params.id);
            const data = await res.json();
            setParts(data);
        }

        fetchData();
        console.log("Fetched scan data");
    }, [props.match.params.id]);

    const classes = useStyles();

    return (

        <Paper className={classes.root}>
            {parts.title}
        </Paper>
    )
}