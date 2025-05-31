import React from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import ButtonSale from "../../components/ButtonSale/ButtonSale";

const Login = () => {
  return (
    <div>
      <div>
        <div className="flex p-5 gap-1 items-center ml-5">
          <img
            src="/logo_digital_college.png"
            alt="Logo Digital College"
            className="w-[15px] h-[15px]"
          />
          <h2 className="font-semibold text-[12px] text-[#c92071] font-inter">
            Digital Store{" "}
          </h2>
        </div>

        <div className="bg-gradient-to-b from-[#babbf4] via-[#d6ceff] to-white flex flex-col md:flex-row justify-center items-center p-10 gap-5">
          <div className="bg-white w-[90%] md:w-[400px] flex flex-col h-full p-5 gap-1">
            <h2 className="font-medium text-lg">Acesse sua conta</h2>
            <p className="text-xs text-gray-600">
              Novo cliente? Então registre-se{" "}
              <Link to="/cadastro" className="text-blue-500 underline">
                aqui.
              </Link>
            </p>
            <p className="font-bold text-[10px] pt-2">Login *</p>
            <Input placeholder="Insira seu login ou email" />
            <p className="font-bold text-[10px] pt-2">Senha*</p>
            <Input placeholder="Insira sua senha" />
            <p className="text-[10px] pt-2 pb-2">
              <Link to="/" className="text-blue-500 underline">
                Esqueci minha senha
              </Link>
            </p>
            <button
              className="bg-[#c92071] w-full h-[35px] cursor-pointer rounded-md text-white text-sm mt-3 flex items-center justify-center transition duration-300 hover:brightness-110"
            >
              Acessar Conta
            </button>
            <div className="flex justify-center p-4 gap-2">
              <p className="text-gray-600 text-xs">Ou faça login com</p>
              <Link to="*">
                <img
                  src="/imgs/gmail.png"
                  alt="Logo Gmail"
                  className="w-[15px] h-[15px]"
                />
              </Link>
              <Link to="*">
                <img
                  src="/imgs/facebook.png"
                  alt="Logo Facebook"
                  className="w-[15px] h-[15px]"
                />
              </Link>
            </div>
          </div>
          <div className="w-[90%] md:w-[50%] hidden md:block h-auto">
            <img
              src="/imgs/login.png"
              alt=""
              className="hidden md:block h-auto w-full [transform:rotate(190deg)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
