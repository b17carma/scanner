import React, {useEffect} from "react";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(1),
        marginBottom: theme.spacing(1)
    }
}));

export default function Scan(props) {

    const [parts, setParts] = React.useState([{}]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://localhost:3001/parts/" + props.match.params.id);
            const data = await res.json();
            setParts(data);
            setLoading(false);
        }

        fetchData();
        console.log("Fetched scan data");
    }, [props.match.params.id]);

    const classes = useStyles();

    return (
        <Container className={classes.root}>
            {loading ? [...new Array(4)].map((item, index) => (
                <Skeleton variant="text" key={"skeleton-" + index}/>
            )) : (parts.map((part, i) => (
                <Paper className={classes.paper} key={i}>
                    {part.identifier}, {part.image}, {part.order}
                </Paper>
            )))}
        </Container>
    )
}