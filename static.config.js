import path from 'path'
import React from 'react';
import algoliasearch from 'algoliasearch'
import Scenarios from './src/data/scenarios'

require('dotenv').config()

// Typescript support in static.config.js is not yet supported, but is coming in a future update!

const client = algoliasearch(process.env.applicationID, process.env.adminApiKey)

const addSearchObjects = (indexName, data) => {
    const index = client.initIndex(indexName)
    index.saveObjects(data, { autoGenerateObjectIDIfNotExist: true }).catch((err) => {
        if (err) {
            console.error(err)
        }
    })
}
addSearchObjects('abapGit.org', Scenarios);

export default {
    entry: path.join(__dirname, 'src', 'index.tsx'),
    plugins: [
        '@elbstack/react-static-plugin-dotenv',
        'react-static-plugin-typescript',
        [
            require.resolve('react-static-plugin-source-filesystem'),
            {
                location: path.resolve('./src/pages'),
            },
        ],
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
