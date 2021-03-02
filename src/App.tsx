import React from 'react'
import {Root} from 'react-static'
import Header from "components/Header/Header";
import { createMuiTheme } from '@material-ui/core/styles';
import LinkGrid from "components/LinkGrid/LinkGrid";
import {Container} from "@material-ui/core";
import Intro from "components/Intro/Intro";
import ScenarioList from "components/ScenarioList/ScenarioList";

createMuiTheme({
    palette: {
        primary: {
            main: '#e8e8e8',
        },
        secondary: {
            main: '#616161',
        },
    },
});

function App() {
    return (
        <Root>
            <Header />
            <Container maxWidth={false}>
                <Intro/>
                <LinkGrid/>
                <ScenarioList/>
            </Container>
        </Root>
    )
}

export default App
