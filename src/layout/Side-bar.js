import React from 'react';

import Col from 'react-bootstrap/Col';
import NavList from '../components/Nav-list/Nav-list';


import './layout.scss';
import Row from "react-bootstrap/Row";

const SideBar = () => {
    return (
        <Col lg="2" className="side-nav-container">
            <Row>
                <NavList/>
            </Row>
        </Col>
    )
}

export default SideBar;