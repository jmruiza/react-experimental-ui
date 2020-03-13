import React from 'react';
import { Row, Col } from 'antd';

const style = {
    backgroundColor: '#FFFFFF0A',
    border: '1px dashed white',
};

export default () => {
    return <Row
        style={{            
            width: '85%',
            minHeight: 678
        }}
        > 
        {/* TODO: Work in design with content */}
        <Col xs={24} md={15} style={style}>.col</Col>
        <Col xs={24} md={9} style={style}>.col</Col>
    </Row>
}

