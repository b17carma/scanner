import React, {useEffect} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function PartInfo(props) {
    const [parts, setParts] = React.useState([{}]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://192.168.1.64:3001/parts/" + props.match.params.equipmentId + "/" + props.match.params.partId);
            const data = await res.json();
            setParts(data);
            setLoading(false);
        }

        fetchData();
        console.log("Fetched scan data");
    }, [props.match.params.equipmentId, props.match.params.partId]);

    const classes = useStyles();

    return (
       <div>
           ok
       </div>
    )
}