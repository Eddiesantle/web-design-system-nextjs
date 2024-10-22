'use client'
import { ContainerDefault } from "@/components/layout/containerDefault";
import { Layout } from "@/components/layout/layout";
import Image from "next/image";

import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { contactSchema } from "@/validators/contact";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";


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
                                <Image src='/img/home/icon-position-map.png' alt="contato" width={55} height={55} />
                            </div>
                            <div className="w-[155px] md:w-full gap-2 ">
                                <div className="text-lg">Endereço</div>
                                <div>RONDÔNIA</div>
                                <div>Av. Mal. Rondon, 2679 - Princesa Isabel, Cacoal Cep: 78976-065</div>
                            </div>
                        </div>
                        <div className="flex  md:flex-col flex-row gap-3">
                            <div className="w-[55px]">
                                <Image src='/img/home/icon-contact.png' alt="contato" width={55} height={55} />
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

type Input = z.infer<typeof contactSchema>;

const FormContact = () => {


    const form = useForm<Input>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            contactPerson: "",
            email: "",
            phone: "",
            message: "",
            acceptTerms: "",
        },
    });

    function onSubmit(data: Input) {

        alert(JSON.stringify(data, null, 4));
        console.log(data);
    }


    return (
        <ContainerDefault>
            <div className="grid grid-cols-1 lg:grid-cols-8 justify-center pt-14 pb-20">
                <div className={`grid col-start-2 col-span-6 md:grid-cols-2 w-full mx-auto gap-8`}>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-3xl">Envie sua <span className="text-secondary font-semibold font-[family-name:var(--font-frank-ruhl-libre)]">mensagem</span></h2>
                        <p className="text-sm w-[80%]">Nossa equipe desenvolve estratégias eficazes para otimizar sua carga tributária, seja você empresário</p>
                    </div>
                    <div className="flex flex-row gap-2 text-sm w-full">

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full grid gap-4">
                                <div className="grid grid-cols-2 gap-2">
                                    <div>
                                        {/* name */}
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Nome completo</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Digite seu nome..." {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div>
                                        {/* contactPerson */}
                                        <FormField
                                            control={form.control}
                                            name="contactPerson"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Com quem você quer falar</FormLabel>
                                                    <Select
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                    >
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Selecione o setor" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            {["Administração", "Contabilidade", "Financeiro"].map((item) => {
                                                                return (
                                                                    <SelectItem value={item} key={item}>
                                                                        {item}
                                                                    </SelectItem>
                                                                );
                                                            })}
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div>
                                        {/* email */}
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Email</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Digite seu email..." {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div>
                                        {/* Telefone */}
                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Número de telefone</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Digite seu celular..." {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>


                                <div>
                                    {/* message */}
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Sua mensagem</FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder="Descreva sua mensagem..." {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            name="acceptTerms"
                                            id="acceptTerms"
                                            className="h-4 w-4 border-gray-300 rounded"
                                            required
                                        />
                                        <label htmlFor="acceptTerms" className="ml-2 block text-sm">
                                            Eu aceito os <a href="#" className="text-blue-600 underline">termos e condições</a>
                                        </label>
                                    </div>
                                    <div>
                                        <Button
                                            type="submit"
                                            variant={"secondary"}
                                        >
                                            Preciso de um contador
                                        </Button>

                                    </div>

                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </ContainerDefault>
    );
};



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
            <FormContact />
        </Layout>

    )
}
export default Contato;