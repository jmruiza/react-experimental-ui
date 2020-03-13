import React from 'react';
import {Row, Col, Layout, Menu, Dropdown, Button} from 'antd';
import { LinkedinOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';

const {Footer} = Layout;
const style = { 
    backgroundColor: "#1b1b1b", 
    minHeight: 200, 
    padding: 32, 
    color: '#bbb'
};
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
            style={style}
            >
            {/* TODO: Make it responsive */}
            <Row className='footer-main' justify="start">
                <Col xs={24} md={2} style={{textAlign: 'left', marginTop: 3}}>
                    <Dropdown overlay={menu} placement="topCenter">
                        <Button style={{...styleMenu, border: 'none'}}>{props.currentLanguaje}</Button>
                    </Dropdown>
                </Col>
                <Col xs={24} md={15} style={{textAlign: 'left', marginTop: 8}}>
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
                <Col xs={24} md={4} style={{textAlign: 'right'}}>
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
                <Col xs={24} md={12} style={{textAlign: 'left'}}>
                    <ul className='footer-menu'>                
                        <li>
                            LEGAL
                        </li>
                        <li>
                            PRIVACIDAD
                        </li>
                        <li>
                            DESINSTALAR
                        </li>
                    </ul>
                </Col>
                <Col xs={24} md={12} style={{textAlign: 'right'}}>
                    © 2003-2020 EMERAL DIGITAL S.C. SOFTWARE<br/>
                    TODOS LOS DERECHOS RESERVADOS
                </Col>
            </Row>
        </Footer>
  );
};