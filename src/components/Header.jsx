// src/components/Header.js
import React from 'react';
import { Menu, Input, Button } from 'semantic-ui-react';
import './Header.css';





const Header = () => (
  <Menu stackable>
    <Menu.Item header>DEV@Deakin</Menu.Item>
    
    {/* The search bar will expand and take up all available space */}
    <Menu.Item style={{ flex: 1 }}>
      <Input fluid icon="search" placeholder="Search..." />
    </Menu.Item>
    
    {/* Post and Login buttons on the right */}
    <Menu.Menu position="right">
      <Menu.Item>
        <Button primary>Post</Button>
      </Menu.Item>
      <Menu.Item>
        <Button>Login</Button>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Header;
