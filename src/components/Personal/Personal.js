import React from 'react';

import {initPersonalAction, modifyPersonalAction, addNewPersonalAction, removePersonalAction} from "../../store/action/personal.actions";
import {connect} from "react-redux";
import Spinner from "react-bootstrap/Spinner";

import './Personal.scss';
import {addNewCarAction, initCarsAction, modifyCarAction, removeCarAction} from "../../store/action/cars.actions";

const Personal = (props) => {
    return (
        props.isLoading ?  <Spinner animation="border"/> :
        <div className="w-100">
           <h5>This is Personal Component</h5>
        </div>
    )
};

const mapStateToProps = ({personal, isLoading}) => ({personal});
const mapDispatchToProps = () => dispatch => ({
    load: (queryParams) => dispatch(initCarsAction(queryParams)),
    remove: (id) => dispatch(removeCarAction(id)),
    modify: (person) => dispatch(modifyCarAction(person)),
    add: (person) => dispatch(addNewCarAction(person))
});

export default connect(mapStateToProps, mapDispatchToProps)(Personal);