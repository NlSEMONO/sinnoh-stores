'use client';
import {useEffect, useState, useMemo, useContext} from 'react';
import { ScreenContext } from './ScreenContext';
import { GoogleMap, useLoadScript, Marker, MarkerF } from "@react-google-maps/api";
import Label from './Label';
import { EVERYTHING_ELSE, PHONES, SMALL_LAPTOP, TABLETS, CITY_TO_BADGE } from '../constants';
import { promises } from 'dns';

const Map = (props: {locations: Object}) => {
  let screenSetting = 2;
  const SendSize = useContext(ScreenContext);

  useEffect(() => {
    const setSetting = () => {
      const body = document.body;
      const html = document.documentElement;
      let width = Math.min(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
      let height = Math.min(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
      if (width < 521) {
        screenSetting = PHONES;
      }
      else if (width < 721) {
        screenSetting = TABLETS;
      }
      else if (width < 1080) {
        screenSetting = SMALL_LAPTOP;
      } else {
        screenSetting = EVERYTHING_ELSE;
      }
    };
    setSetting();
    window.addEventListener('resize', () => {setSetting()});
  }, []);
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string // "AIzaSyAEYKvYmAURX7zN847wkQHmidfvHw61By8"
  })

  return isLoaded ? (
    <div className='py-8'>
      <ScreenContext.Provider value={screenSetting}> 
        <WrappedMap locations_info={props.locations}/>
      </ScreenContext.Provider>
    </div>
  ) : <div> Loading... </div>
}

function WrappedMap(props: {locations_info: any}) {

  const screenSetting = useContext(ScreenContext);
  const hokkaidoCoords = {
    lat: 43.7203, 
    lng: 142.8635
  }
  let zoom: number = 7;
  let classes: string = '';
  if (screenSetting === PHONES) {
    zoom = 6;
    classes = 'w-auto h-72 mx-12';
  } else if (screenSetting === TABLETS) {
    zoom = 6.75;
    classes = 'w-auto h-96 mx-16';
  } else if (screenSetting === SMALL_LAPTOP) {
    zoom = 7;
    classes = 'w-auto h-[28rem] mx-24';
  }
  else {
    zoom = 7.55;
    classes = 'w-auto h-[40rem] mx-48';
  }
  setInterval(() => console.log(props.locations_info), 1000)
  setInterval(() => console.log(CITY_TO_BADGE), 1000)
  const markers = [];
  if (props.locations_info !== null) {
    let counter = 1;
    for (let key in props.locations_info) {
      if (props.locations_info.hasOwnProperty(key)) {
        let data = props.locations_info[key]
        let center = {lat: parseFloat(data['lat']), lng: parseFloat(data['lng'])}
        markers.push(<MarkerF key={counter} position={center}> </MarkerF>);
        counter++;
      }
    }
  }

  return (
    <GoogleMap zoom={zoom} center={hokkaidoCoords} mapContainerClassName={classes}>
      {markers}
    </GoogleMap>);
}

export default Map;