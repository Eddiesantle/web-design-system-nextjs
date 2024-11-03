// components/Layout.tsx
import React from 'react';
import Navbar from '../ui/navbar';
import Footer from '../ui/footer';
import Image from 'next/image';
import { Toaster } from 'react-hot-toast';

const NavbarRange = () => {
    return (
        <div className='bg-[#EAEAEA] text-black hidden md:block'>
            <div className='container text-xs mx-auto text-center py-2 px-12 flex flex-col md:flex-row md:justify-between text-sm gap-2'>
                <div className='flex flex-col  md:flex-row gap-0 md:gap-3 mx-auto md:mx-0'>
                    <div className='flex gap-2'> <Image src="/img/home/icon-whatsapp.svg" alt='icon whatsapp' height={15} width={15} /> (99) 9999-9999</div>
                    <div className='flex gap-2'> <Image src="/img/home/icon-email.svg" alt='icon email' height={15} width={15} />endereco@dominio.com.br</div>
                </div>
                <div className='flex gap-2'>
                    <Image src="/img/home/icon-clock-history.svg" alt='icon clock history' height={15} width={15} />
                    Seg - Sex 8:00 às 12:00 | 13:30 às 17:30</div>
            </div>
        </div>)
}

const socialLinks = [{
    href: "https://www.instagram.com/nutrimagdasimoni/",
    srcIcon: "/img/home/instagram.svg"
}, {
    href: "https://www.instagram.com/nutrimagdasimoni/",
    srcIcon: "/img/home/facebook.svg"
}]

const contactInfo = {

    whatsapp: "(99) 9999-9999",
    email: "endereco@dominio.com.br"
}

const section = [/* {
    title: "A EMPRESA",
    links: [{ label: "Inicio", href: "/" }, { label: "Sobre nós", href: "/sobre" }, { label: "Depoimento de clientes", href: "/#depoimentos" }, { label: "Contato", href: "/contato" }, { label: "Trabalhe Conosco", href: "/trabalhe-conosco" }, { label: "Política de privacidade", href: "politica-de-privacidade" }, { label: "Termos de uso", href: "termos-de-uso" },]
}, */ {
        title: "SERVIÇOS",
        links: [{ label: "Emagrecimento Consciente", href: "/#" }, { label: "Doenças Autoimunes", href: "#" }, { label: "Disfunção Gastrointestinal", href: "/#" }]
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


            <Footer copyright='© Todos os direitos reservados. ' companyDescription='...' address='...' socialLinks={socialLinks} contactInfo={contactInfo} logoSrc='/img/em-construcao/logo-branca.png' sections={section} />

            <Toaster />
        </div>
    );
};

export { Layout };
