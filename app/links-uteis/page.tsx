import { ContainerDefault } from "@/components/layout/containerDefault";
import { Layout } from "@/components/layout/layout";

// Links de exemplo para "Contabilidade"
const linksMock = [
    { title: 'Certidão FederaL CNPJ', url: 'https://solucoes.receita.fazenda.gov.br/Servicos/certidaointernet/PJ/Emitir' },
    { title: 'Certidão Federal CPF', url: 'https://solucoes.receita.fazenda.gov.br/Servicos/certidaointernet/PF/Emitir' },
    { title: 'Certidão FGTS ', url: 'https://consulta-crf.caixa.gov.br/consultacrf/pages/impressao.jsf' },
    { title: 'Emissão de Certidão Negativa', url: 'https://www.cjf.jus.br/cjf/certidao-negativa' },
    { title: 'Certidão Eleitoral ', url: 'https://www.tse.jus.br/servicos-eleitorais/servicos/certidoes' },
    { title: 'Certidão Justiça Militar da União ', url: 'https://www.stm.jus.br/servicos-stm/certidao-negativa' },
    { title: 'Certidão Estadual ', url: 'https://webapp.tjro.jus.br/certidaoonline/pages/cnpg.xhtml' },
    { title: 'Cacoal - CND Municipal', url: 'https://tributos.cacoal.ro.gov.br/portal-contribuinte/emissao-certidoes' },
    { title: 'Andreazza - CND Municipal', url: 'https://tributos.ministroandreazza.ro.gov.br/portal-contribuinte/emissao-certidoes' },
    { title: 'Pimenta - CND Municipal', url: 'https://certidao.pimentabueno.ro.gov.br/servicosweb/home.jsf' },
    { title: 'Vilhena  - CND Municipal', url: 'https://vilhena.oxy.elotech.com.br/portal-contribuinte/emissao-certidoes' },
    { title: 'Ariquemes - CND Municipal', url: 'https://tributos.ariquemes.ro.gov.br/servicosweb/home.jsf' },
    { title: 'Ji-Paraná  - CND Municipal', url: 'https://certidoes.ji-parana.ro.gov.br/servicosweb/home.jsf' },
    { title: "Espigão D'Oeste - CND Municipal", url: "https://servicos.espigaodooeste.ro.gov.br/servicosweb/home.jsf" },
];

const BoxLinks = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-14">
            {linksMock.map((link, index) => (
                <a
                    key={index}
                    href={link.url}
                    target="_blank"
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
