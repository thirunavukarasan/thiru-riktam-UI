import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PeopleIcon from '@material-ui/icons/People';
import MessageIcon from '@material-ui/icons/Message';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import Typography from '@material-ui/core/Typography';
import { appContext } from "../../state/app.context";
import { weekDays } from "../../assets/mockData/userConversation";


export default function InsightView() {
    const classes = useStyles();
    const context = useContext(appContext);


    return (
        <div style={{ width: "100%", marginTop: "2%" }}>
            <Paper className={classes.paper}>
                <Grid container >
                    <Grid item xs={12} className={classes.cardSec}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={1}
                        >
                            <Grid item xs={6}>
                                <Paper className={classes.dataCard1}>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <div >
                                            <ScheduleIcon fontSize="large" />
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column", padding: "4%" }}>
                                            <span style={{ fontWeight: "bold", color: "blue" }} className={'head-span'}>{context?.insight?.time ? context.insight.time : ""}</span>
                                            <span style={{ fontWeight: "lighter" }}>Time</span>
                                        </div>
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper className={classes.dataCard2}>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <div >
                                            <PeopleIcon fontSize="large" />
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column", padding: "4%" }}>
                                            <span style={{ fontWeight: "bold", color: "#00b846" }} className={'head-span'}>{context?.insight?.atendeed ? context.insight.atendeed : ""}</span>
                                            <span style={{ fontWeight: "lighter" }}>Atendeed</span>
                                        </div>
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper className={classes.dataCard3}>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <div >
                                            <CollectionsBookmarkIcon fontSize="large" />
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column", padding: "4%" }}>
                                            <span style={{ fontWeight: "bold", color: "#4839ac" }} className={'head-span'}>{context?.insight?.meetings ? context.insight.meetings : ""}</span>
                                            <span style={{ fontWeight: "lighter" }}>Meetings</span>
                                        </div>
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper className={classes.dataCard4}>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <div >
                                            <MessageIcon fontSize="large" />
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column", padding: "4%" }}>
                                            <span style={{ fontWeight: "bold", color: "#ff0000" }} className={'head-span'}>{context?.insight?.rejected ? context.insight.rejected : ""}</span>
                                            <span style={{ fontWeight: "lighter" }}>Rejected</span>
                                        </div>
                                    </div>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid> 
                    <Grid item xs={12} className={classes.calender}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            {/* <Typography component="div" gutterBottom style={{ fontWeight: "bold" }}>
                                Current Week
                            </Typography>
                            <Typography component="div" gutterBottom style={{ fontWeight: "lighter" }}>
                                Activity
                            </Typography> */}
                        </div>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-end"
                        >
                            <Grid item xs={12}>
                                <div style={{ width: "100%", display: "flex", justifyContent: "space-around", alignItems: "baseline" }}>
                                    {
                                        weekDays.map(d => {
                                            return (
                                                <React.Fragment key={d.day}>
                                                    <div style={{
                                                        height: `${d.val}px`,
                                                        width: "8px",
                                                        background: d.day === "Tue" ? "#2e3bbe" : "#a6aef8",
                                                        borderRadius: "10px"
                                                    }}>
                                                        {""}</div>
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <div style={{ width: "100%", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                                    {
                                        weekDays.map(d => {
                                            return (
                                                <React.Fragment key={d.day}>
                                                    <div style={{
                                                        height: "5px",
                                                        width: "5px",
                                                        background: d.day === "Tue" ? "#2e3bbe" : "#a6aef8", margin: "1% 2%",
                                                        padding: "1% 1%",
                                                        borderRadius: "50%"
                                                    }}>
                                                        {""}</div>
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <div style={{ width: "100%", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                                    {
                                        weekDays.map(d => {
                                            return (
                                                <React.Fragment key={d.day}>
                                                    <span style={{ padding: "2%", fontWeight: "lighter" }}>
                                                        {d.day}
                                                    </span>
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div >
    )
}

const useStyles = makeStyles((theme) => ({
    paper: {
        width: "100%",
        height: "46vh",
        background: "#eff7fe",
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
    },
    cardSec: {
        height: "150px",
        padding: "5%",
        '& span': {
            letterSpacing: "0px"
        },
        '& .head-span': {
            fontSize: "22px"
        }
    },
    calender: {
        height: "100%",
        padding: "5%",
        marginTop: "5%"
    },
    calendInfo: {
        height: "125px",
        padding: "5%"
    },
    dataCard1: {
        height: "75px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center ",
        background: "#8cbeea"
    },
    dataCard2: {
        height: "75px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center ",
        background: "#d7f4d2"
    },
    dataCard3: {
        height: "75px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center ",
        background: "#d2d8dd"
    },
    dataCard4: {
        height: "75px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center ",
        background: "#fee9e9"
    }
}));
