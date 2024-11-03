"use client";

import { ContactSchema, ContactSchemaType } from "@/validators/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ContainerDefault } from "../layout/containerDefault";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { Input } from "./input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { Textarea } from "./textarea";
import Link from "next/link";
import { Button } from "./button";
import { CheckboxWithLabel } from "./checkboxWithLabel";

import { useState } from "react";
import { siteMailReciever } from "@/config/config.env";
import { sendMail } from "@/app/lib/send-mail";


const FormContact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);


    const form = useForm<ContactSchemaType>({
        resolver: zodResolver(ContactSchema),
        defaultValues: {
            email: "",
            name: "",
            contactPerson: "",
            phone: "",
            message: "",
            acceptTerms: false,
        },
    });

    async function onSubmit(data: ContactSchemaType) {
        setIsSubmitting(true);
        const { name, email, phone, contactPerson, message } = data

        const mailContentsTemplate = `
        <table cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;width:100%;max-width:620px;color:#333;font-family:Arial, sans-serif;">
        <tbody>
            <tr>
                <td style="padding:0;margin:0;font-size:1px;height:1px;">&nbsp;</td>
            </tr>
            <tr>
                <td style="padding:0;margin:0;">
                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td style="padding:15px;background-color:#0D4259;text-align:center;font-size:24px;font-weight:bold;color:#fff;">
                                    Novo Contato - Solicitação de Informações
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table style="width:100%;padding:20px;background-color:#ffffff;">
                        <tbody>
                            <tr>
                                <td style="font-size:16px;color:#333;line-height:1.6;">
                                    <p style="margin:0 0 15px;">
                                        Olá, Equipe Brandani,
                                    </p>
                                    <p style="margin:0 0 20px;">
                                        Recebemos uma nova mensagem de contato com solicitação de informações. Seguem os detalhes do solicitante:
                                    </p>
                                    <p style="margin:10px 0;">
                                        <strong>Nome:</strong> ${name}
                                    </p>
                                    <p style="margin:10px 0;">
                                        <strong>Email:</strong> <a href="mailto:${email}" style="color:#0066cc;text-decoration:none;">${email}</a>
                                    </p>
                                    <p style="margin:10px 0;">
                                        <strong>Telefone:</strong> ${phone}
                                    </p>
                                    <p style="margin:10px 0;">
                                        <strong>Setor de Interesse:</strong> ${contactPerson}
                                    </p>
                                    <p style="margin:10px 0;">
                                        <strong>Mensagem:</strong><br />
                                        <span style="color:#555;">${message}</span>
                                    </p>
                                    <p style="margin:20px 0 0;color:#777;font-size:14px;">
                                        Caso necessitem de mais informações, não hesitem em entrar em contato com o solicitante.
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table style="width:100%;padding:15px;text-align:center;background-color:#f8f8f8;">
                        <tbody>
                            <tr>
                                <td style="font-size:12px;color:#aaa;">
                                    Esta mensagem foi enviada através do formulário de contato do site.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td style="padding:0;margin:0;font-size:1px;height:1px;">&nbsp;</td>
            </tr>
        </tbody>
    </table>
        `;

        const toastId = toast.loading('Enviando sua mensagem...');

        try {
            const response = await sendMail({
                email: "no-reply@upwins.com.br",
                sendTo: siteMailReciever,
                subject: 'Contato Website - Brandani Contabilidade',
                text: "Contato Website - Brandani Contabilidade",
                html: mailContentsTemplate,
            });

            if (response?.messageId) {
                toast.success('Mensagem enviada com sucesso!', { id: toastId });
                form.reset();  // Limpar formulário após o envio
            } else {
                throw new Error('Falha no envio');
            }
        } catch (error) {
            toast.error(`Falha ao enviar a mensagem. ${error}`, { id: toastId });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <ContainerDefault>
            <div className="grid grid-cols-1 lg:grid-cols-8 justify-center pt-14 pb-20">
                <div className={`grid col-start-2 col-span-6 md:grid-cols-2 w-full mx-auto gap-8`}>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-3xl">Envie sua <span className="text-secondary font-semibold font-[family-name:var(--font-geist-sans)]">mensagem</span></h2>
                        <p className="text-sm w-[80%]">Nossa equipe desenvolve estratégias eficazes para otimizar sua carga tributária, seja você empresário</p>
                    </div>
                    <div className="flex flex-row gap-2 text-sm w-full">

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full grid gap-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    <div>

                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel required>Nome completo</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Digite seu nome..." {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div>

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

                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel required>E-mail</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Digite seu email..." {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div>

                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel required>Número de telefone</FormLabel>
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
                                <div className="flex flex-col md:flex-row gap-6 text-center md:justify-between">
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
                                            variant={"secondary"}
                                            disabled={isSubmitting}  // Desabilita o botão enquanto o formulário é enviado
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

export default FormContact