import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export type LinkCardT = {
    image: string;
    name: string;
    description: string;
    buttonText: string;
    url: string;
}

// @ts-ignore
const LinkCard = ({image, name, description, buttonText, url}: LinkCardT) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    src={image}
                    title={name}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                    >
                        {name}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    size="small"
                    color="primary"
                >
                    {buttonText}
                </Button>
            </CardActions>
        </Card>
    )
}
export default LinkCard;
