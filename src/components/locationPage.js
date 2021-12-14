import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
const locationData = require('../locations.json');

function LocationPage(props) {

  const filterLocation = (locationData.filter(
    elem => elem.location === props.locationTracker
  ))[0];

  const addLocation = (e) => {
    e.preventDefault()
    props.updateList((oldList) => [...oldList,filterLocation.location])
  }

  const removeLocation = (e) => {
    e.preventDefault()
    const newList = props.locationList.filter((location)=>location!==filterLocation.location)
    props.updateList(newList)
  }

  const isAdded = props.locationList.indexOf(filterLocation.location) > -1

  return (
    <div> 
      <img className="locationImage" src={filterLocation['image']['url']}alt='cute shibe' />
      <h1 className="pageTitle" > {filterLocation.location}</h1>

        <h2>{filterLocation.cityState}</h2>

        {
          isAdded ? <button className="removeLocation" onClick={removeLocation}>Remove</button> : <button className="addLocation" onClick={addLocation}>ADD</button>
        }

        <h3> {filterLocation.blurb} </h3>
        <p className="description">{filterLocation.description}</p>
          
        <MapContainer className="locationMap" center={[filterLocation.latitude, filterLocation.longitude]} zoom={15} scrollWheelZoom={false} tap={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          <Marker position={[filterLocation.latitude, filterLocation.longitude]}>
            <Popup>
              {filterLocation.location}
            </Popup>
          </Marker>
          </MapContainer>
    </div>
  );
}

export default LocationPage;