/* eslint-disable no-undef */
import React, { Component } from 'react';
const google = window.google;

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lng
      }
    });
  }

  render() {
    return <div ref="map">{this.props.name}</div>;
  }
}

export default GoogleMap;
