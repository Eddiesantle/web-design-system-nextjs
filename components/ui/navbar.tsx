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
      <NextLink href={href} className={`hover:text-secondary  ${className} ${isActive ? 'active:bg-violet-700' : ''}`} {...props}>
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
    <div className="container mx-auto p-2">
      <nav className="navbar flex flex-col md:flex-row justify-between items-center py-4 md:py-6 md:h-[80px]">

        <div className='flex items-center'>
          {/* Logo à esquerda */}
          <div className="flex items-center">
            <Image src="/img/home/logo-default.png" alt="Logo Cliente" width={248} height={73} className="mx-auto md:mx-0" />
          </div>

          {/* Menu Hambúrguer no mobile e menu normal no desktop */}
          <div className="md:hidden text-black text-lg ml-auto">
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
        <NavigationMenu.Root className={`navbar-menu flex gap-10 items-center ${isOpen ? 'block' : 'hidden'} md:flex`}>
          <NavigationMenu.List className="navbar-menu text-black flex flex-col md:flex-row gap-6 md:gap-10 items-center">
            <NavigationMenu.Item>
              <LinkItem href="/home">Inicio</LinkItem>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <LinkItem href="/sobre">Sobre</LinkItem>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="flex flex-row gap-1 items-center">
                Serviços <CaretDownIcon className="CaretDown" aria-hidden />
                <NavigationMenu.Content className="NavigationMenuContent bg-[#F8F8F8] mt-12 rounded-lg">
                  <ul className="List one">
                    <li style={{ gridRow: 'span 3' }} className='flex flex-col gap-3'>
                      <div className="text-lg text-secondary">Contabilidade</div>
                      <LinkItem href="https://stitches.dev/" >
                        Empresarial
                      </LinkItem>
                      <LinkItem href="/colors" >
                        Rural
                      </LinkItem>
                    </li>
                    <li style={{ gridRow: 'span 3' }} className='flex flex-col gap-3'>
                      <div className="text-lg text-secondary">Planejamento</div>
                      <LinkItem href="https://stitches.dev/" >
                        Planejamento Sucessório
                      </LinkItem>
                      <LinkItem href="/colors" >
                        Planejamento Tributário
                      </LinkItem>
                    </li>

                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Trigger>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <LinkItem href="/news">Links Úteis</LinkItem>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <LinkItem href="/news">Trabalhe Conosco</LinkItem>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <LinkItem href="/contact">Contato</LinkItem>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>

      </nav>
    </div>
  )
}

export default Navbar;
