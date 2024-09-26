'use client'
// index.tsx
import { usePathname } from 'next/navigation';
import NextLink, { LinkProps } from 'next/link';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { ReactNode, useState } from 'react';
import './../../app/globals.css';
import Link from 'next/link';
import { buttonVariants } from './button';

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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar flex justify-between items-center p-10  h-[80px] container">
      {/* Logo à esquerda */}
      <div className="">
        <img src="/img/icon-b-logo.png" alt="Logo Cliente" className="mx-auto md:mx-0" />
      </div>

      {/* Menu Hambúrguer no mobile e menu normal no desktop */}
      <div className="md:hidden text-black text-lg">
        <button
          className="font-[24px]"
          onClick={() => setIsOpen(!isOpen)}
        >
          &#9776;
        </button>
      </div>

      {/* Menu à direita */}
      <NavigationMenu.Root className={`navbar-menu flex gap-10 items-center ${isOpen ? 'block' : 'hidden'} md:flex`}>
        <NavigationMenu.List className="navbar-menu text-black flex gap-10 items-center  ">
          <NavigationMenu.Item>
            <LinkItem href="/">Home</LinkItem>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <LinkItem href="/about">Sobre</LinkItem>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <LinkItem href="/services">Serviços</LinkItem>
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
  )
}

export default Navbar;
