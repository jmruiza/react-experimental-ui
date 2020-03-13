import React from 'react';
import {Layout, Menu} from 'antd';

const {Item} = Menu;
const {Header} = Layout;

export default () => {
    return (
        <div className='navigation'>
            <Header 
                style={{
                    backgroundColor: 'white', 
                    width: '85%', 
                    margin: '20px auto',                 
                }}
            >
                <div className="logo"/>
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px', border: 'none' }}
                >
                    <Item key="1">Productos</Item>
                    <Item key="2">Soluciones</Item>
                    <Item key="3">Aprendizaje</Item>
                    <Item key="4">Comunidad</Item>
                    <Item key="5">Soporte</Item>
                    <Item key="6">Información</Item>
                </Menu>
            </Header>
        </div>
    );
};