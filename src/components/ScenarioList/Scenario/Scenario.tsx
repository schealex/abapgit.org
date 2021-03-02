import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 200,
    },
}));

export type ScenarioT = {
    image: string;
    name: string;
    description: string;
    url: string;
}

// @ts-ignore
const Scenario = ({image, name, description, url}: ScenarioT) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                component="img"
                className={classes.cover}
                src={image}
                title={name}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography
                        component="h5"
                        variant="h5"
                    >
                        {name}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="textSecondary"
                    >
                        {description}
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
}
export default Scenario;
