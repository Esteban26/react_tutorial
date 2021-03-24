import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    }
});

const Animal = ({ name, image, description }) => {
    const classes = useStyles();
    const mediaSrc = `/assets/${image}`;
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={mediaSrc}
                title={mediaSrc}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Animal;


