import ToolSummary from "./ToolSummary";
import Map from "./Map";
import { Fragment } from "react/cjs/react.production.min";
import Card from "../UI/Card";
import classes from './MapContainer.module.css';
import { useWebSocket }  from '../WebSocket/socket.js';;

const MainPage = () => {
    const tempPath = useWebSocket();

    return (
      <Fragment>
        <ToolSummary />
	<p></p> 
	<Card className={classes.cardContainer}>
        <section className={classes.container}>
            <h2>Temporary Testing Map</h2>
            <Map
              path={tempPath}
              color={"blue"}
              id="tempMap"
            />
          </section>
        </Card> 
	<p></p>
        <Card className={classes.cardContainer}>
	    <section className={classes.mapContainer}>
	    <h2>Map 1: GPS (Control)</h2>
            <Map
              path={[
                { lat: 34.719, lng: -86.666 },
                { lat: 34.651, lng: -86.821 },
                { lat: 34.651, lng: -86.858 },
              ]}
              color={"blue"}
              id="Map0"
            />
	    </section> 
    
	    <section className={classes.mapContainer}>
	    <h2>Map 2: FM Localization System</h2>
            <Map
              path={[
                { lat: 34.719, lng: -86.666 },
                { lat: 34.661, lng: -86.821 },
                { lat: 34.681, lng: -86.851 },
                { lat: 34.651, lng: -86.858 },
              ]}
              color={"red"}
              id="Map1"
            />
	    </section> 
         
	    <section className ={classes.mapContainer}> 
	    <h2>Map 3: FM, SoO, and Dead Reckoning</h2>
            <Map
              path={[
                { lat: 34.719, lng: -86.666 },
                { lat: 34.691, lng: -86.821 },
                { lat: 34.681, lng: -86.851 },
       	        { lat: 34.651, lng: -86.858 },
              ]}
              color={"green"}
              id="Map2"
            />
	   </section>
        </Card>
	

        <p></p>
        <Card className={classes.cardContainer}>
        <section className={classes.container}>
            <h2>Map 4: Trajectory</h2>
            <Map
              path={[
                { lat: 34.719, lng: -86.666 },
                { lat: 34.651, lng: -86.821 },
                { lat: 34.651, lng: -86.858 },
              ]}
              color={"blue"}
              id="Map4"
            />
          </section>
        </Card>
      </Fragment>
    )
  };
  
export default MainPage;
