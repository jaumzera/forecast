import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    console.log('data', cityData);
    const { name } = cityData.city;
    const temps = cityData.list.map(weather => weather.main.temp);
    const press = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lat, lon } = cityData.city.coord;

    console.log(`lat: ${lat}, long: ${lon}`);

    return (
      <tr key={name}>
        <td>
          <GoogleMap name={name} lat={lat} lng={lon} />
        </td>
        <td>
          <Chart data={temps} color="green" units="K" />
        </td>
        <td>
          <Chart data={press} color="blue" units="hPa" />
        </td>
        <td>
          <Chart data={humidities} color="red" units="%  " />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ weather }) => ({ weather });

export default connect(mapStateToProps)(WeatherList);
