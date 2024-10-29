import { z } from "zod";

export const contactSchema = z.object({
    email: z
        .string()
        .email({ message: "Insira um endereço de e-mail válido." }),
    name: z
        .string()
        .min(3, { message: "Seu nome deve ter pelo menos 3 caracteres." })
        .max(255, { message: "Seu nome não deve exceder 255 caracteres." }),
    contactPerson: z
        .string()
        .min(3, { message: "O nome do contato deve ter pelo menos 3 caracteres." })
        .optional(),
    phone: z
        .string()
        .regex(/^\+?\d{10,15}$/, { message: "Insira um número de telefone válido com o código do país." }),
    message: z
        .string()
        .max(1000, { message: "A mensagem não deve exceder 1000 caracteres." }),
    acceptTerms: z
        .boolean({ invalid_type_error: "É necessário aceitar os termos para continuar." })
        .refine(val => val === true, { message: "Você deve aceitar os termos para enviar o formulário." }),
});
