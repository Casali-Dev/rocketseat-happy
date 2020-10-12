import React from 'react';
import { Link } from 'react-router-dom'

import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

import mapMarkerImg from '../images/map-marker.svg'

import { FiPlus } from 'react-icons/fi';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Porto Alegre</strong>
                    <span>Rio Grande do Sul</span>
                </footer>
            </aside>

            <Map
                center={[-30.0709206,-51.1673671]}
                zoom={12}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url={`http://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap