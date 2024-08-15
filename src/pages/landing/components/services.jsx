import K from '../../../constants';
import { Handshake } from 'lucide-react';

const Services = () => {
  return (
    <div className="grid grid-cols-4 gap-x-4 mt-4 pl-3 pr-3">
      {K.SERVICES.map((service, index) => {
        return (
          <div
            key={index}
            className="p-10"
            style={{ backgroundColor: service.bgColor }}
          >
            <span
              className="w-fit p-2 rounded-full text-white"
              style={{ backgroundColor: service.iconBg }}
            >
              {service.icon}
            </span>
            <h3 className="px-7 pb-3 pt-1 text-[24px] font-bold">
              {service.title}
            </h3>
            <p className="px-7 text-[20px]">{service.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
