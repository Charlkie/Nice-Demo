import React from 'react';
import { Container, Divider, Grid, Segment } from 'semantic-ui-react';

const Content: React.SFC<{}> = () => (
    <Segment vertical={true} className='main'>
        <Responsive />
        <UX />
    </Segment>
)

const Responsive = () => (
    <Grid className='first' centered={true} style={{ paddingTop: '100px', width: '100%' }}>
        <Grid.Column width={14}>
            <Container align='center'>
                <div style={{ position: 'relative' }}>
                    <img 
                        style={{ position: 'relative', top: "0px", left: "0px", zIndex: 1, width: '600px' }}
                        src="http://www.pngpix.com/wp-content/uploads/2016/04/Responsive-Web-Design-PNG-Image2.png" 
                        alt="responsive"
                        className="responsive"
                    />
                    <h1>Avaliable on all devices</h1>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Mollitia asperiores molestias sunt pariatur rerum soluta 
                        assumenda ipsam repellat error, modi labore.</h2>
                </div>
            </Container>
        </Grid.Column>
    </Grid>
)

const UX = () => (
    <Grid className='second' centered={true} style={{ paddingTop: '50px' }}>
        <Grid.Column width={7}>
            <Container align='center'>
                <h1>Heading 1</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia asperiores molestias sunt pariatur rerum soluta assumenda ipsam repellat error, modi labore. Quaerat obcaecati eius aliquid quisquam alias facilis porro magnam?</p>
            </Container>
            <Divider/>
        </Grid.Column>
        <Grid.Column width={7}>
            <Container align='center'>
                <h1>Heading 1</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia asperiores molestias sunt pariatur rerum soluta assumenda ipsam repellat error, modi labore. Quaerat obcaecati eius aliquid quisquam alias facilis porro magnam?</p>
            </Container>
            <Divider/>
        </Grid.Column>
    </Grid>
)

export default Content