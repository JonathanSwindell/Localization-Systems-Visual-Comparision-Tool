
import ToolSummary from "./ToolSummary";
import Map from "./Map";
import { Fragment, useState } from "react";
import Card from "../UI/Card";
import classes from './MapContainer.module.css';
import ToggleSlider from '../ToggleSlider/ToggleSlider.js';
import { useWebSocket } from '../WebSocket/socket.js'

const MainPage = () => {
    const {path, downloadCSV} = useWebSocket();
    const [isToggled, setIsToggled] = useState(false);

    function handleToggleChange() {
        setIsToggled(!isToggled);
    }

    const mapsToShow = isToggled ? ['Map-GPS', 'Map-IMU', 'Map-FM'] : ['Map-GPS-CSV', 'Map-IMU-CSV', 'Map-FM-CSV'];

    return (
        <Fragment>
            <ToolSummary />
            <p></p>
            <Card>
                <section>
                    <h2> Do you want real-time or CSV data? </h2>
                    <ToggleSlider onChange={handleToggleChange} />
                </section>
            </Card>

            <p></p>
            <Card className={classes.cardContainer}>
                <section className={classes.container}>
                <h2>All Paths</h2>
                <Map
                    path={[
                        { lat: 34.719, lng: -86.666 },
                        { lat: 34.651, lng: -86.821 },
                        { lat: 34.651, lng: -86.858 },
                    ]}
                    color = {'blue'}
                    id = "tempMap"
                    />
                </section>
            </Card>

            <p></p>
            <Card className={classes.cardContainer}>
                {mapsToShow.map((mapId) => (
                    <section className={classes.mapContainer}>
                    <h2>{mapId === 'Map0' ? 'Map 1' : mapId === 'Map1' ? 'Map 2' : mapId === 'Map2' ? 'Map 3' : mapId}</h2>
                         <Map
                            path={[
                                { lat: 34.719, lng: -86.666 },
                                { lat: 34.651, lng: -86.821 },
                                { lat: 34.651, lng: -86.858 },
                            ]}
                            color={"blue"}
                            id={mapId}
                        />
                        </section>
                ))}
            </Card>
        </Fragment>
    )
};

export default MainPage;
