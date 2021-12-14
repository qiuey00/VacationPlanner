import React from 'react';
import { MapContainer, TileLayer, Marker, Tooltip, useMap } from 'react-leaflet'
import LocationCard from "./locationCard";
const locationData = require('../locations.json');


function Refresh(props) {
  const map=useMap()
  map.fitBounds(props.mapBounds, {padding:[50,50]})
  return null
}

function Schedule(props) {

  const filterLocation = (locationData.filter(
    elem => props.locationList.indexOf(elem.location)>=0
  ));

  let mapBounds = []
  filterLocation.map(elm=>mapBounds.push([elm.latitude,elm.longitude]))

  const renderNone =  (<div> <h2 className="pageTitle">No places added yet, please add some locations</h2></div>)

  const scheduleMap = (
      
      <MapContainer className="mapContainer" scrollWheelZoom={false} tap={false}>
      <Refresh mapBounds={mapBounds}/>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      { filterLocation.map((elem) =>
      <Marker key={elem.location.concat(elem.cityState)} position={[elem.latitude, elem.longitude]}>
        <Tooltip key={elem.location.concat(elem.cityState)} >
          {elem.location}
        </Tooltip>
      </Marker>
      )}
    </MapContainer>
  )

  const renderSchedule =  (
    <div> 
        <h1 className="pageName">Schedule </h1>
        {scheduleMap}
        {filterLocation.map((elem) =>
            <div key={elem.location} > 
              <LocationCard
                key={elem.location.concat(elem.cityState)}
                location={elem.location}
                cityState={elem.cityState}
                blurb={elem.blurb}
                image={elem.image}
                updatePage={props.updatePage}
                updateLocation={props.updateLocation}
                locationList={props.locationList}
                updateList={props.updateList}
              />
            </div>
          )}
      </div>
  )

  return (
      props.locationList.length === 0 ? renderNone : renderSchedule
  )}

export default Schedule;