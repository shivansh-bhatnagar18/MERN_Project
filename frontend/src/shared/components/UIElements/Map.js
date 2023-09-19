import React from 'react';
// import { useRef, useEffect } from 'react';

const Map = props => {

    // const mapRef = useRef();
    // const {center, zoom} = props;

    // useEffect(() => {

    //     const map = new window.google.maps.Map(mapRef.current, {
    //         center : center,
    //         zoom : zoom
    //     })
    
    //     new window.google.maps.Marker({position : center, map : map})
    // } , [center , zoom])

    // useEffect(() => {
    //     new window.ol.Map({
    //       target: mapRef.current.id,
    //       layers: [
    //         new window.ol.layer.Tile({
    //           source: new window.ol.source.OSM()
    //         })
    //       ],
    //       view: new window.ol.View({
    //         center: window.ol.proj.fromLonLat([center.lng, center.lat]),
    //         zoom: zoom
    //       })
    //     });
    //   }, [center, zoom]);

    // put in return attributes ref = {mapRef}
    return <div className = {`map ${props.className}`} style = {props.style}></div>
}
 
export default Map;