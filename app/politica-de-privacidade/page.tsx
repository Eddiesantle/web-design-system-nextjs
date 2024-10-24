import { ContainerDefault } from "@/components/layout/containerDefault";
import { Layout } from "@/components/layout/layout";

export default function PoliticaDePrivacidade() {
    return (
        <Layout>
            <ContainerDefault>
                <div className="grid grid-cols-1 justify-center pt-14 pb-20">
                    <h1 className="text-3xl font-bold mb-4">Política de Privacidade - Brandani Contabilidade</h1>

                    <p className="mb-4">
                        Na Brandani Contabilidade, valorizamos sua privacidade e estamos comprometidos em proteger as informações
                        pessoais de nossos clientes. Esta Política de Privacidade descreve como coletamos, utilizamos e protegemos
                        suas informações quando você visita nosso site ou utiliza nossos serviços.
                    </p>

                    <h2 className="text-2xl font-semibold mb-2">1. Coleta de Informações</h2>
                    <p className="mb-4">
                        Coletamos informações pessoais quando você interage conosco, seja ao visitar nosso site, enviar um formulário
                        ou nos contatar diretamente. As informações coletadas podem incluir seu nome, e-mail, telefone, endereço e
                        dados financeiros para a prestação dos nossos serviços contábeis.
                    </p>

                    <h2 className="text-2xl font-semibold mb-2">2. Uso das Informações</h2>
                    <p className="mb-4">
                        As informações que coletamos são utilizadas para:
                        <ul className="list-disc list-inside">
                            <li>Prestar serviços contábeis personalizados;</li>
                            <li>Processar transações e emitir faturas;</li>
                            <li>Responder a dúvidas e solicitações;</li>
                            <li>Enviar comunicações relevantes sobre nossos serviços e novidades;</li>
                            <li>Melhorar a experiência do usuário em nosso site e serviços.</li>
                        </ul>
                    </p>

                    <h2 className="text-2xl font-semibold mb-2">3. Compartilhamento de Informações</h2>
                    <p className="mb-4">
                        Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para cumprir exigências
                        legais, atender a uma solicitação sua ou garantir a prestação dos nossos serviços. Nos casos em que contratamos
                        terceiros para auxiliar no processamento de suas informações (como provedores de hospedagem ou sistemas de
                        pagamento), garantimos que estes mantenham a confidencialidade e a segurança dos dados.
                    </p>

                    <h2 className="text-2xl font-semibold mb-2">4. Segurança das Informações</h2>
                    <p className="mb-4">
                        Adotamos medidas técnicas e organizacionais para proteger suas informações contra acesso não autorizado, perda,
                        alteração ou divulgação indevida. Nosso site é monitorado e atualizado constantemente para assegurar que seus
                        dados estejam sempre protegidos.
                    </p>

                    <h2 className="text-2xl font-semibold mb-2">5. Retenção de Dados</h2>
                    <p className="mb-4">
                        As informações pessoais são mantidas apenas pelo tempo necessário para o cumprimento dos propósitos descritos
                        nesta Política, salvo quando exigido por lei ou para fins legítimos de nossa atuação, como contabilidade ou
                        auditoria.
                    </p>

                    <h2 className="text-2xl font-semibold mb-2">6. Direitos dos Usuários</h2>
                    <p className="mb-4">
                        Você tem o direito de solicitar o acesso, correção, atualização ou exclusão das suas informações pessoais. Caso
                        deseje exercer esses direitos ou tenha dúvidas sobre como suas informações são tratadas, entre em contato
                        conosco por meio de nossos canais de atendimento.
                    </p>

                    <h2 className="text-2xl font-semibold mb-2">7. Alterações nesta Política</h2>
                    <p className="mb-4">
                        Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças nos nossos serviços ou
                        regulamentos aplicáveis. Quaisquer alterações serão publicadas nesta página, com a data de revisão devidamente
                        indicada.
                    </p>

                    <h2 className="text-2xl font-semibold mb-2">8. Contato</h2>
                    <p className="mb-4">
                        Se você tiver qualquer dúvida sobre esta Política de Privacidade ou sobre o uso de suas informações pessoais,
                        entre em contato conosco através dos seguintes canais:
                    </p>
                    <ul className="list-none mb-4">
                        <li><strong>E-mail:</strong> administracao@brandanicontabilidade.com.br</li>
                        <li><strong>Telefone:</strong> (69) 9.9981-0662</li>
                        <li><strong>Whatsapp:</strong> (69) 3441-5425</li>
                        <li><strong>Endereço:</strong> Av. Mal. Rondon, 2679 - Princesa Isabel, Cacoal - RO, Cep: 78976-065</li>
                    </ul>

                    <p className="mt-8">
                        <strong>Brandani Contabilidade</strong><br />
                        Fundada em 1983, há mais de 40 anos simplificando a contabilidade rural e empresarial.
                    </p>

                    <p className="text-sm mt-4">
                        Esta Política de Privacidade foi atualizada em 23/10/2024.
                    </p>

                </div>
            </ContainerDefault>
        </Layout>
    )
}

