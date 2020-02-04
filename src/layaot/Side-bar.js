import React from 'react';

import Col from 'react-bootstrap/Col';
import NavList from '../components/Nav-list';


import './layaot.scss';

const SideBar = () => {
  return (
    <div>
        <Col className="side-nav-container">
        <NavList/>
        </Col>
    </div>
  )
}

export default SideBar;