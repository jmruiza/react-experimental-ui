import React from 'react';
import {Row, Col} from 'antd';

const style = {
    backgroundColor: '#FFFFFF0A',
    border: '1px dashed white',
};

export default () => {
    return (      
        <Row style={{width: '100%', height: 600, backgroundColor: 'white'}}> 
            <Col xs={24} md={16} style={style}>HOLA</Col>            
        </Row>
    );
}

