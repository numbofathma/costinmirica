import * as React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps (ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () => originalRenderPage({
                enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
            });

            const initialProps = await Document.getInitialProps(ctx);

            return {
                ...initialProps,
                styles: <>{initialProps.styles}{sheet.getStyleElement()}</>
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <html>
                <Head>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
                    <meta name='theme-color' content='#000000' />
                    <meta property='og:url' content='https://costinmirica.com' />
                    <meta property='og:type' content='website' />
                    <meta property='og:title' content='Costin Mirica - Full Stack Developer' />
                    <meta property='og:description' content='Just another developer understading the world one line of code at a time.' />
                    <link rel='shortcut icon' href='../static/favicon.ico' />
                    <link href='https://fonts.googleapis.com/css?family=Varela+Round' rel='stylesheet' type='text/css' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
