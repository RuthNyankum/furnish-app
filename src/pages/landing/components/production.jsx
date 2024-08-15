import { Calculator, Package, Settings } from 'lucide-react';
import ProductionComponent from '../../../components/productionComponent';

const Production = () => {
  return (
    <div className="flex flex-col items-center ">
      <p className="text-[14px] text-gray-500 mb-">PRODUCTION FLOW</p>
      <h3 className="font-bold text-[32px]">How it Works</h3>

      <div className="flex w-[50%] text-center ">
        <div>
          <ProductionComponent
            // className="text-center"
            icon={<Calculator className="size-[100px]" />}
            title="Get A Free Quote"
            text="Far far away, behind the word mountains, far from the countries Vokalia."
          />
        </div>

        <div>
          <ProductionComponent
            // className="text-center"
            icon={<Settings className="size-[100px]" />}
            title="Get A Free Quote"
            text="Far far away, behind the word mountains, far from the countries Vokalia."
          />
        </div>

        <div>
          <ProductionComponent
            // className="text-center"
            icon={<Package className="size-[100px]" />}
            title="Get A Free Quote"
            text="Far far away, behind the word mountains, far from the countries Vokalia."
          />
        </div>
      </div>

      <div>
        <button className="py-5 p-10 bg-[#00D1D3]">LEARN MORE</button>
        <button className="py-5 p-10 bg-[#00545F] text-white">
          GET A REQUEST
        </button>
      </div>
    </div>
  );
};

export default Production;
