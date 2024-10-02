'use client'
// index.tsx
import { usePathname } from 'next/navigation';
import NextLink, { LinkProps } from 'next/link';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import React, { ReactNode, forwardRef, useState } from 'react';
import './../../app/globals.css';
import './../../app/styles.css';
import Link from 'next/link';
import { buttonVariants } from './button';
import { CaretDownIcon } from '@radix-ui/react-icons';
import classNames from 'classnames';

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
      <NextLink href={href} className={`hover:text-violet-600 ${className} ${isActive ? 'active:bg-violet-700' : ''}`} {...props}>
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
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <div className="container mx-auto p-2">
      <nav className="navbar flex justify-between items-center py-4 md:py-6 h-[80px]">

        {/* Logo à esquerda */}
        <div className="flex items-center">
          <img src="/img/em-construcao/icon-b-logo.png" alt="Logo Cliente" className="h-10 w-10 mx-auto md:mx-0" />
        </div>

        {/* Menu Hambúrguer no mobile e menu normal no desktop */}
        <div className="md:hidden text-black text-lg">
          <button
            aria-label="Menu"
            className="font-[24px]"
            onClick={() => setIsOpen(!isOpen)}
          >
            &#9776;
          </button>
        </div>



        {/* Menu principal */}
        <NavigationMenu.Root className={`navbar-menu flex gap-10 items-center ${isOpen ? 'block' : 'hidden'} md:flex`}>
          <NavigationMenu.List className="navbar-menu text-black flex flex-col md:flex-row gap-6 md:gap-10 items-center">
            <NavigationMenu.Item>
              <LinkItem href="/home">Home</LinkItem>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <LinkItem href="/sobre">Sobre</LinkItem>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="NavigationMenuTrigger">
                Serviços <CaretDownIcon className="CaretDown" aria-hidden />
                <NavigationMenu.Content className="NavigationMenuContent bg-blue-200 mt-12">
                  <ul className="List one">
                    <li style={{ gridRow: 'span 3' }}>
                      <NavigationMenu.Link asChild>
                        <a className="Callout" href="/">
                          <svg aria-hidden width="38" height="38" viewBox="0 0 25 25" fill="white">
                            <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                            <path d="M12 0H4V8H12V0Z"></path>
                            <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                          </svg>
                          <div className="CalloutHeading">Radix Primitives</div>
                          <p className="CalloutText">Unstyled, accessible components for React.</p>
                        </a>
                      </NavigationMenu.Link>
                    </li>

                    <LinkItem href="https://stitches.dev/" >
                      CSS-in-JS with best-in-class developer experience.
                    </LinkItem>
                    <LinkItem href="/colors" >
                      Beautiful, thought-out palettes with auto dark mode.
                    </LinkItem>
                    <LinkItem href="https://icons.radix-ui.com/">
                      A crisp set of 15x15 icons, balanced and consistent.
                    </LinkItem>
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Trigger>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <LinkItem href="/news">Notícias</LinkItem>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <LinkItem href="/contact">Contato</LinkItem>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <Link target="_blank" href="https://api.whatsapp.com/send?phone=6934415425" className={buttonVariants({ variant: "default" })}>
                Preciso de ajuda
              </Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>

      </nav>
    </div>
  )
}

export default Navbar;
