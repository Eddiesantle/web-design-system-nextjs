'use client'
import { ContactJobSchema, ContactJobSchemaType } from "@/validators/contact-job";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ContainerDefault } from "../layout/ContainerDefault";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/Form";
import { Input } from "../ui/Input";
import { InputFile } from "../ui/InputFile";
import { CheckboxWithLabel } from "../ui/AheckboxWithLabel";
import Link from "next/link";
import { Button } from "../ui/Button";
import Image from "next/image";

const FormWorkWithUs = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);



    const form = useForm<ContactJobSchemaType>({
        resolver: zodResolver(ContactJobSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            file: undefined,
            acceptTerms: false,
        },
    });

    async function onSubmit(data: ContactJobSchemaType) {

        console.log('form', form.setError)

        setIsSubmitting(true);
        const { name, email, phone, file } = data

        const toastId = toast.loading('Enviando sua mensagem...');

        try {

            // Crie um FormData para enviar dados como multipart/form-data
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('phone', phone);

            // Adiciona o arquivo ao FormData se ele existir
            if (file) {
                formData.append('file', file, file.name);
            }

            const res = await fetch('api/contact-job', {
                method: 'POST',
                body: formData
            })

            if (res.ok) {
                toast.success('Mensagem enviada com sucesso!', { id: toastId });
                form.reset();  // Limpar formulário após o envio
            } else {
                throw new Error('Falha no envio');
            }
        } catch (error) {
            toast.error(`Falha ao enviar a mensagem: ${error}`, { id: toastId });
        } finally {
            setIsSubmitting(false);
        }
    }


    return (
        <ContainerDefault>
            <div className="grid grid-cols-1 lg:grid-cols-8 justify-center pt-14 pb-20">
                <div className={`grid col-start-2 col-span-6 md:grid-cols-2 w-full mx-auto gap-8`}>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-3xl">Dados <span className="text-secondary font-semibold font-[family-name:var(--font-geist-sans)]">Pessoais</span></h2>
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
                                                    <FormLabel required>Nome completo:</FormLabel>
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
                                                    <FormLabel required>E-mail:</FormLabel>
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
                                                    <FormLabel required>Número de telefone:</FormLabel>
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
                                            name="file"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Faça o upload do seu Curriculo:</FormLabel>
                                                    <FormControl>
                                                        <InputFile
                                                            accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                                                            onChange={(e) => {
                                                                const file = e.target.files?.[0];
                                                                field.onChange(file); // Passa o arquivo para o formulário
                                                            }}
                                                        />
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
                                        <FormField
                                            control={form.control}
                                            name="acceptTerms"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <div className="flex items-center">
                                                        <FormControl>
                                                            <CheckboxWithLabel checked={field.value}
                                                                onChange={(checked) => field.onChange(checked)} />
                                                        </FormControl>
                                                        <FormLabel required>Eu aceito os <Link href="/termos-de-uso" target="_blank" className="underline text-blue-600">termos e condições</Link></FormLabel>
                                                    </div>

                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div>
                                        <Button
                                            type="submit"
                                            variant={"default"}
                                            disabled={isSubmitting}  // Desabilita o botão enquanto o formulário é enviado
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

export default FormWorkWithUs