import { ContainerDefault } from "../layout/containerDefault";

const Footer = () => {
    return (
        <footer className="bg-[#0D4259] text-white py-6">
            <ContainerDefault>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 py-8">
                    {/* Logo e Social Links */}
                    <div className="flex flex-col gap-4 col-span-2 ">
                        <div className="mb-4">
                            <img src="/img/logo-branca.png" alt="Logo" className="h-20" />
                        </div>
                        <div className="flex  space-x-6">
                            <a href="#" aria-label="Instagram" className="hover:text-gray-400">
                                Instagram
                            </a>
                            <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">
                                LinkedIn
                            </a>
                            <a href="#" aria-label="Facebook" className="hover:text-gray-400">
                                Facebook
                            </a>
                        </div>
                        <div>
                            <p>Telefone: (XX) XXXX-XXXX</p>
                            <p>Whatsapp: (XX) XXXXX-XXXX</p>
                            <p>Email: contato@brandani.com.br</p>
                        </div>
                    </div>


                    {/* Links Rápidos */}
                    <div className="">
                        <h4 className="text-lg  mb-4">A EMPRESA</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-400">A Empresa</a></li>
                            <li><a href="#" className="hover:text-gray-400">Contabilidade</a></li>
                            <li><a href="#" className="hover:text-gray-400">Segurança</a></li>
                        </ul>
                    </div>
                    <div className="">
                        <h4 className="text-lg  mb-4">CONTABILIDADE</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-400">A Empresa</a></li>
                            <li><a href="#" className="hover:text-gray-400">Contabilidade</a></li>
                            <li><a href="#" className="hover:text-gray-400">Segurança</a></li>
                        </ul>
                    </div>
                    <div className="">
                        <h4 className="text-lg  mb-4">SEGURANÇA</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-400">A Empresa</a></li>
                            <li><a href="#" className="hover:text-gray-400">Contabilidade</a></li>
                            <li><a href="#" className="hover:text-gray-400">Segurança</a></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Inferior */}
                <div className="border-t border-gray-400 py-4 mt-4">
                    <p className="mb-2">Sobre a Empresa</p>
                    <p className="mb-2">Endereço: Rua Exemplo, 123, Cidade, Estado</p>
                    <p>© 2024 Brandani Contabilidade. Todos os direitos reservados.</p>
                </div>
                <div className="text-center text-sm">
                    <p>© 2024 Brandani Contabilidade. Todos os direitos reservados.</p>

                </div></ContainerDefault>


        </footer>
    );
};

export default Footer;
