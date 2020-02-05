import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'

import './layout.scss';

const Header = () => {
    return (
        <div className="header">
            <Container
                fluid={true}
            >
                <Row  className="header-container">
                    <h2>Admin Panel</h2>
                    <Button variant="info">Info</Button>
                </Row>
            </Container>
        </div>
    )
}

export default Header;