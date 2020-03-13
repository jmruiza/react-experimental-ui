import React, { useState } from 'react';
import { Affix, Anchor } from 'antd';
const { Link } = Anchor;

export default () => {
  const [top] = useState(10);
    return (      
        <Affix offsetTop={top}>
          <div type="primary">
            <Anchor>
                <Link href="#components-anchor-demo-basic" title="Basic demo" />
                <Link href="#components-anchor-demo-static" title="Static demo" />
                <Link href="#components-anchor-demo-basic" title="Basic demo with Target" target="_blank" />
                <Link href="#API" title="API">
                <Link href="#Anchor-Props" title="Anchor Props" />
                <Link href="#Link-Props" title="Link Props" />
                </Link>
            </Anchor>
          </div>
        </Affix>
        );
    };