
import React from 'react';
import {Row, Col} from 'antd';

const style = {
    backgroundColor: '#FFFFFF0A',
    border: '1px dashed white',
    width: '100%', 
    height: 678
};

export default () => {
    return (      
        <Row style={style}> 
            <Col xs={24} md={15} style={style}>.col</Col>
            <Col xs={24} md={9} style={style}>.col</Col>
        </Row>
    );
}