import { ContainerDefault } from "@/components/layout/containerDefault";
import { Layout } from "@/components/layout/layout";

// Links de exemplo para "Contabilidade"
const linksMock = [
    { title: 'Cartão CNPJ', url: '/services/contabilidade/empresarial' },
    { title: 'Sintegra', url: '/services/contabilidade/rural' },
    { title: 'Sefin - Rondonia', url: '/services/contabilidade/tributaria' },
    { title: 'Sefaz - Mato Grosso', url: '/services/contabilidade/financeira' },
    { title: 'Receita Federal', url: '/services/contabilidade/empresarial' },
    { title: 'Suframa', url: '/services/contabilidade/rural' },
    { title: 'CND Municipal - Cacoal/RO', url: '/services/contabilidade/tributaria' },
    { title: 'CND Municipal - Pimenta Bueno/RO', url: '/services/contabilidade/financeira' },
    { title: 'CND Municipal - Seringueiras/RO', url: '/services/contabilidade/empresarial' },
    { title: 'CND Estadual - Rondonia', url: '/services/contabilidade/rural' },
    { title: 'CND Estadual - Mato Grosso', url: '/services/contabilidade/tributaria' },
    { title: 'Emissor de Nota Fiscal de Produtor Rural', url: '/services/contabilidade/financeira' },
    { title: 'Emissor de Nota Fiscal MEI', url: '/services/contabilidade/financeira' },
    { title: 'Emissor de NF de Serviço - Parecis', url: '/services/contabilidade/financeira' }
];

const BoxLinks = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-14">
            {linksMock.map((link, index) => (
                <a
                    key={index}
                    href={link.url}
                    className="p-4 border border-gray-300 rounded-md hover:bg-gray-100 transition"
                >
                    <h3 className="text-lg text-primary">{link.title}</h3>
                </a>
            ))}
        </div>
    );
}

const LinksUteis = () => {
    return (
        <Layout>
            <ContainerDefault>
                <h1 className="text-3xl pt-14">Links <span className="text-secondary font-semibold font-[family-name:var(--font-frank-ruhl-libre)]">Úteis</span></h1>
                <BoxLinks />
            </ContainerDefault>
        </Layout>
    )
}

export default LinksUteis;
