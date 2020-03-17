import React, {useEffect}  from 'react';
import {Card, CardTitle, CardBody, CardImg} from 'reactstrap';

import './Personal.scss';
import {initPersonalAction, modifyPersonAction, addNewPersonAction, removePersonAction} from "../../store/action/personal.actions";

import {connect} from "react-redux";
import Spinner from "react-bootstrap/Spinner";

const Personal = (props) => {
    const queryParams = {
        limit: 10,
        page: 1,
    };
    useEffect(() => props.load(queryParams), []);
    // initPersonalAction
    // const loadMore = () => {
    //     queryParams.page++;
    //     props.load(queryParams);
    // };
    return (
        props.isLoading ?  <Spinner animation="border"/> :
        <div className="w-100">

            {props.personal.map((person, index) => {
                return (
                  <Card className="card" key={index}>
                      <CardBody>
                          <CardImg top width="100%" src={person.photo} />
                          <CardTitle>{person.first_name} {person.last_name}</CardTitle>
                      </CardBody>
                  </Card>
                )
            }
            )}
        </div>
    )
};

const mapStateToProps = ({personal, isLoading}) => ({personal});
const mapDispatchToProps = () => dispatch => ({
    load: (queryParams) => dispatch(initPersonalAction(queryParams)),
    remove: (id) => dispatch(removePersonAction(id)),
    modify: (person) => dispatch(modifyPersonAction(person)),
    add: (person) => dispatch(addNewPersonAction(person))
});

export default connect(mapStateToProps, mapDispatchToProps)(Personal);
