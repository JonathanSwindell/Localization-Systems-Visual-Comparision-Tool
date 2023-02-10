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
          <section className={classes.container}>
            <h3>Map 1: Dr. Mukherjee FM Based Localization System</h3>
            <Map
              path={[
                { lat: 34.719, lng: -86.666 },
                { lat: 21.291, lng: -157.821 },
                { lat: -18.142, lng: 178.431 },
                { lat: -27.467, lng: 153.027 },
              ]}
              color={"blue"}
              id="Map1"
            />
          </section>
  
          <section className={classes.container}>
            <h3>Map 2: SoO Localization System</h3>
            <Map
              path={[
                { lat: 34.719, lng: -86.666 },
                { lat: 21.291, lng: -157.821 },
                { lat: -18.142, lng: 178.431 },
                { lat: -27.467, lng: 153.027 },
              ]}
              color={"red"}
              id="Map2"
            />
          </section>
  
          <section className={classes.container}>
            <h3>Map 3: SoO Localization with Dead Reckoning applied</h3>
            <Map
              path={[
                { lat: 34.719, lng: -86.666 },
                { lat: 21.291, lng: -157.821 },
                { lat: -18.142, lng: 178.431 },
                { lat: -27.467, lng: 153.027 },
              ]}
              color={"green"}
              id="Map3"
            />
          </section>
        </Card>

        <p></p>

        <Card>
        <section className={classes.container}>
            <h3>Map 4: All Vectors Combined</h3>
            <Map
              path={[
                { lat: 34.719, lng: -86.666 },
                { lat: 21.291, lng: -157.821 },
                { lat: -18.142, lng: 178.431 },
                { lat: -27.467, lng: 153.027 },
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