import ToolSummary from "./ToolSummary";
import Map from "./Map";
import { Fragment } from "react/cjs/react.production.min";
import Card from "../UI/Card";
import classes from './MapContainer.module.css';

const MainPage = () => {
    return (
      <Fragment>
        <ToolSummary />
  
        <p></p>
        <Card className={classes.cardContainer}>
	    <section className={classes.mapContainer}>
	    <h2>Map 1: Dr. Mukherjee FM Based Localization System</h2>
            <Map
              path={[
                { lat: 33.719, lng: -86.666 },
                { lat: 20.291, lng: -157.821 },
                { lat: -19.142, lng: 178.431 },
                { lat: -28.467, lng: 153.027 },
              ]}
              color={"blue"}
              id="Map0"
            />
	    </section> 
    
	    <section className={classes.mapContainer}>
	    <h2>Map 2: SoO Localization System</h2>
            <Map
              path={[
                { lat: 33.719, lng: -86.666 },
                { lat: 20.291, lng: -157.821 },
                { lat: -19.142, lng: 178.431 },
                { lat: -28.467, lng: 153.027 },
              ]}
              color={"red"}
              id="Map1"
            />
	    </section> 
         
	    <section className ={classes.mapContainer}> 
	    <h2>Map 3: SoO Localization with Dead Reckoning applied</h2>
            <Map
              path={[
                { lat: 33.719, lng: -86.666 },
                { lat: 20.291, lng: -157.821 },
                { lat: -19.142, lng: 178.431 },
                { lat: -28.467, lng: 153.027 },
              ]}
              color={"green"}
              id="Map2"
            />
	   </section>
        </Card>
	

        <p></p>
        <Card className={classes.cardContainer}>
        <section className={classes.container}>
            <h2>Map 4: All Vectors Combined</h2>
            <Map
              path={[
                { lat: 33.719, lng: -86.666 },
                { lat: 20.291, lng: -157.821 },
                { lat: -19.142, lng: 178.431 },
                { lat: -28.467, lng: 153.027 },
              ]}
              color={"green"}
              id="Map4"
            />
          </section>
        </Card>
      </Fragment>
    );
  };
  
export default MainPage;
