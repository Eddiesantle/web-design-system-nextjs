import { ContainerDefault } from "@/components/layout/containerDefault";
import { Layout } from "@/components/layout/layout";

export default function TermosDeUso() {
    return (
        <Layout>
            <ContainerDefault>
                <div className="grid grid-cols-1 justify-center pt-14 pb-20">
                    <h1 className="text-3xl font-bold mb-4">Termos de Uso - Brandani Contabilidade</h1>

                    <p className="mb-4">
                        Bem-vindo aos Termos de Uso da Brandani Contabilidade. Ao acessar ou utilizar nossos serviços, você concorda em cumprir e estar vinculado aos seguintes termos e condições. Caso não concorde com qualquer parte destes termos, solicitamos que não utilize nossos serviços.
                    </p>

                    <h2 className="text-2xl font-semibold mb-2">1. Aceitação dos Termos</h2>
                    <p className="mb-4">
                        Ao acessar este site ou utilizar nossos serviços, você concorda com estes Termos de Uso, nossa Política de Privacidade e quaisquer termos adicionais aplicáveis a serviços específicos oferecidos pela Brandani Contabilidade.
                    </p>

                    <h2 className="text-2xl font-semibold mb-2">2. Uso dos Serviços</h2>
                    <p className="mb-4">
                        Nossos serviços são destinados ao uso pessoal e profissional para a gestão contábil de empresas. Você concorda em não utilizar nossos serviços para atividades ilegais, fraudulentas ou que possam prejudicar o funcionamento da Brandani Contabilidade ou de terceiros.
                    </p>

                    <h2 className="text-2xl font-semibold mb-2">3. Propriedade Intelectual</h2>
                    <p className="mb-4">
                        Todo o conteúdo disponível em nosso site, incluindo textos, gráficos, logotipos e imagens, é de propriedade exclusiva da Brandani Contabilidade ou de nossos licenciadores e está protegido pelas leis de direitos autorais e propriedade intelectual. É proibida a reprodução, distribuição ou qualquer outro uso não autorizado deste conteúdo sem o nosso consentimento prévio por escrito.
                    </p>

                    <h2 className="text-2xl font-semibold mb-2">4. Limitação de Responsabilidade</h2>
                    <p className="mb-4">
                        Embora nos esforcemos para garantir que todas as informações e serviços fornecidos sejam precisos e atualizados, a Brandani Contabilidade não se responsabiliza por erros, omissões ou eventuais danos resultantes da utilização do nosso site ou dos nossos serviços.
                    </p>

                    <h2 className="text-2xl font-semibold mb-2">5. Modificações nos Termos</h2>
                    <p className="mb-4">
                        Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento, publicando uma versão atualizada no nosso site. Recomendamos que você revise os Termos periodicamente para se manter informado sobre quaisquer alterações.
                    </p>

                    <h2 className="text-2xl font-semibold mb-2">6. Links para Terceiros</h2>
                    <p className="mb-4">
                        Nosso site pode conter links para sites de terceiros que não são operados ou controlados por nós. A Brandani Contabilidade não se responsabiliza pelo conteúdo, políticas de privacidade ou práticas desses sites de terceiros.
                    </p>

                    <h2 className="text-2xl font-semibold mb-2">7. Rescisão de Acesso</h2>
                    <p className="mb-4">
                        Podemos suspender ou encerrar seu acesso aos nossos serviços a qualquer momento, sem aviso prévio, caso identifiquemos violação destes Termos de Uso ou por outras razões legítimas.
                    </p>

                    <h2 className="text-2xl font-semibold mb-2">8. Lei Aplicável</h2>
                    <p className="mb-4">
                        Estes Termos de Uso serão regidos e interpretados de acordo com as leis brasileiras. Qualquer disputa decorrente destes termos será resolvida nos tribunais competentes do Brasil.
                    </p>

                    <h2 className="text-2xl font-semibold mb-2">9. Contato</h2>
                    <p className="mb-4">
                        Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco por meio dos seguintes canais:
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
                        Estes Termos de Uso foram atualizados em 23/10/2024.
                    </p>

                </div>
            </ContainerDefault>
        </Layout>
    )
}

