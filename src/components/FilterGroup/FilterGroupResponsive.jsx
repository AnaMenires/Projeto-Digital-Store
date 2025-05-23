import React, { useState } from "react";
import { FunnelIcon, X } from "@phosphor-icons/react";
import FilterGroup from "../FilterGroup/FilterGroup";

const FilterGroupResponsive = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={toggleMenu}
        className="md:hidden bg-[#c92071] w-[43px] h-[43px] rounded-md flex items-center justify-center"
      >
        <FunnelIcon size={22} weight="light" className="text-white flex justify-center items-center" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={closeMenu}></div>

          <div
            className="relative bg-white w-3/4 max-w-xs h-full p-5 shadow-lg overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-700">Filtros</h2>
              <button onClick={closeMenu}>
                <X size={20} weight="bold" className="text-gray-600" />
              </button>
            </div>

            <FilterGroup />
          </div>
        </div>
      )}
    </>
  );
};

export default FilterGroupResponsive;
