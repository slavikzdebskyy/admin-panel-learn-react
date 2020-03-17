import React, {useEffect} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import './layout.scss';
import {initAdminAction} from "../store/action/admin.actions";
import {connect} from "react-redux";

const Header = ({ init}) => {
  useEffect(() => init(), [init]);
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
