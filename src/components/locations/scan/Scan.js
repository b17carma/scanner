import React, {useEffect} from "react";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
    },
}));

export default function Scan(props) {

    const [parts, setParts] = React.useState({});
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://jsonplaceholder.typicode.com/todos/" + props.match.params.id);
            const data = await res.json();
            setParts(data);
            setLoading(false);
        }

        fetchData();
        console.log("Fetched scan data");
    }, [props.match.params.id]);

    const classes = useStyles();

    return (
        <Container>
            {loading ? [...new Array(4)].map((item, index) => (
                <Skeleton variant="text"/>
            )) : (
                <Paper className={classes.root}>
                    {parts.title}
                </Paper>
            )}
        </Container>
    )
}