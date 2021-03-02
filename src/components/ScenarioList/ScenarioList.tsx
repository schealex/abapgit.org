import React from "react";
import {Box, Grid, Typography} from "@material-ui/core";
import Scenarios from "../../data/scenarios";
import Scenario, {ScenarioT} from "components/ScenarioList/Scenario/Scenario";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    box: {
        marginTop: 35,
    },
    item: {
        maxWidth: 700,
    }
}));

const ScenarioList: React.FC = () => {
    const classes = useStyles();

    return (
        <Box
            className={classes.box}
        >
            <Typography variant="h5" component="h5">
                Scenarios /use-cases
            </Typography>
            <Grid
                container
                spacing={3}
                alignContent="flex-start"
                alignItems="flex-start"
            >
                {Scenarios.map((scenario: ScenarioT) => (
                    <Grid
                        item xs={12}
                        className={classes.item}
                    >
                        <Scenario
                            name={scenario.name}
                            image={scenario.image}
                            description={scenario.description}
                            url={scenario.url}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
export default ScenarioList;
