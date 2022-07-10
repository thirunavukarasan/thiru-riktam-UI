import React, { useContext, useState, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { appContext } from "../../state/app.context";
import "./index.css";

export default function Index() {
    const classes = useStyles();
    const context = useContext(appContext);
    const messagesEndRef = useRef(null)
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        scrollToBottom()
    }, [context, newMessage])


    const onHandleChange = (e) => {
        setNewMessage(e.target.value);
    }

    const onSendMessage = () => {
        const newMsg = {
            "user": "Bill Bradford",
            "msg": newMessage,
            "userImg": "img3.png",
            "item": 5
        }
        const _context = context.messages;
        _context.push(newMsg);
        context.setMessages(_context)
        setNewMessage('');
    }

    const scrollToBottom = () => {
        // console.log('messagesEndRef-->', messagesEndRef)
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <React.Fragment>
            <Grid
                container
                direction="row-reverse"
                justifyContent="space-between"
                alignItems="flex-end"
                className={classes.chatSecRoot}
            >
                <Grid item xs={12}>
                    <Grid item xs={12} style={{ margin: "2%", maxHeight: "580px", overflowY: "auto" }} className={'scrollbar'}>
                        {context.messages.map((d, i) => {
                            return (
                                <React.Fragment key={i}>
                                    {
                                        d.user !== "Bill Bradford" && <Grid
                                            container
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="flex-end"
                                            style={{ padding: "1% 0%" }}
                                        >
                                            <Grid item xs={12}>
                                                <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                                    <img alt='user-avatar' src={require(`../../assets/images/${d.userImg}`)} style={{ width: "40px" }} />
                                                    <div className={classes.chatBoxText2}>{d.msg}</div>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    }

                                    {
                                        d.user === "Bill Bradford" && <Grid
                                            container
                                            direction="row-reverse"
                                            justifyContent="flex-start"
                                            alignItems="flex-end"
                                            style={{ textAlign: "right", padding: "1% 0%" }}
                                        >
                                            <Grid item xs={12} >
                                                <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                                                    <div className={classes.chatBoxText1}>{d.msg}</div>
                                                    <img alt='user-avatar' src={require(`../../assets/images/${d.userImg}`)} style={{ width: "40px" }} />
                                                </div>
                                            </Grid>
                                        </Grid>
                                    }

                                </React.Fragment>
                            )
                        })}
                        <div ref={messagesEndRef} />
                    </Grid>
                    <Paper className={classes.inputTextBox}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="flex-start"
                        >
                            <Grid item xs={1} md={1} lg={1}>
                                <AttachFileIcon style={{ padding: "6px 0px 0px 6px" }} />
                            </Grid>
                            <Grid item xs={8} md={7} lg={9}>
                                <input placeholder="Enter your message here" type="text" id="messaage" name="messaage" style={{ width: "95%", height: "30px" }} value={newMessage} onChange={(e) => onHandleChange(e)} />
                            </Grid>
                            <Grid item xs={3} md={4} lg={2} style={{ textAlign: "center" }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    endIcon={<SendIcon />}
                                    style={{ textTransform: "none" }}
                                    onClick={() => onSendMessage()}
                                    size="small"
                                >
                                    Send
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>

                </Grid>
            </Grid>
        </React.Fragment>
    )
}

const useStyles = makeStyles((theme) => ({
    chatSecRoot: {
        height: "90vh",
        [theme.breakpoints.up('md')]: {
            height: '96vh',
        },
        background: "#eff7fe",
    },
    inputTextBox: {
        height: "50px",
        width: "100%",
        background: "white",
        margin: "2%",
        display: "flex",
        alignItems: "center",
    },
    chatBoxText1: {
        marginRight: "2%",
        padding: "2%",
        width: "auto",
        background: "#383546",
        color: "white",
        borderRadius: "10px"
    },
    chatBoxText2: {
        marginLeft: "2%",
        padding: "2%",
        width: "auto",
        background: "#ffffff",
        color: "black",
        borderRadius: "10px"
    }
}));
