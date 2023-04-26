import React from 'react';
import { Menu } from 'semantic-ui-react';
import About from './About'
import './Header.css'

const Header = () => {
  return (
    <Menu className='header'>
      <Menu.Item className='title' header>React search image</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item className='link' name='home' href='.' />
        <Menu.Item className='link' name='about' href={<About />} />
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
