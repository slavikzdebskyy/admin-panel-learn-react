import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';

import './Car-detail.scss';
import {initCarAction} from "../../store/action/car-detail.actions";
import {CreateApiService} from "../../api/api-service";
import {API_TYPES} from "../../constants/constants";
import {removeLoaderAction, setLoaderAction} from "../../store/action/loader.action";

const carApi = new CreateApiService(API_TYPES.cars);

const CarDetail = (props) => {
  const { id } = useParams();

  async function loadCar() {
    props.setLoader();
    try {
      const car = await carApi.getByID(id);
      props.init(car);
    }
    catch (error) {
      props.removeLoader();
      console.error(error);
    }
    props.removeLoader();
  }

  useEffect(() => { loadCar()} , [loadCar]);

return (
  <div>
    CarDetail works !!!!
    <h2> {props.carDetail.brand} </h2>
  </div>
)
};

const mapStateToProps = ({carDetail}) => ({carDetail});
const mapDispatchToProps = () => dispatch => ({
  init: (car) => dispatch(initCarAction(car)),
  setLoader: () => dispatch(setLoaderAction()),
  removeLoader: () => dispatch(removeLoaderAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CarDetail);
