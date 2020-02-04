import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup'

const NavList = () => {
  return (
    <ListGroup defaultActiveKey="link_1">
      <ListGroup.Item action eventKey="link_1">
        Link 1
      </ListGroup.Item>
      <ListGroup.Item action eventKey="link_2">
        Link 2
      </ListGroup.Item>
      <ListGroup.Item action eventKey="link_3">
        This one is a button
      </ListGroup.Item>
    </ListGroup>
  )
}

export default NavList;










