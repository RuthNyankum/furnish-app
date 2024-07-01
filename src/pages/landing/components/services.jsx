import K from "../../../constants";
import { Handshake } from "lucide-react"

const Services = () => {
  return (
    <div className="grid grid-cols-4 gap-x-4 mt-3 pl-2 pr-2">
      {K.SERVICES.map((service, index) => {
            return (
              <div key={index} className={``} style={{backgroundColor: service.bgColor}}>
              <span>
                <Handshake />
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            )
          }
        )
      }
    </div>
  )
};

export default Services;