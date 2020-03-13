import React from 'react';
import {Row, Col, Layout, Menu, Dropdown, Button} from 'antd';
import { LinkedinOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';

const {Footer} = Layout;
const style = { textAlign: 'center' };
const styleMenu = { width: 100, backgroundColor: '#333', color: '#bbb' };
const menu = (
    <Menu style={{...styleMenu}}>
      <Menu.Item style={{color: '#bbb'}}>
          Español
      </Menu.Item>
      <Menu.Item style={{color: '#bbb'}}>
          English
      </Menu.Item>    
    </Menu>
  );

export default (props) => {
  return (
        <Footer 
            style={{...style, ...props.style}}
        >
            <Row className='footer-main' justify="start">
                <Col xs={24} md={1}>
                    <Dropdown overlay={menu} placement="topCenter">
                        <Button style={{...styleMenu, border: 'none'}}>{props.currentLanguaje}</Button>
                    </Dropdown>
                </Col>
                <Col xs={24} md={16}>
                    <ul className='footer-menu'>                
                        <li>
                            Estado del Sistema
                        </li>
                        <li>
                            Blog
                        </li>
                        <li>
                            Desarrolladores
                        </li>
                        <li>
                            Académico
                        </li>
                        <li>
                            Empleo
                        </li>
                        <li>
                            Contacto
                        </li>
                    </ul>
                </Col>
                {/* TODO: Fix to float right */}
                <Col xs={24} md={4}>
                    <ul className='footer-menu footer-media-buttons'>                
                        <li>
                            <LinkedinOutlined />
                        </li>
                        <li>
                            <FacebookOutlined />
                        </li>
                        <li>
                            <TwitterOutlined />
                        </li>
                    </ul>
                </Col>

            </Row>
            <Row className='footer-global'>
                <Col>LEGAL</Col>
                <Col>Rights</Col>
            </Row>
        </Footer>
  );
};