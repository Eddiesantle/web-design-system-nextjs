'use client'
// index.tsx
import { usePathname } from 'next/navigation';
import NextLink, { LinkProps } from 'next/link';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import React, { ReactNode, forwardRef, useState } from 'react';
import './../../app/globals.css';
import './../../app/styles.css';
import { CaretDownIcon } from '@radix-ui/react-icons';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

// Define the types for the Link component
interface CustomLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
}

const LinkItem = ({ href, children, className, ...props }: CustomLinkProps) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <NavigationMenu.Link asChild>
      <NextLink href={href} className={`hover:text-secondary  ${className} ${isActive ? 'border-b-[1px] border-secondary text-secondary ' : ''}`} {...props}>
        {children}
      </NextLink>
    </NavigationMenu.Link>
  );
};


// Tipagem das props do ListItem
interface ListItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  children: ReactNode;
  title: string;
}

// Componente ListItem tipado com forwardRef
const ListItem = forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames('ListItemLink', className)}
          {...props}
          ref={forwardedRef}
        >
          <div className="ListItemHeading">{title}</div>
          <p className="ListItemText">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

ListItem.displayName = 'ListItem'; // Defina o displayName para evitar erros no console

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="container mx-auto p-2 lg:px-20">
      <nav className="navbar flex flex-col lg:flex-row justify-between items-center py-4 md:py-6 lg:h-[80px]">

        <div className='flex items-center w-full md:w-auto'>
          {/* Logo à esquerda */}
          <div className="flex items-center">
            <Link href="/home"><Image src="/img/home/logo-default.png" alt="Logo Cliente" width={248} height={73} className="mx-auto md:mx-0" /></Link>
          </div>

          {/* Menu Hambúrguer no mobile e menu normal no desktop */}
          <div className="md:hidden text-black text-lg ml-auto w-[50px] text-center">
            <button
              aria-label="Menu"
              className="font-[24px]"
              onClick={() => setIsOpen(!isOpen)}
            >
              &#9776;
            </button>
          </div>
        </div>

        {/* Menu principal */}
        <NavigationMenu.Root className={`navbar-menu flex gap-10 items-center mt-2 ${isOpen ? 'block' : 'hidden'} z-40 md:flex`}>
          <NavigationMenu.List className="navbar-menu text-black flex flex-col md:flex-row gap-6 md:gap-10 items-center">
            <NavigationMenu.Item>
              <LinkItem href="/home">Inicio</LinkItem>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <LinkItem href="/sobre">Sobre</LinkItem>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className=' flex flex-row gap-1 items-center justify-center  w-[100%] text-center md:text-start w-[350px] md:w-full'>

                <span className='hover:text-secondary'>Serviços</span>  <CaretDownIcon className="CaretDown" aria-hidden />
                <NavigationMenu.Content className="NavigationMenuContent bg-[#F8F8F8] mt-12 rounded-lg">
                  <ul className="List one">
                    <li style={{ gridRow: 'span 3' }} className='flex flex-col gap-3 mt-3'>
                      <div className="text-lg text-secondary">Contabilidade</div>
                      <LinkItem href="/servicos/contabilidade#rural" >
                        Contabilidade Rural
                      </LinkItem>
                      <LinkItem href="/servicos/contabilidade#empresarial" >
                        Contabilidade Empresarial
                      </LinkItem>

                    </li>
                    <li style={{ gridRow: 'span 3' }} className='flex flex-col gap-3 mt-3'>
                      <div className="text-lg text-secondary">Planejamento</div>
                      <LinkItem href="/servicos/planejamento#tributario" >
                        Planejamento Tributário
                      </LinkItem>
                      <LinkItem href="/servicos/planejamento#sucessorio" >
                        Planejamento Sucessório
                      </LinkItem>

                    </li>

                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Trigger>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className=' flex flex-row gap-1 items-center justify-center  w-[100%] text-center md:text-start w-[350px] md:w-full'>

                <span className='hover:text-secondary'>Portal Online</span>  <CaretDownIcon className="CaretDown" aria-hidden />
                <NavigationMenu.Content className="NavigationMenuContent bg-[#F8F8F8] mt-12 rounded-lg">
                  <ul className="List two">
                    <li style={{ gridRow: 'span 4' }} className='flex flex-col gap-3 mt-3'>
                      <div className="text-lg text-secondary">Acessar</div>

                      <Link href="https://onvio.com.br/clientcenter/pt/auth?r=%2Fhome" target='_blank' >
                        Portal do Cliente
                      </Link>
                      <Link href="https://passport.nibo.com.br/account/login" target='_blank' >
                        Área do Empresa
                      </Link>
                      <Link href="https://contador.nibo.com.br/User/LogOn" target='_blank' >
                        Área da Contador
                      </Link>



                    </li>
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Trigger>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <LinkItem href="/links-uteis">Links Úteis</LinkItem>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <LinkItem href="/news">Trabalhe Conosco</LinkItem>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <LinkItem href="/contato">Contato</LinkItem>
            </NavigationMenu.Item>

          </NavigationMenu.List>
        </NavigationMenu.Root>

      </nav>
    </div>
  )
}

export default Navbar;
