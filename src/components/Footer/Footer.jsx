import React from "react";
import { FacebookLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <div className="bg-[#1f1f1f] w-full flex justify-center flex-col py-10">
      <div className="flex flex-col md:flex-row justify-center items-start text-white gap-5 w-[80%] max-w-6xl mx-auto">
        <div className="w-full md:w-2/5 ">
          <div className="flex items-center gap-1">
            <img
              src="/logo_branca.png"
              alt="Logo Digital College Branca"
              className="w-[18px] h-[18px]"
            />
            <h2 className="font-normal text-lg">Digital Store</h2>
          </div>

          <p className="text-sm pt-2 md:w-4/5">
            Projeto final Geração Tech, Digital Store é uma aplicação que simula
            um ecommerce de produtos da Nike. Aplicação feita em React.
          </p>

          <div className="flex items-center gap-4 mt-3">
            <a
              href="https://www.facebook.com/nike/?locale=pt_BR"
              target="_blank">
              <FacebookLogoIcon
              className="text-2xl"
              />
            </a>
            <a
              href="https://www.instagram.com/nike/"
              target="_blank">
              <InstagramLogoIcon 
              className="text-2xl"
              />
            </a>
            <a
              href="https://x.com/Nike?"
              target="_blank">
                <TwitterLogoIcon
                className="text-2xl "
                />
              
            </a>
          </div>
        </div>

        <div className="flex flex-row w-full md:w-2/5 gap-5">
          <div className="w-1/2 p-4">
            <h3 className="font-normal text-lg">Links</h3>
            <ul className="gap-2">
              <li className="text-sm pt-2 cursor-pointer"> Sobre Drip Store</li>
              <li className="text-sm pt-2 cursor-pointer"> Segurança</li>
              <li className="text-sm pt-2 cursor-pointer"> Wishlist</li>
              <li className="text-sm pt-2 cursor-pointer"> Blog</li>
              <li className="text-sm pt-2 cursor-pointer"> Trabalhe conosco</li>
              <li className="text-sm pt-2 cursor-pointer"> Meus Pedidos</li>
            </ul>
          </div>

          <div className="w-1/2 p-4 flex flex-col">
            <h3 className="font-normal text-lg">Categorias</h3>
            <ul className="gap-2">
              <li className="text-sm pt-2 cursor-pointer"> Camisetas</li>
              <li className="text-sm pt-2 cursor-pointer"> Calças</li>
              <li className="text-sm pt-2 cursor-pointer"> Bonés</li>
              <li className="text-sm pt-2 cursor-pointer"> Headphones</li>
              <li className="text-sm pt-2 cursor-pointer"> Tênis</li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-1/5 p-4">
          <h3 className="font-normal text-lg">Contato</h3>
          <p className="text-sm pt-2">
            Av. Santos Dumont, 1510 - 1 andar br Aldeota, Fortaleza - CE,
            60150-161
          </p>
          <p className="text-sm pt-4">(85) 3051-3411</p>
        </div>
      </div>

      <div className="w-[70%]  border-t-2 border-gray-500 mb-2 flex justify-center mx-auto mt-10">
        <h3 className="text-white text-xs pt-5">@ 2022 Digital College</h3>
      </div>
    </div>
  );
};

export default Footer;
