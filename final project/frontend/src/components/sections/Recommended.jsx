import React, { useEffect, useState } from 'react';
import history from '../../utils/history';
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import fetchDestinations from '../../actions/destinations';

function DestinationList() {
  const dispatch = useDispatch();
  const destinations= useSelector(store=>store.destination.destinations);
  const isLoading=useSelector((store)=>store.destination.isLoading)

  dispatch({type:''})
    useEffect(() => {
      dispatch(fetchDestinations);
    }, [dispatch]);
  
    // console.log(history);

    return (
      <div id="recommend"> 
      <div className='title'>
        <h1> Recommended Destinations</h1>
        </div>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <div className='destinations'>
          {destinations.map((destination) => (
            <div key={destination.id} className='destination'>
              <img
                src={destination.images[0]}
                alt={destination.destinationName}
              />
              <a href={`/destinations/${destination.id}`}>
              <h3>{destination.destinationName}</h3>
              </a>
              <p>{destination.description?.slice(0, 100)}...<Link to={`/destinations/${destination.id}`}>See more</Link></p>
              <h4>Rs.{destination.price}</h4>
            </div>
          ))}
          </div>
        )}
      </div>
    );
  }

  export default DestinationList;
