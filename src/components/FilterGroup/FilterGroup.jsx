import React from "react";

const FilterGroup = () => {
  return (
    <div>
      <div className="bg-white w-full p-4 text-sm">
        <h2 className="text-base font-semibold border-b-2 border-gray-300 pb-2">
          Filtrar por
        </h2>

        <div className="mt-4">
          <p className="font-semibold mb-1">Marca</p>
          <label className="flex items-center space-x-2 mt-2">
            <input type="checkbox" className="accent-fuchsia-700" />
            <span>Adiddas</span>
          </label>
          <label className="flex items-center space-x-2 mt-2">
            <input type="checkbox" className="accent-fuchsia-700" />
            <span>Calenciaga</span>
          </label>
          <label className="flex items-center space-x-2 mt-2">
            <input type="checkbox" className="accent-fuchsia-700" />
            <span>K-Swiss</span>
          </label>
          <label className="flex items-center space-x-2 mt-2">
            <input type="checkbox" className="accent-fuchsia-700" />
            <span>Nike</span>
          </label>
          <label className="flex items-center space-x-2 mt-2">
            <input type="checkbox" className="accent-fuchsia-700" />
            <span>Puma</span>
          </label>
        </div>

        <div className="mt-4">
          <p className="font-semibold mb-1">Categoria</p>
          <label className="flex items-center space-x-2 mt-2">
            <input type="checkbox" className="accent-fuchsia-700" />
            <span>Esporte e lazer</span>
          </label>
          <label className="flex items-center space-x-2 mt-2">
            <input type="checkbox" className="accent-fuchsia-700" />
            <span>Casual</span>
          </label>
          <label className="flex items-center space-x-2 mt-2">
            <input type="checkbox" className="accent-fuchsia-700" />
            <span>Utilitário</span>
          </label>
          <label className="flex items-center space-x-2 mt-2">
            <input type="checkbox" className="accent-fuchsia-700" />
            <span>Corrida</span>
          </label>
        </div>

        <div className="mt-4">
          <p className="font-semibold mb-1">Gênero</p>
          <label className="flex items-center space-x-2 mt-2">
            <input type="checkbox" className="accent-fuchsia-700" />
            <span>Masculino</span>
          </label>
          <label className="flex items-center space-x-2 mt-2">
            <input type="checkbox" className="accent-fuchsia-700" />
            <span>Feminino</span>
          </label>
          <label className="flex items-center space-x-2 mt-2">
            <input type="checkbox" className="accent-fuchsia-700" />
            <span>Unisex</span>
          </label>
        </div>

        <div className="mt-4">
          <p className="font-semibold mb-1">Estado</p>
          <label className="flex items-center space-x-2 mt-2">
            <input type="radio" name="estado" className="accent-fuchsia-700" />
            <span>Novo</span>
          </label>
          <label className="flex items-center space-x-2 mt-2">
            <input type="radio" name="estado" className="accent-fuchsia-700" />
            <span>Usado</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterGroup;
