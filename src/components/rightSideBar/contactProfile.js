import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Button from '@material-ui/core/Button';
import { appContext } from "../../state/app.context";

export default function ContactProfile() {
    const classes = useStyles();
    const context = useContext(appContext);
    const { name, email } = context.selectedContact;
    const [label, setLabel] = useState("HB")

    useEffect(() => {
        setLabel(name ? name[0] : "")
    }, [context])


    return (
        <div style={{ width: "100%" }}>
            <Paper className={classes.paper}>
                <Avatar style={{ margin: "1% 4%" }} className={classes.large}>{label}</Avatar>
                <div style={{ margin: "2%" }}>
                    <Typography style={{ fontWeight: 200, width: "100%", fontSize: "12px", display: "flex", color: "rgb(142 137 137)", alignItems: "left", marginRight: "2%" }}>
                        <AccountCircleIcon fontSize="small" style={{ paddingRight: "5px" }} />
                        {name}
                    </Typography>

                    <Typography style={{ fontWeight: 200, width: "100%", fontSize: "12px", display: "flex", color: "rgb(142 137 137)", alignItems: "left", marginRight: "2%" }}>
                        <MailOutlineIcon fontSize="small" style={{ paddingRight: "5px" }} />
                        {email}
                    </Typography>
                </div>
                <Button variant="outlined" color="primary" endIcon={<DeleteOutlineIcon />} style={{ textTransform: "none" }}
                >
                    Archive
                </Button>
            </Paper>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    paper: {
        width: "100%",
        height: "170px",
        background: "#eff7fe",
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        fontWeight: 600,
        color: "#37305f",
        backgroundColor: "#96c7f3",
    },
}));