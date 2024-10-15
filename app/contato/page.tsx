'use client'
import { ContainerDefault } from "@/components/layout/containerDefault";
import { Layout } from "@/components/layout/layout";
import Image from "next/image";

import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { useMemo } from "react";


const InfoContact = () => {
    return (
        <ContainerDefault>
            <div className="grid grid-cols-1 lg:grid-cols-8 justify-center pt-14 pb-20">
                <div className={`grid col-start-2 col-span-6 md:grid-cols-2 w-full mx-auto gap-8`}>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-3xl">Entre em <span className="text-secondary">contato</span></h2>
                        <p className="text-sm w-[80%]">Nossa equipe desenvolve estratégias eficazes para otimizar sua carga tributária, seja você empresário</p>
                    </div>
                    <div className="flex flex-row gap-2 text-sm">

                        <div className="flex flex-col gap-1">
                            <Image src='/img/home/icon-position-map.png' alt="contato" width={55} height={55} />
                            <div>Endereço</div>
                            <div>RONDÔNIA</div>
                            <div>Av. Mal. Rondon, 2679 - Princesa Isabel, Cacoal Cep: 78976-065</div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Image src='/img/home/icon-contact.png' alt="contato" width={55} height={55} />
                            <div>Contato</div>
                            <div>(69) 9.9981-0662</div>
                            <div>Ivandro@brandanicontabilidade.com.br</div>
                        </div>

                    </div>
                </div>
            </div>

        </ContainerDefault>)
}

const GoogleMapContact = () => {

    const mapCenter = useMemo(
        () => ({ lat: 27.672932021393862, lng: 85.31184012689732 }),
        []
    );

    const mapOptions = useMemo<google.maps.MapOptions>(
        () => ({
            disableDefaultUI: true,
            clickableIcons: true,
            scrollwheel: false,
        }),
        []
    );

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string
    });

    if (!isLoaded) {
        return <p>Loading...</p>;
    }

    return (
        <ContainerDefault>
            <div className=" border justify-center">
                <div className="w-full mx-auto">
                    <div className=" ">
                        <p>This is Sidebar...</p>
                    </div>
                    <GoogleMap
                        options={mapOptions}
                        zoom={14}
                        center={mapCenter}
                        mapTypeId={google.maps.MapTypeId.ROADMAP}
                        mapContainerStyle={{ width: '800px', height: '461px' }}
                        onLoad={() => console.log('Map Component Loaded...')}
                    />
                </div>
            </div>
        </ContainerDefault>

    );
}

const Contato = () => {

    return (
        <Layout>
            <InfoContact />
            <GoogleMapContact />
        </Layout>

    )
}
export default Contato;