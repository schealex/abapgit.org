import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Container, Grid} from "@material-ui/core";
import Search from "components/Header/Search/Search";

const useStyles = makeStyles({
    header: {
        position: 'relative',
        width: '100%',
        backgroundColor: '#E8E8E8',
        paddingTop: 8,
        paddingBottom: 8,
    },
    wrap: {
        maxWidth: 1280,
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
            <Container>
                <Grid container spacing={1}>
                    <Grid item xs={8}>
                        <img
                            src="img/logo.svg"
                            alt="abapGit Logo"
                            style={{height: '40px'}}
                        />
                    </Grid>
                    <Grid
                        item xs={4}
                        alignContent='flex-end'
                    >
                        <Search/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default Header
