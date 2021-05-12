import React from 'react';
import LinkCard, {LinkCardT} from "components/LinkCard/LinkCard";
// @ts-ignore
import Links from "../../data/links";
import {Grid} from "@material-ui/core";

const LinkGrid: React.FC = () => {
    return (
        <Grid
            container
            spacing={3}
        >
            {Links.map((linkCard: LinkCardT) => (
                <Grid item>
                    <LinkCard
                        name={linkCard.name}
                        image={linkCard.image}
                        buttonText={linkCard.buttonText}
                        description={linkCard.description}
                        url={linkCard.url}
                    />
                </Grid>
            ))}
        </Grid>
    );
}
export default LinkGrid;
