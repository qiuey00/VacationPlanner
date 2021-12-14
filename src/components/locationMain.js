import React from 'react';
import LocationCard from "./locationCard";

function LocationMain(props) {
  return (
    <div> 
      <h1 className="pageTitle">Explore</h1>
      <input type="text" placeholder="Search Location"></input>

        { props.data.map((elem) =>
          <div className="cardHolder" key={elem.location}> 
            <LocationCard
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
  );
}

export default LocationMain;