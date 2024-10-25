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
import Link from "next/link";
import { contactJobSchema } from "@/validators/contact-job";


const InfoContact = () => {
    return (
        <div className="bg-[#0D4259] text-white py-16 ">
            <ContainerDefault>
                <div className="grid grid-cols-1 lg:grid-cols-8 justify-center">
                    <div className={`grid col-start-2 col-span-6 md:grid-cols-2 w-full mx-auto gap-8`}>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-3xl">Entre em <span className="text-secondary font-semibold font-[family-name:var(--font-frank-ruhl-libre)]">contato</span></h2>
                            <p className="text-sm w-[80%]">Fique disponível para todas as nossas funções/posições</p>
                        </div>

                    </div>
                </div>

            </ContainerDefault>
        </div>

    )
}

const InfoContactTermos = () => {
    return (
        <div className="bg-[#EEEEEE] py-6 ">
            <ContainerDefault>
                <div className="grid grid-cols-1 lg:grid-cols-8 justify-center">
                    <div className={`grid col-start-2 col-span-6 md:grid-cols-1 w-full mx-auto gap-8`}>
                        <div className="flex flex-col gap-3">
                            <h2 className="text-sm">Por favor, clique aqui para ver nossos <Link href="/termos-de-uso" className=" underline-offset-1 underline ">Termos e condições</Link>.</h2>
                            <p className="text-sm w-[80%]">Ao enviar seu CV você aceita conceder à Page Personnel seus dados pessoais e profissionais. Seus dados serão processados de acordo com a nossa  <Link href="/politica-de-privacidade" className="underline-offset-1 underline">Política de Privacidade</Link> .</p>
                        </div>
                    </div>
                </div>

            </ContainerDefault>
        </div>

    )
}


type Input = z.infer<typeof contactJobSchema>;

const FormContact = () => {


    const form = useForm<Input>({
        resolver: zodResolver(contactJobSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            upload: "",
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
                        <h2 className="text-3xl">Dados <span className="text-secondary font-semibold font-[family-name:var(--font-frank-ruhl-libre)]">Pessoais</span></h2>
                        <p className="text-sm w-[80%]">Por favor, complete o formulário abaixo e anexe um CV.</p>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full grid gap-4">
                                <div className="grid  gap-2">
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
                                        {/* email */}
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>E-mail</FormLabel>
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
                                    <div>
                                        {/* Upload */}
                                        <FormField
                                            control={form.control}
                                            name="upload"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Faça o upload do seu Curriculo</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Digite seu celular..." {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <div className="text-sm">Selecione o arquivo do CV (TXT, PDF ou Word DOC)</div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4">
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
                                            variant={"default"}
                                        >
                                            Enviar Curriculo
                                        </Button>

                                    </div>

                                </div>
                            </form>
                        </Form>
                    </div>
                    <div className="flex flex-row gap-2 text-sm w-full hidden md:block">

                        <Image src="/img/home/b-grande-transparente.webp" alt="b grandão" width={531} height={492} />


                    </div>
                </div>
            </div>
        </ContainerDefault>
    );
};


const TrabalheConosco = () => {

    return (
        <Layout>
            <InfoContact />
            <FormContact />
            <InfoContactTermos />
        </Layout>

    )
}
export default TrabalheConosco;