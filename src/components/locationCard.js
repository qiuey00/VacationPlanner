import React from 'react';

function LocationCard(props) {

  const viewLocation = (e) => {
    e.preventDefault()
    props.updatePage("locationPage")
    props.updateLocation(props.location)
  }

  const addLocation = (e) => {
    e.preventDefault()
    props.updateList((oldList) => [...oldList,props.location])
  }

  const removeLocation = (e) => {
    e.preventDefault()
    const newList = props.locationList.filter((location)=>location!==props.location)
    props.updateList(newList)
  }

  const isAdded = props.locationList.indexOf(props.location) > -1

  return (
    <div className="locationCard" > 
      <div className="imageContainer">
        <img className="imageCard" src={props['image']['url']} alt={props['image']['alt']}/>
      </div>  
      <div className="descriptionContainer" key={props.location} >
        <h2> {props.location} </h2>
        <h4> {props.cityState} </h4>
        <p> {props.blurb} </p>
        <a href="/" onClick={viewLocation}>read more</a>
      </div>
      <div className="buttonContainer">
        {
          isAdded ? <button className="remove" onClick={removeLocation}>Remove</button> : <button className="add" onClick={addLocation}>ADD</button>
        }
      </div>
    </div> 
  );
}

export default LocationCard;
