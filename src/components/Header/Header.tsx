import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    header: {
        position: 'relative',
        width: '100%',
        backgroundColor: '#E8E8E8',
        paddingTop: 8,
        paddingBottom: 8,
    },
    wrap: {
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: 40,
        paddingRight: 20,
    }
});

const Header: React.FC = () => {
    const classes = useStyles();

    return (
        <div
            className={classes.header}
        >
            <div
                className={classes.wrap}
            >
                <img
                    src="img/logo.svg"
                    alt="abapGit Logo"
                    style={{height: '40px'}}
                />
            </div>
        </div>
    )
}
export default Header
