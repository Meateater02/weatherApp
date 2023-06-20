import React from "react";
import "./styles.css";
// import { Card } from "semantic-ui-react";
import moment from "moment";

// const CardExampleCard = ({ weatherData }) => (
//   <Card>
//     <Card.Content>
//       <Card.Header className="header">{weatherData.name}</Card.Header>
//       {/* <div className="main"> */}
//       <p className="temp"> Temperature: {weatherData.main.temp} &deg;C</p>
//       <p>
//         Sunrise:{" "}
//         {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-IN")}
//       </p>
//       <p>
//         Sunset:{" "}
//         {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-IN")}
//       </p>
//       <p>Description: {weatherData.weather[0].description}</p>
//       <p>Humidity: {weatherData.main.humidity} %</p>
//       <p className="day">Day: {moment().format("dddd")}</p>
//       <p>Date: {moment().format("LL")}</p>
//       {/* </div> */}
//     </Card.Content>
//   </Card>
// );

const CardExampleCard = ({ weatherData }) => (
  <div className="main">
    <p className="header">{weatherData.name}</p>
    <div>
      <p className="day">Day: {moment().format("dddd")}</p>
    </div>

    <div>
      <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
    </div>
  </div>
);

export default CardExampleCard;
