import React, {useEffect} from 'react';
import {Card, Button, CardTitle, CardFooter, CardBody} from 'reactstrap';

import './Cars.scss';
import {addNewCarAction, initCarsAction, modifyCarAction, removeCarAction} from "../../store/action/cars.actions";
import {connect} from "react-redux";
import Spinner from "react-bootstrap/Spinner";


const Cars = (props) => {
  console.log(props);
  const queryParams = {
    limit: 10,
    page: 1,
  };
  useEffect(() => props.load(queryParams), [props.load]);
  // initPersonalAction
  const loadMore = () => {
    queryParams.page++;
    props.load(queryParams);
  };

  return (
    props.isLoading ?  <Spinner animation="border"/> :
      <div className="w-100 cars-container">
        {props.cars.map((car, index) => {
            return (
              <Card className="card" key={index}>
                <CardBody>
                  <CardTitle>{car.brand} {car.model}</CardTitle>
                  <Button>
                    Details
                  </Button>
                </CardBody>
                <CardFooter>{car.year} {car.price} $</CardFooter>
              </Card>
            )
          }
        )}
        <div className="load-more">
          <Button color="success" onClick={() => loadMore()}>
            Load more ...
          </Button>
        </div>
      </div>
  );
};

const mapStateToProps = ({cars, isLoading}) => ({cars});
const mapDispatchToProps = () => dispatch => ({
  load: (queryParams) => dispatch(initCarsAction(queryParams)),
  remove: (id) => dispatch(removeCarAction(id)),
  modify: (car) => dispatch(modifyCarAction(car)),
  add: (car) => dispatch(addNewCarAction(car))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cars);
