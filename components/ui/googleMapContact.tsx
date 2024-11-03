"use client";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { ContainerDefault } from "../layout/containerDefault";
import { googleMapsApiKey } from "@/config/config.env";
import { useMemo } from "react";

const GoogleMapContact = () => {


    const mapCenter = useMemo(
        () => ({ lat: -11.437819271631763, lng: -61.44394655091605 }),
        []
    );

    const mapCenterMarket = useMemo(
        () => ({ lat: -11.437819271631763, lng: -61.44394655091605 }),
        []
    );

    const mapOptions = useMemo<google.maps.MapOptions>(
        () => ({


        }),
        []
    );

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: googleMapsApiKey as string,
        version: 'quarterly'
    });

    if (!isLoaded) {
        return <p>Loading...</p>;
    }

    return (
        <ContainerDefault>
            <div className="justify-center">
                <div className="w-full mx-auto">
                    <GoogleMap
                        options={mapOptions}
                        zoom={15}
                        center={mapCenter}
                        mapTypeId={google.maps.MapTypeId.ROADMAP}
                        mapContainerStyle={{ width: '100%', height: '461px' }}
                        onLoad={() => console.log('Map Component Loaded...')}
                    >
                        {/* Adicionando o marcador */}
                        <Marker position={mapCenterMarket} />
                    </GoogleMap>
                </div>
            </div>
        </ContainerDefault>

    );
}

export default GoogleMapContact;