import { z } from "zod";

// Define o tamanho máximo do arquivo em bytes (exemplo: 5 MB = 5 * 1024 * 1024)
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_FILE_EXTENSIONS = ["pdf", "doc", "docx", "png", "jpg", "jpeg"];

const fileValidation = z.object({
    file: z
        .any()
        .refine((file) => file instanceof File, { message: "É necessário enviar um arquivo." })
        .refine(
            (file) => file && file.size <= MAX_FILE_SIZE,
            `O arquivo deve ter no máximo ${MAX_FILE_SIZE / (1024 * 1024)} MB.`
        )
        .refine(
            (file: File) => {
                console.log('file', file)
                if (!file) return false;
                const fileExtension = file.name.split(".").pop()?.toLowerCase();
                return fileExtension && ALLOWED_FILE_EXTENSIONS.includes(fileExtension);
            },
            `O arquivo deve ser ${ALLOWED_FILE_EXTENSIONS.join(", ").toUpperCase()}.`
        ),
});

export const ContactJobSchema = z.object({
    email: z.string().email({ message: "Insira um endereço de e-mail válido." }),
    name: z
        .string()
        .min(3, { message: "Seu nome deve ter pelo menos 3 caracteres." })
        .max(255, { message: "Seu nome não deve exceder 255 caracteres." }),
    phone: z.string()
        .regex(/^\+?\d{10,15}$/, { message: "Insira um número de telefone válido com o código do país." }),
    acceptTerms: z.boolean({ invalid_type_error: "É necessário aceitar os termos para continuar." })
        .refine(val => val === true, { message: "Você deve aceitar os termos para enviar o formulário." }),
}).and(fileValidation);

export type ContactJobSchemaType = z.infer<typeof ContactJobSchema>;