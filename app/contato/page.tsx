'use client'
import { ContainerDefault } from "@/components/layout/containerDefault";
import { Layout } from "@/components/layout/layout";
import Image from "next/image";
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { useMemo } from "react";

const InfoContact = () => {
    return (
        <ContainerDefault>
            <div className="grid grid-cols-1 lg:grid-cols-8 justify-center pt-14 pb-20">
                <div className={`grid col-start-2 col-span-6 md:grid-cols-2 w-full mx-auto gap-8`}>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-3xl">Entre em <span className="text-secondary font-semibold font-[family-name:var(--font-frank-ruhl-libre)]">contato</span></h2>
                        <p className="text-sm w-[80%]">Nossa equipe desenvolve estratégias eficazes para otimizar sua carga tributária, seja você empresário</p>
                    </div>
                    <div className="flex md:flex-row justify-center space-y-6 md:space-y-0 flex-col gap-2 text-sm">

                        <div className="flex md:flex-col flex-row gap-3">
                            <div className="w-[55px] ">
                                <Image src='/img/home/icon-position-map.webp' alt="contato" width={55} height={55} />
                            </div>
                            <div className="w-[155px] md:w-full gap-2 ">
                                <div className="text-lg">Endereço</div>
                                <div>RONDÔNIA</div>
                                <div>Av. Mal. Rondon, 2679 - Princesa Isabel, Cacoal Cep: 78976-065</div>
                            </div>
                        </div>
                        <div className="flex  md:flex-col flex-row gap-3">
                            <div className="w-[55px]">
                                <Image src='/img/home/icon-contact.webp' alt="contato" width={55} height={55} />
                            </div>
                            <div className="w-[155px] md:w-full gap-2">
                                <div className="text-lg">Contato</div>
                                <div>(69) 9.9981-0662</div>
                                <div>Ivandro@brandanicontabilidade.com.br</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </ContainerDefault>)
}

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
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
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

const Contato = () => {

    return (
        <Layout>
            <InfoContact />
            <GoogleMapContact />
            {/* <FormContact /> */}
        </Layout>

    )
}
export default Contato;