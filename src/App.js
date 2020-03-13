// TODO: Use Redux

import React from 'react';
import {Layout} from 'antd';
import Header from './components/header';
// import Breadcrumb from './components/breadcrumb';
import Container from './components/container';
import Footer from './components/footer';
import './App.css';

const {Content} = Layout;
const languajes = ["Español", "English"];

function App() {
  return (
    <Layout className="layout">
      <Header/>
      <Content style={{ width: '85%', margin: '0px auto'}}>
        {/* <Breadcrumb /> */}
        <Container/>
      </Content>
      <Footer 
        languajes={languajes}
        currentLanguaje="Español"
      />
  </Layout>
  );
}

export default App;
