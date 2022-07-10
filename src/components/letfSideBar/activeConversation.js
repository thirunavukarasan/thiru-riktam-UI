import React, { useState, useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import { appContext } from "../../state/app.context";
import { activeConverUser, archivedConverUser } from "../../assets/mockData/userConversation";

export default function ActiveConversation(props) {
    const classes = useStyles();
    const context = useContext(appContext);
    const [expanded, setExpanded] = useState();
    const [activeChat, setActiveChat] = useState(0);

    useEffect(() => {
        updateState({
            name: "Hendry Boyd",
            email: "hendry@gmail.com"
        });
    }, [])

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const onClickChat = (i, user) => {
        setActiveChat(i);
        updateState(user);
    }

    const updateState = (user) => {
        const getMessages = activeConverUser.filter(d => d.name === user.name);
        context.setSelectedContact(user);
        context.setMessages(getMessages.length ? getMessages[0].messages : [])
        context.setInsight(
            getMessages.length ? getMessages[0].insights : {}
        );
    }

    return (
        <React.Fragment>
            <div className={classes.rootActiveCon}>
                <Accordion expanded={expanded === "Active Conversation"}
                    onChange={handleChange("Active Conversation")}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography >
                            {"Active Conversation"}
                        </Typography>
                        <Chip size="small" label={"4"} style={{ marginLeft: "2%", fontWeight: 600 }} />

                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            {
                                activeConverUser.map((user, i) => {
                                    return (
                                        <div className={classes.activeChat} key={i} style={{ background: activeChat === i ? "#eff7fe" : "" }} onClick={() => onClickChat(i, user)}>
                                            <img alt='user-avatar' src={require(`../../assets/images/${user.imageSrc}`)} style={{ width: "40px" }} />
                                            <Typography style={{ marginLeft: "5%", fontWeight: 400, color: "#5c5a5a", fontSize: "14px" }}>
                                                {user.name}
                                            </Typography>
                                        </div>
                                    )
                                })
                            }
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === "Archived Conversation"}
                    onChange={handleChange("Archived Conversation")}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography >
                            {"Archived Conversation"}
                        </Typography>
                        <Chip size="small" label={"3"} style={{ marginLeft: "2%", fontWeight: 600 }} />

                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            {
                                archivedConverUser.map((user, i) => {
                                    return (
                                        <div className={classes.activeChat} key={i} style={{ background: activeChat === i ? "#eff7fe" : "" }} onClick={() => onClickChat(i, user)}>
                                            <img alt='user-avatar' src={require(`../../assets/images/${user.imageSrc}`)} style={{ width: "40px" }} />
                                            <Typography style={{ marginLeft: "5%", fontWeight: 400, color: "#5c5a5a", fontSize: "14px" }}>
                                                {user.name}
                                            </Typography>
                                        </div>
                                    )
                                })
                            }
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </div>

        </React.Fragment>
    )
}

const useStyles = makeStyles({
    rootActiveCon: {
        paddingTop: "2%",
        width: "100%",
        '& .MuiAccordionSummary-content.Mui-expanded': {
            margin: "0px"
        },
        '& .MuiAccordionSummary-root.Mui-expanded': {
            minHeight: "48px"
        }
    },
    activeChat: {
        // background: "#eff7fe",
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "50px",
        padding: "2%",
        margin: "1% 0%",
        borderRadius: "10px",
        cursor: "pointer"
    }
});