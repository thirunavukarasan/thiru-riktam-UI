import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ContactProfile from "./contactProfile";
import OnBoardClient from './onBoardClient';
import InsightView from "./insightView";

export default function Index() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                className={classes.rightBarRoot}
            >
                <ContactProfile />
                <InsightView />
                <OnBoardClient />
            </Grid>
        </React.Fragment>
    )
}

const useStyles = makeStyles({
    rightBarRoot: {
        padding: "0% 5%"
    }
});