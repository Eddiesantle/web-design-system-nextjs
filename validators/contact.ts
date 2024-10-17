import { z } from "zod";

export const contactSchema = z.object({
    email: z.string().email(),
    name: z
        .string()
        .min(3, { message: "Your name should not be that short!" })
        .max(255),
    studentId: z
        .string()
        .min(7)
        .max(7)
        .refine((val) => !isNaN(val as unknown as number), {
            message: "Student ID should be a number",
        }),
    contactPerson: z.string(),
    phone: z.string(),
    message: z.string(),
    acceptTerms: z.string(),
});
