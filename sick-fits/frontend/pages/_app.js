// NextJS providr custom <App> (we import form next/app) to wrap all the page and Component, so it can store/pass state easiler
import App, { Container } from 'next/app';
import Page from '../components/Page';

class MyApp extends App {
    render() {
        const { Component } = this.props; // Component is cell or index as we visit page, {this.props.children} 就是這些子component
        return (
            <Container>
                <Page>
                    <Component />
                </Page>
            </Container>
        )
    }
}

export default MyApp;