import React, {useEffect} from 'react';
import {useHistory} from "react-router";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'

import './layout.scss';
import {initAdminAction} from "../store/action/admin.actions";
import {connect} from "react-redux";

const Header = ({ admin , init}) => {
  const history = useHistory();
  useEffect(() => init(), [init]);

  // const toggle = () => {
  //   func();
  //   const log = JSON.parse(localStorage.getItem('user'));
  //   if(log) {
  //     history.push('/');
  //   } else {
  //     history.replace('/login');
  //   }
  // }

    return (
        <div className="header">
            <Container
                fluid={true}
            >
                <Row  className="header-container">
                    <h2>Admin Panel</h2>

                </Row>
            </Container>
        </div>
    )
}

const mapStateToProps = ({ admin }) => ({ admin });
const mapDispatchToProps = () => dispatch => ({
  init: () => dispatch(initAdminAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
