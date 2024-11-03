
import { siteMailReciever } from "@/config/config.env";

import { File } from "buffer";
import { NextResponse } from "next/server";
import { sendMail } from "../../lib/send-mail";

interface MailData {
    name: string | null;
    email: string | null;
    phone: string | null;
    file: File | null;
}

export async function POST(req: Request) {
    try {
        const data = await req.formData();

        // Extrair dados do formulário
        const mailData: MailData = {
            name: data.get("name") as string | null,
            email: data.get("email") as string | null,
            phone: data.get("phone") as string | null,
            file: data.get("file") as unknown as File | null,
        };

        // Validar campos do formulário
        const validationError = validateMailData(mailData);
        if (validationError) {
            return NextResponse.json({ message: validationError }, { status: 400 });
        }

        // Criar Buffer do arquivo
        const fileBuffer = await createFileBuffer(mailData.file!);

        // Gerar conteúdo do e-mail em HTML
        const mailContent = generateMailContent(mailData);

        // Enviar e-mail
        await sendMail({
            email: "no-reply@upwins.com.br",
            sendTo: siteMailReciever,
            subject: "Trabalhe Conosco Website - Brandani Contabilidade",
            text: "Trabalhe Conosco Website - Brandani Contabilidade",
            html: mailContent,
            attachments: [
                {
                    filename: mailData.file!.name,
                    content: fileBuffer,
                },
            ],
        });

        return NextResponse.json({ message: "Email enviado com sucesso" });
    } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        return NextResponse.json({ message: "Erro ao enviar e-mail" }, { status: 500 });
    }
}

// Função para validar os dados do formulário
function validateMailData({ name, email, phone, file }: MailData): string | null {
    if (!name || !email || !phone) {
        return "Campos obrigatórios estão ausentes.";
    }
    if (!file || typeof file !== "object" || !file.name || !file.type) {
        return "Arquivo não encontrado ou inválido.";
    }
    return null;
}

// Função para criar o buffer do arquivo
async function createFileBuffer(file: File): Promise<Buffer> {
    const arrayBuffer = await file.arrayBuffer();
    return Buffer.from(arrayBuffer);
}

// Função para gerar o conteúdo HTML do e-mail
function generateMailContent({ name, email, phone }: MailData): string {
    return `
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
                                    Nova Candidatura Recebida - Trabalhe Conosco
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
                                        Recebemos uma nova manifestação de interesse em trabalhar conosco. Seguem os detalhes do candidato:
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
                                    <p style="margin:20px 0 0;color:#777;font-size:14px;">
                                        Caso necessitem de mais informações, não hesitem em entrar em contato com o candidato.
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
}
