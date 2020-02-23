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

    async function fetchData() {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/" + props.match.params.id);
        console.log(props.match.params.id)

        res.json().then((res) => {
            setParts(res)
        }).catch(console.log)
    }

    useEffect(() => {
        fetchData();
    }, []);

    const classes = useStyles();

    return (

        <Paper className={classes.root}>
            {parts.title}
        </Paper>
    )
}