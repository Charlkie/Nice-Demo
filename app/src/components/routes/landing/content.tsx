import React from 'react'
import { Container, Grid, Segment } from 'semantic-ui-react'

const Content: React.SFC<{}> = () => (
    <Segment vertical={true} className='main'>
        <Responsive />
    </Segment>
)

const Responsive = () => (
    <Grid className='first' centered={true} style={{ paddingTop: '100px' }}>
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

export default Content