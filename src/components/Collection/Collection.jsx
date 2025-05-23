import CollectionItem from "./CollectionItem";
import CollectionIcon from "./CollectionIcon";
import {
  TShirtIcon,
  PantsIcon,
  BaseballCapIcon,
  HeadphonesIcon,
  SneakerIcon,
} from "@phosphor-icons/react";

const Collection = ({ item, title }) => {
  return (
    <div className="px-4 py-10 w-full mx-auto gap-1">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-lg font-bold text-[#474747] mb-4">
          Coleções em destaque
        </h2>

        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          <CollectionItem
            className="bg-[url('/imgs/collection_1.png')]"
            title="30% OFF"
          />
          <CollectionItem
            className="bg-[url('/imgs/collection_4.png')]"
            title="30% OFF"
          />
          <CollectionItem
            className="bg-[url('/imgs/collection_5.png')]"
            title="30% OFF"
          />
        </div>

        <div className="max-w-6xl mx-auto mt-20 flex flex-col gap-6 px-4">
          <h2 className="text-lg font-bold text-[#474747] text-center">
            Coleções em destaque
          </h2>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
            <div className="flex flex-col items-center gap-2">
              <CollectionIcon
                Icon={TShirtIcon}
                className="text-gray-500 hover:text-[#c92071]"
              />
              <p className="text-xs font-medium">{item}Camisetas</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <CollectionIcon
                Icon={PantsIcon}
                className="text-gray-500 hover:text-[#c92071]"
              />
              <p className="text-xs font-medium">{item}Calças</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <CollectionIcon
                Icon={BaseballCapIcon}
                className="text-gray-500 hover:text-[#c92071]"
              />
              <p className="text-xs font-medium">{item}Bonés</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <CollectionIcon
                Icon={HeadphonesIcon}
                className="text-gray-500 hover:text-[#c92071]"
              />
              <p className="text-xs font-medium">{item}Headphones</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <CollectionIcon
                Icon={SneakerIcon}
                className="text-gray-500 hover:text-[#c92071]"
              />
              <p className="text-xs font-medium">{item}Tênis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
