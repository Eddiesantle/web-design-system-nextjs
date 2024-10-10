import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ContainerDefault } from "../layout/containerDefault";

interface SocialLink {
    href: string;
    label: string;
}

interface ContactInfo {
    phone: string;
    whatsapp: string;
    email: string;
}

interface FooterSection {
    title: string;
    links: { label: string; href: string }[];
}

interface FooterProps {
    logoSrc: string;
    socialLinks: SocialLink[];
    contactInfo: ContactInfo;
    sections: FooterSection[];
    companyDescription: string;
    address: string;
    copyright: string;
}

const Footer: React.FC<FooterProps> = ({
    logoSrc,
    socialLinks,
    contactInfo,
    sections,
    companyDescription,
    address,
    copyright
}) => {
    return (
        <footer className="bg-primary text-white py-6 z-40">
            <ContainerDefault>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 py-8">
                    <CompanyInfo logoSrc={logoSrc} socialLinks={socialLinks} contactInfo={contactInfo} />
                    {sections.map((section, index) => (
                        <FooterLinks key={index} {...section} />
                    ))}
                </div>
                <FooterBottom
                    companyDescription={companyDescription}
                    address={address}
                    copyright={copyright}
                />
            </ContainerDefault>
        </footer>
    );
};

const CompanyInfo: React.FC<{
    logoSrc: string;
    socialLinks: SocialLink[];
    contactInfo: ContactInfo;
}> = ({ logoSrc, socialLinks, contactInfo }) => (
    <div className="flex flex-col gap-4 col-span-2">
        <div className="mb-4">
            <Image src={logoSrc} alt="Logo" width={296} height={87} />
        </div>
        <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
                <Link key={index} href={link.href} aria-label={link.label} className="hover:text-gray-400">
                    {link.label}
                </Link>
            ))}
        </div>
        <div className="flex flex-col">
            <p>Telefone: {contactInfo.phone}</p>
            <p>Whatsapp: {contactInfo.whatsapp}</p>
            <p>Email: {contactInfo.email}</p>
        </div>
    </div>
);

const FooterLinks: React.FC<FooterSection> = ({ title, links }) => (
    <div>
        <h4 className="text-lg mb-4">{title}</h4>
        <ul className="space-y-2">
            {links.map((link, index) => (
                <li key={index}>
                    <Link href={link.href} className="hover:text-gray-400">
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

const FooterBottom: React.FC<{
    companyDescription: string;
    address: string;
    copyright: string;
}> = ({ companyDescription, address, copyright }) => (
    <>
        <div className="border-t border-gray-400 py-4 mt-4 text-sm">
            <p className="mb-2 md:w-[75%] text-gray-400">{companyDescription}</p>
            <div className="mb-2 mt-3">{address}</div>
        </div>
        <div className="text-center text-sm text-gray-400">
            <div>{copyright}</div>
        </div>
    </>
);

export default Footer;
