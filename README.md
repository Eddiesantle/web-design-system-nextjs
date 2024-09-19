# Web Setup Next.js - Design System

Este é um projeto Next.js inicializado com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). O projeto inclui um sistema de design baseado em Tailwind CSS e Windstitch, que fornece componentes reutilizáveis para a interface do usuário.

## Começando

Para iniciar o servidor de desenvolvimento, execute:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra http://localhost:3000 no seu navegador para ver o resultado.

Você pode começar a editar a página modificando o arquivo app/page.tsx. A página será atualizada automaticamente à medida que você edita o arquivo.

Este projeto usa next/font para otimizar e carregar automaticamente a fonte Geist, uma nova família de fontes para o Vercel.

### Estrutura do Projeto

#### Design System

O arquivo tailwind.config.js contém as configurações personalizadas do Tailwind, que incluem:

- colors - Define as cores personalizadas baseadas na paleta de cada cliente, incluindo cores primárias, secundárias, terciárias e outras cores usadas em vários elementos da interface do usuário.

- fontFamily - Define as fontes personalizadas usadas no projeto, incluindo as fontes Montserrat e Montserrat Alternates.

- screens - Define os breakpoints para o desenvolvimento de páginas responsivas.

- borderRadius - Define um valor de raio de borda para aplicar a elementos específicos.

#### Componentes

O design system inclui uma série de componentes reutilizáveis, tais como:

- Botões: Botões personalizáveis com variantes e ícones.
- Inputs: Campos de entrada com estilos variados.
- Cards: Cartões com suporte a títulos, conteúdos e ações.
- Navbar: Barra de navegação com links e responsividade.
- Accordion: Acordeão para exibição de conteúdo expansível.
- Lists: Listas com suporte a diferentes estilos e itemização.
- Container: Contêiner flexível para layout.
- Modal: Modal com diferentes opções de posição, sombra e borda.
- Banner: Banner para exibição de imagens com efeitos de slide.
- Select: Menu suspenso para seleção de opções.

Cada componente é estilizado usando Tailwind CSS e pode ser personalizado através de variantes.

#### Aprender Mais

Para aprender mais sobre o Next.js, confira os seguintes recursos:

Documentação do Next.js - Aprenda sobre os recursos e a API do Next.js.
Aprender Next.js - Um tutorial interativo sobre Next.js.
Você pode conferir o repositório do Next.js no GitHub - seus feedbacks e contribuições são bem-vindos!

#### Deploy no Vercel

A forma mais fácil de implantar sua aplicação Next.js é usar a Plataforma Vercel dos criadores do Next.js.

Confira nossa documentação sobre implantação do Next.js para mais detalhes.

#### Contribuindo

Se você deseja contribuir para este projeto, sinta-se à vontade para abrir um issue ou enviar um pull request. Agradecemos por seu interesse e contribuição!

#### Licença

Este projeto está licenciado sob a MIT License.

Você pode copiar e colar esse conteúdo diretamente no seu arquivo `README.md`. Ajuste os links de contribuição e outros detalhes específicos conforme necessário para corresponder ao seu repositório e projeto.
