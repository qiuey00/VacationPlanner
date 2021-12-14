import React, {useState} from 'react';
import LocationMain from './locationMain.js';
import LocationPage from './locationPage.js';
import Schedule from './schedule.js';
import Header from './Header.js';

function App(props) {
  const data = props.data; 
  const [locationList, updateList] = useState([]);
  const [pageTracker, updatePage] = useState("explore");
  const [locationTracker, updateLocation] = useState("forest");

  function pagePicker(){
    switch(pageTracker){
      case "locationPage":
        return <LocationPage locationList={locationList} updateList={updateList} locationTracker={locationTracker}/>
      case "schedule":
        return <Schedule key="schedule" locationList={locationList} updateList={updateList} updatePage={updatePage} updateLocation={updateLocation}/>
      default:
        return <LocationMain data={data} locationList={locationList} updatePage={updatePage} updateLocation={updateLocation} updateList={updateList}/>
    }
  }

  return (
  <div className='App'>
    <Header updatePage={updatePage} pageTracker={pageTracker}/>
    {pagePicker()}

  </div>
  );
}

export default App;
