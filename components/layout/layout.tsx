// components/Layout.tsx
import React from 'react';
import Navbar from '../ui/navbar';
import Footer from '../ui/footer';

const NavbarRange = () => {
    return (<div className='bg-[#EEF2F6] text-black'>
        <div className='container mx-auto text-center py-2 px-12 flex flex-col md:flex-row md:justify-between text-sm gap-2'>
            <div className='flex flex-col md:flex-row gap-0 md:gap-3 mx-auto md:mx-0'>
                <div>(69) 9.9981-0662</div>
                <div>contato@brandani.com.br</div>
            </div>
            <div>FAZER LOGIN</div>
        </div>
    </div>)
}

const socialLinks = [{
    href: "Instagram",
    label: "Instagram"
}, {
    href: "Instagram",
    label: "LinkedIn"
}, {
    href: "Instagram",
    label: "Facebook"
}]

const contactInfo = {
    phone: "(XX) XXXX-XXXX",
    whatsapp: "(XX) XXXX-XXXX",
    email: "contato@brandani.com.br"
}

const section = [{
    title: "A EMPRESA",
    links: [{ label: "A Empresa", href: "string" }, { label: "Contabilidade", href: "string" }, { label: "Segurança", href: "string" }]
}, {
    title: "CONTABILIDADE",
    links: [{ label: "A Empresa", href: "string" }, { label: "Contabilidade", href: "string" }, { label: "Segurança", href: "string" }]
}, {
    title: "SEGURANÇA",
    links: [{ label: "A Empresa", href: "string" }, { label: "Contabilidade", href: "string" }, { label: "Segurança", href: "string" }]
},]


const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <NavbarRange />
                <Navbar />
            </header>

            <main className="flex-1">
                {children}
            </main>


            <Footer copyright='© 2024 Brandani Contabilidade. Todos os direitos reservados.' companyDescription='Fundada em 1983, empresa atua no ramo de contabilidade empresarial (Lucro Real, Lucro Presumido e Simples nacional), contabilidade rural pessoa física e jurídica, MEI, planejamento tributário e planejamento sucessório.' address='Endereço: Rua Exemplo, 123, Cidade, Estado' socialLinks={socialLinks} contactInfo={contactInfo} logoSrc='/img/em-construcao/logo-branca.png' sections={section} />
        </div>
    );
};

export { Layout };
