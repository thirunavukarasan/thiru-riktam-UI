import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LeftSideBar from "./components/letfSideBar/index";
import RightSideBar from "./components/rightSideBar/index";
import ChatSection from "./components/chatSection"

function App() {
    const classes = useStyles();
    return (
        <React.Fragment >
            <Container maxWidth="xl">
                <Paper className={classes.paperRoot} elevation={3} >
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={4} lg={3}>
                            <LeftSideBar />
                        </Grid>
                        <Grid item xs={12} md={4} lg={6} className={'chatSection'}>
                            <ChatSection />
                        </Grid>
                        <Grid item xs={12} md={4} lg={3}>
                            <RightSideBar />
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </React.Fragment>
    );
}

export default App;

const useStyles = makeStyles((theme) => ({
    paperRoot: {
        height: "100vh",
        margin: "2% 0%",
        "& .chatSection": {
            padding: "20px 20px",
        },
        [theme.breakpoints.up('sm')]: {
            "& .chatSection": {
                padding: "20px 20px",
            },
        },
        [theme.breakpoints.up('md')]: {
            "& .chatSection": {
                padding: "20px 0px",
            },
        },
    }
}));
