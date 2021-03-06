import React from 'react';
import {Row, Col} from 'antd';

import Sider from './sider';

const style = {
    backgroundColor: '#FFFFFF0A',
    border: '1px dashed white',
};

export default () => {
    const affixRef = React.createRef();
    return (      
        <Row style={{width: '100%', height: 1000}}> 
            <Col xs={24} md={8} style={style}>
                <Sider affixRef={affixRef}/>
            </Col>
            <Col xs={24} md={16} style={style}>HOLA</Col>            
        </Row>
    );
}

