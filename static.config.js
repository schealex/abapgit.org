import { makeStyles } from '@material-ui/core/styles';
import path from 'path'
import React from 'react';

// Typescript support in static.config.js is not yet supported, but is coming in a future update!

export default {
    entry: path.join(__dirname, 'src', 'index.tsx'),
    plugins: [
        'react-static-plugin-typescript',
        [
            require.resolve('react-static-plugin-source-filesystem'),
            {
                location: path.resolve('./src/pages'),
            },
        ],
        require.resolve('react-static-plugin-reach-router'),
        require.resolve('react-static-plugin-sitemap'),
        'jss-provider',
    ],
    Document: ({
                   Html,
                   Head,
                   Body,
                   children,
               }) => (
            <Html lang="en-US">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta name="description" content="abapGit.org - Welcome"/>
                    <meta name="keywords" content="abapGit"/>
                    <link rel="shortcut icon" type="image/png" href="favicon.png"/>
                    <title>abapGit.org - Welcome</title>
                </Head>
                <Body
                    style={{
                        fontFamily: 'Arial,Helvetica,sans-serif',
                        background: '#F8F8F8',
                        margin: 'auto',
                        fontSize: 12,
                    }}
                >{children}</Body>
            </Html>
        ),
}
