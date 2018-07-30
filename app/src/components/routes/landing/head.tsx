import React from 'react'
import { Button } from 'semantic-ui-react'

const Head: React.SFC<{}> = () => (
    <div className='header'>
        <div>
            <h1>Lorem Ipsum</h1>
            <h1>Lorem Ipsum</h1>
            <Button basic={true} size='large'>something</Button>
            <Button basic={true} size='large'>something</Button>
        </div>
    </div>
)

export default Head