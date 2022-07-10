import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import SettingsIcon from '@material-ui/icons/Settings';
import Switch from '@material-ui/core/Switch';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AvatarImg3 from "../../assets/images/img3.png";

export default function Profile() {
    const classes = useStyles();
    const [checked, setChecked] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);


    const handleChange = () => {
        setChecked(!checked)
    }

    const handleClickSetting = (e) => {
        setAnchorEl(e.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div style={{ width: "100%" }}>
            <div className={classes.header}>
                <Avatar className={classes.green}>
                    <OfflineBoltIcon />
                </Avatar>
                <h3 style={{ paddingLeft: "2rem", fontWeight: "800" }}>QuickChat</h3>
            </div>
            <Paper className={classes.paper}>
                <img alt="AvatarImg1" src={AvatarImg3} style={{ width: "75px", padding: "5%" }} className={"profile-avatar"} />
                <Typography style={{ fontWeight: 600, fontSize: "16px", display: "flex", alignItems: "center" }}>
                    Bill Bradford
                    <Menu
                        id="simple-menu"
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: "visible",
                                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                mt: 1.5,
                                "& .profile-avatar": {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                "&:before": {
                                    content: '""',
                                    display: "block",
                                    position: "absolute",
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: "background.paper",
                                    transform: "translateY(-50%) rotate(45deg)",
                                    zIndex: 0,
                                },
                            },
                        }}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                    <SettingsIcon fontSize="small" style={{ paddingLeft: "2px" }} onClick={handleClickSetting} />

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