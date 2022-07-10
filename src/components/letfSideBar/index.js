import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Profile from "./profile";
import UserConversation from "./activeConversation";

export default function Index() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                className={classes.lefBarRoot}
            >

                <Profile />
                <UserConversation />
            </Grid>
        </React.Fragment>
    )
}

const useStyles = makeStyles({
    lefBarRoot: {
        padding: "0% 5%"
    }
});