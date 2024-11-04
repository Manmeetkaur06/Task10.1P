import React from 'react';
import { Menu, Input, Button } from 'semantic-ui-react';
import './Header.css';

const Header = () => (
  <Menu stackable>
    {/* Title for the website */}
    <Menu.Item header>DEV@Deakin</Menu.Item>
    
    {/* Search bar in the center, takes up all available space */}
    <Menu.Item style={{ flex: 1 }}>
      <Input fluid icon="search" placeholder="Search..." />
    </Menu.Item>
    
    {/* Right-aligned menu with Post and Login buttons */}
    <Menu.Menu position="right">
      <Menu.Item>
        <Button primary>Post</Button> {/* Post button */}
      </Menu.Item>
      <Menu.Item>
        <Button>Login</Button> {/* Login button */}
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Header;
