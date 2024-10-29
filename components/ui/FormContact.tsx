import { contact } from "@/app/api/contact";
import { contactSchema } from "@/validators/contact";
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
import { z } from "zod";

type InputContactSchema = z.infer<typeof contactSchema>;

const FormContact = () => {


    const form = useForm<InputContactSchema>({
        resolver: zodResolver(contactSchema)
    });

    async function onSubmit(data: InputContactSchema) {

        alert('Foi')

        await toast.promise(
            contact({
                name: data.name ?? "",
                contactPerson: data.contactPerson ?? "",
                email: data.email ?? "",
                phone: data.phone ?? "",
                message: data.message ?? "",
                acceptTerms: data.acceptTerms ?? "",  // ou false, se `acceptTerms` for boolean
            }),
            {
                loading: "Enviando...",
                success: () => "Enviado com sucesso!",
                error: () => "Ocorreu um erro ao enviar o formulário",
            }
        );
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
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
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
                                <div className="flex flex-col md:flex-row gap-3 justify-between">
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            name="acceptTerms"
                                            id="acceptTerms"
                                            className="h-4 w-4 border-gray-300 rounded"
                                            required
                                        />
                                        <label htmlFor="acceptTerms" className="ml-2 block text-sm">
                                            Eu aceito os <Link href="/termos-de-uso" className="text-blue-600 underline">termos e condições</Link>
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

export default FormContact