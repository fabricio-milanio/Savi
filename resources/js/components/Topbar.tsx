import { Link } from '@inertiajs/react';
// ADICIONADO: FaYoutube na importação abaixo
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link href={route('home')} className="flex items-center space-x-2">
          <img
            src="/images/logoazul.svg"
            alt="Savi Administrativo"
            className="w-16 h-16 object-contain"
          />
        </Link>

        {/* Botão Mobile */}
        <div className="md:hidden">
          <Menu as="div" className="relative">
            <Menu.Button
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
            </Menu.Button>

            <Transition
              as={Fragment}
              show={menuOpen}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 scale-95 -translate-y-3"
              enterTo="opacity-100 scale-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 scale-100 translate-y-0"
              leaveTo="opacity-0 scale-95 -translate-y-3"
            >
              <Menu.Items
                static
                className="absolute right-0 mt-4 w-72 origin-top-right rounded-xl bg-white/90 backdrop-blur shadow-lg ring-1 ring-black/10 focus:outline-none z-50 p-6 space-y-4"
              >
                {/* Navegação */}
                <Menu.Item>
                  {() => (
                    <Link
                      href={route('home')}
                      className="block text-lg font-medium text-gray-800 hover:text-green-700 transition"
                      onClick={() => setMenuOpen(false)}
                    >
                      Home
                    </Link>
                  )}
                </Menu.Item>
                
                <Menu.Item>
                  {() => (
                    <Link
                      href={route('programas')}
                      className="block text-lg font-medium text-gray-800 hover:text-green-700 transition"
                      onClick={() => setMenuOpen(false)}
                    >
                      Projetos
                    </Link>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {() => (
                    <Link
                      href={route('contato')}
                      className="block text-lg font-medium text-gray-800 hover:text-green-700 transition"
                      onClick={() => setMenuOpen(false)}
                    >
                      Contato
                    </Link>
                  )}
                </Menu.Item>

                {/* Ações Mobile */}
                <div className="pt-4 border-t border-gray-200">
                  <Link
                    href={route('contato')}
                    className="block w-full text-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-base font-semibold transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    Fale com a gente
                  </Link>
                  <div className="flex justify-center gap-4 mt-4">
                    <a
                      href="https://www.instagram.com/savi_ong"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-pink-600 transition"
                    >
                      <FaInstagram size={22} />
                    </a>
                    <a
                      href="https://www.facebook.com/share/19B5GizWfh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-blue-600 transition"
                    >
                      <FaFacebookF size={22} />
                    </a>
                    {/* ADICIONADO: Ícone do Youtube Mobile */}
                    <a
                      href="https://www.youtube.com/@SociedadeAmbientevivo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-red-600 transition"
                    >
                      <FaYoutube size={22} />
                    </a>
                  </div>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-20">
          <Link href={route('home')} className="text-gray-700 hover:text-gray-900">
            Home
          </Link>

          <Link href={route('programas')} className="text-gray-700 hover:text-gray-900">
            Projetos
          </Link>

          <Link href={route('contato')} className="text-gray-700 hover:text-gray-900">
            Contato
          </Link>

        </nav>

        {/* Desktop Ações */}
        <div className="hidden md:flex flex-col w-fit gap-2">
          {/* 1. Botão: Define a largura do container pai */}
          <Link
            href={route('contato')}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 text-sm font-medium text-center w-full block"
          >
            Fale com a gente
          </Link>

          {/* 2. Container dos Ícones: Ocupa 100% da largura e espalha os itens */}
          <div className="flex w-full justify-between px-1">
            <a
              href="https://www.instagram.com/savi_ong"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-pink-600"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/share/19B5GizWfh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.youtube.com/@SociedadeAmbientevivo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-red-600"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}