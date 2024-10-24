// components/Layout.tsx
import React from 'react';
import Navbar from '../ui/navbar';
import Footer from '../ui/footer';
import Image from 'next/image';

const NavbarRange = () => {
    return (
        <div className='bg-[#EEF2F6] text-black hidden md:block'>
            <div className='container text-xs mx-auto text-center py-2 px-12 flex flex-col md:flex-row md:justify-between text-sm gap-2'>
                <div className='flex flex-col  md:flex-row gap-0 md:gap-3 mx-auto md:mx-0'>
                    <div className='flex gap-2'> <Image src="/img/home/icon-whatsapp.svg" alt='icon whatsapp' height={15} width={15} /> (69) 3441-5425</div>
                    <div className='flex gap-2'> <Image src="/img/home/icon-email.svg" alt='icon email' height={15} width={15} /> administração@brandanicontabilidade.com.br</div>
                </div>
                <div className='flex gap-2'>
                    <Image src="/img/home/icon-clock-history.svg" alt='icon clock history' height={15} width={15} />
                    Seg - Sex 8:00 às 12:00 | 13:00 às 18:00</div>
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
    phone: "(69) 9.9981-0662",
    whatsapp: "(69) 3441-5425",
    email: "Administração@brandanicontabilidade.com.br"
}

const section = [{
    title: "A EMPRESA",
    links: [{ label: "Sobre nós", href: "/sobre" }, { label: "Depoimento de clientes", href: "/home#depoimentos" }, { label: "Links Utéis", href: "/links-uteis" }, { label: "Política de privacidade", href: "politica-de-privacidade" }, { label: "Termos de uso", href: "termos-de-uso" },]
}, {
    title: "CONTABILIDADE",
    links: [{ label: "Contabiliidade Rural", href: "/servicos/contabilidade#rural" }, { label: "Contabilidade Empresarial", href: "/servicos/contabilidade#empresarial" }, { label: "Planejamento Tributário", href: "/servicos/planejamento#tributario" }, { label: "Planejamento Sucessório", href: "/servicos/planejamento#sucessorio" }]
}, {
    title: "PORTAL",
    links: [{ label: "Portal do Cliente", href: "https://onvio.com.br/clientcenter/pt/auth?r=%2Fhome" }, { label: "Área do Contador", href: "https://contador.nibo.com.br/User/LogOn" }, { label: "Área da Empresa", href: "https://passport.nibo.com.br/account/login" },]
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


            <Footer copyright='© Todos os direitos reservados. | 04.915.922/0001-80 | ESCRITORIO CONTABIL TUPA LTDA' companyDescription='Fundada em 1983, empresa atua no ramo de contabilidade empresarial Lucro Real, Lucro Presumido e Simples nacional), contabilidade rural pessoa física e jurídica, MEI, planejamento tributário, planejamento sucessório. Seu quadro de colaboradores é composto por contadores e especialistas na área contábil.' address='RONDÔNIA: Av. Mal. Rondon, 2679 - Princesa Isabel, Cacoal - RO, Cep:78976-065' socialLinks={socialLinks} contactInfo={contactInfo} logoSrc='/img/home/logo-branca.webp' sections={section} />
        </div>
    );
};

export { Layout };
