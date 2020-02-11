import React from 'react';
import {Link} from "react-router-dom";
import * as icons from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ListGroup from 'react-bootstrap/ListGroup';

import {ROUTER} from '../../constants/constants';

import './Nav-list.scss';


const NavList = () => {
  return (
    <ListGroup defaultActiveKey="cars">
      <Link to={`/${ROUTER.cars}`}>
        <ListGroup.Item action eventKey="cars">
          <FontAwesomeIcon icon={icons.faBezierCurve} size="lg"/>
          Cars
        </ListGroup.Item>
      </Link>
      <Link to={`/${ROUTER.personal}`}>
        <ListGroup.Item action eventKey="personal">
          <FontAwesomeIcon icon={icons.faFileArchive} size="lg"/>
          Personal
        </ListGroup.Item>
      </Link>
      <Link to={`/${ROUTER.customers}`}>
        <ListGroup.Item action eventKey="customers">
          <FontAwesomeIcon icon={icons.faAddressCard} size="lg"/>
          Customers
        </ListGroup.Item>
      </Link>
      <ListGroup.Item action eventKey="link_4">
        <FontAwesomeIcon icon={icons.faBahai} size="lg"/>Link 4
      </ListGroup.Item>
      <ListGroup.Item action eventKey="link_5">
        <FontAwesomeIcon icon={icons.faCloudDownloadAlt} size="lg"/>Link 5
      </ListGroup.Item>
    </ListGroup>
  )
}

export default NavList;










