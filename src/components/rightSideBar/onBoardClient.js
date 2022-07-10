import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LinkIcon from '@material-ui/icons/Link';

export default function OnBoardClient() {
    const classes = useStyles();

    return (
        <div style={{ width: "100%", marginTop: "2%" }}>
            <Paper className={classes.paper}>
                <Typography variant="h6" gutterBottom>
                    Onboard Clients
                </Typography>
                <Typography variant="p" gutterBottom align="center">
                    Share the link with the prospect and discuss all stuff
                </Typography>
                <Button variant="contained" color="primary" endIcon={<LinkIcon />} style={{ textTransform: "none" }}
                >
                    Copy Link
                </Button>
            </Paper>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    paper: {
        width: "100%",
        height: "150px",
        background: "#eff7fe",
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
    }
}));