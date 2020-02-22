import React, {useEffect} from 'react';
import {Card, Button, CardTitle, CardFooter, CardBody} from 'reactstrap';

import './Cars.scss';
import {addNewCarAction, initCarsAction, modifyCarAction, removeCarAction} from "../../store/action/cars.actions";
import {connect} from "react-redux";
import Spinner from "react-bootstrap/Spinner";


const Cars = (props) => {
  useEffect(() => props.init(), [props.init]);

  const add = () => {
    const car = {
      model: 'Some Model',
      brand: 'My Brand',
      price: 120000
    };
    props.add(car);
  };

  return (
    props.isLoading ?  <Spinner animation="border"/> :
      <div className="w-100 cars-container">
        {props.cars.slice(0, 15).map((car, index) => {
            return (
              <Card className="card" key={index}>
                <CardBody>
                  <CardTitle>{car.brand} {car.model}</CardTitle>
                  <Button onClick={() => add()}>
                    Details
                  </Button>
                </CardBody>
                <CardFooter>{car.year} {car.price} $</CardFooter>
              </Card>
            )
          }
        )}
      </div>
  );
};

const mapStateToProps = ({cars, isLoading}) => ({cars});
const mapDispatchToProps = () => dispatch => ({
  init: () => dispatch(initCarsAction()),
  remove: (id) => dispatch(removeCarAction(id)),
  modify: (car) => dispatch(modifyCarAction(car)),
  add: (car) => dispatch(addNewCarAction(car))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cars);
