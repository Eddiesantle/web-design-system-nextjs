import { z } from "zod";

export const contactJobSchema = z.object({
    email: z.string().email(),
    name: z
        .string()
        .min(3, { message: "Your name should not be that short!" })
        .max(255),
    contactPerson: z.string(),
    phone: z.string(),
    upload: z.string(),
    acceptTerms: z.string(),
});
