import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    body: {
        fontFamily: 'HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
        fontWeight: 300,
        fontSize: 16,
        margin: 0,
        padding: 0
    },
});

// @ts-ignore
const Document = ({ Html, Head, Body, children }) => {
    const classes = useStyles();

    return (
        <Html lang="en-US">
            <Head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>AbapGit.org</title>
            </Head>
            <Body
                className={classes.body}
            >{children}</Body>
        </Html>
    )
};
export default Document;
