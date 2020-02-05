import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBezierCurve, faFileArchive, faAddressCard, faBahai, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'
import './Nav-list.scss';


const NavList = () => {
  return (
    <ListGroup defaultActiveKey="link_1">
      <ListGroup.Item action eventKey="link_1">
          <FontAwesomeIcon icon={faBezierCurve} size="lg"/>  Link 1
      </ListGroup.Item>
      <ListGroup.Item action eventKey="link_2">
         <FontAwesomeIcon icon={faFileArchive} size="lg" />Link 2
      </ListGroup.Item>
      <ListGroup.Item action eventKey="link_3">
          <FontAwesomeIcon icon={faAddressCard} size="lg" />Link 3
      </ListGroup.Item>
        <ListGroup.Item action eventKey="link_4">
            <FontAwesomeIcon icon={faBahai} size="lg" />Link 4
        </ListGroup.Item>
        <ListGroup.Item action eventKey="link_5">
            <FontAwesomeIcon icon={faCloudDownloadAlt} size="lg" />Link 5
        </ListGroup.Item>
    </ListGroup>
  )
}

export default NavList;










