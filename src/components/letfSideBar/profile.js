import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import SettingsIcon from '@material-ui/icons/Settings';
import Switch from '@material-ui/core/Switch';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import AvatarImg3 from "../../assets/images/img3.png";

export default function Profile() {
    const classes = useStyles();
    const [checked, setChecked] = useState(true);

    const handleChange = () => {
        setChecked(!checked)
    }

    return (
        <div style={{ width: "100%" }}>
            <div className={classes.header}>
                <Avatar className={classes.green}>
                    <OfflineBoltIcon />
                </Avatar>
                <h3 style={{ paddingLeft: "2rem", fontWeight: "800" }}>QuickChat</h3>
            </div>
            <Paper className={classes.paper}>
                <img alt="AvatarImg1" src={AvatarImg3} style={{ width: "75px", padding: "5%" }} />
                <Typography style={{ fontWeight: 600, fontSize: "16px", display: "flex", alignItems: "center" }}>
                    Bill Bradford
                    <SettingsIcon fontSize="small" style={{ paddingLeft: "2px" }} />
                </Typography>
                <Typography style={{ fontWeight: 200, color: "#5c5a5a", fontSize: "10px" }}>
                    Lead UI/UX Designer
                </Typography>
                <Switch
                    checked={checked}
                    onChange={handleChange}
                    color="primary"
                    name="checkedB"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            </Paper>
        </div>
    )
}


const useStyles = makeStyles({
    header: {
        display: "flex",
        alignItems: "center",
        justifyItems: "start"

    },
    paper: {
        width: "100%",
        height: "200px",
        background: "#eff7fe",
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
    },
    green: {
        color: "#37305f",
        backgroundColor: "#96c7f3",
    },
});