import React from 'react';
import {useHistory} from "react-router";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'

import './layout.scss';

const Header = ({func, loggedIn}) => {
  const history = useHistory();

  const toggle = () => {
    func(!loggedIn);
    JSON.stringify(localStorage.setItem('user', !loggedIn));
    if (loggedIn) {
      history.push('/')
    } else {
      history.push('/login')
    }
  };
  console.log(history)
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
