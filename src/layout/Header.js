import React from 'react';
import {useHistory} from "react-router";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'

import './layout.scss';

const Header = ({func}) => {
  const history = useHistory();

  const toggle = () => {
    func();
    const log = JSON.parse(localStorage.getItem('user'));
    if(log) {
      history.push('/');
    } else {
      history.replace('/login');
    }
  }

    return (
        <div className="header">
            <Container
                fluid={true}
            >
                <Row  className="header-container">
                    <h2>Admin Panel</h2>
                    <Button
                      onClick={()=> toggle()}
                      variant="info">
                      Login toggle
                    </Button>
                </Row>
            </Container>
        </div>
    )
}

export default Header;
