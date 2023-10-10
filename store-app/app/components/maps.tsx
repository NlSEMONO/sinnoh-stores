'use client';
import {useEffect, useState, useMemo, useContext} from 'react';
import { ScreenContext } from './ScreenContext';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  const [screenSetting, useScreenSetting] = useState(2);
  const SendSize = useContext(ScreenContext);
  useEffect(() => {
    const setSetting = () => {
      // const body = document.body;
      // const html = document.documentElement;
      // let width = Math.min(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
      // let height = Math.min(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
      if (window.screen.width < 521) {
        useScreenSetting(0);
      }
      else if (window.screen.width < 721) {
        useScreenSetting(1);
      }
      else if (window.screen.width < 1080) {
        useScreenSetting(2);
      } else {
        useScreenSetting(3);
      }
    };
    setSetting();
    window.addEventListener('resize', () => {setSetting()});
  }, []);
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string // "AIzaSyAEYKvYmAURX7zN847wkQHmidfvHw61By8"
  })
  
  return isLoaded ? (
    <>
      <ScreenContext.Provider value={screenSetting}>
        <WrappedMap />
      </ScreenContext.Provider>
    </>
  ) : <div> Loading... </div>
}

function WrappedMap() {
  const screenSetting = useContext(ScreenContext);
  const hokkaidoCoords = {
    lat: 43.7203, 
    lng: 142.8635
  }
  let zoom = 7;
  let classes = '';
  if (screenSetting === 0) {
    zoom = 6;
    classes = 'w-auto h-72 mx-12';
  } else if (screenSetting === 1) {
    zoom = 6.75;
    classes = 'w-auto h-96 mx-16';
  } else if (screenSetting === 2 ) {
    zoom = 7;
    classes = 'w-auto h-[28rem] mx-24';
  }
  else {
    zoom = 7.55;
    classes = 'w-auto h-[40rem] mx-48';
  }
  return <GoogleMap zoom={zoom} center={hokkaidoCoords} mapContainerClassName={classes}/>
}

export default Map;