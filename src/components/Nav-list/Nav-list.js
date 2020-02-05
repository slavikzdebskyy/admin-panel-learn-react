import React from 'react';
import { Link } from "react-router-dom";
import * as icons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListGroup from 'react-bootstrap/ListGroup';

import { ROUTER } from '../../constants/constants';

import './Nav-list.scss';


const NavList = () => {
  return (
    <ListGroup defaultActiveKey="cars">
      <ListGroup.Item action eventKey="cars">
        <Link to={`/${ROUTER.main}/${ROUTER.cars}`}>
          <FontAwesomeIcon icon={icons.faBezierCurve} size="lg"/>
          Cars
        </Link>          
      </ListGroup.Item>
      <ListGroup.Item action eventKey="personal">
        <Link to={`/${ROUTER.main}/${ROUTER.personal}`}>
         <FontAwesomeIcon icon={icons.faFileArchive} size="lg" />
         Personal          
        </Link>
      </ListGroup.Item>
      <ListGroup.Item action eventKey="customers">
      <Link to={`/${ROUTER.main}/${ROUTER.customers}`}>
        <FontAwesomeIcon icon={icons.faAddressCard} size="lg" />
         Customers          
      </Link>
          
      </ListGroup.Item>
        <ListGroup.Item action eventKey="link_4">
            <FontAwesomeIcon icon={icons.faBahai} size="lg" />Link 4
        </ListGroup.Item>
        <ListGroup.Item action eventKey="link_5">
            <FontAwesomeIcon icon={icons.faCloudDownloadAlt} size="lg" />Link 5
        </ListGroup.Item>
    </ListGroup>
  )
}

export default NavList;










