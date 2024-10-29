import { api } from "./api";

type ContactBody = {
    name: string
    contactPerson: string
    email: string
    phone: string
    message: string
    acceptTerms: boolean
};

export const contact = async (data: ContactBody) => {

    console.log("contact -> data", data)
    const request = await api.post("/email/gov/contact-form", data);

    const response = await request.data;

    return response;
};