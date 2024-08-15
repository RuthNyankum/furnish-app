import TestComponent from '../../../components/testComponent';
import ellen from '../../../assets/images/Ellen.jpg';
import gifty from '../../../assets/images/Gifty.jpg';
import theo from '../../../assets/images/Theo.jpg';

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100%] my-32">
      <p className="text-[14px] text-gray-500 mb-">TESTIMONIALS</p>
      <h3 className="font-bold text-[32px]">Happy Customers</h3>

      <div className="flex gap-x-4">
        <div className="bg-[#00D1D3]">
          <TestComponent
            message="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
            image={ellen}
            person="Roger Scott"
            position="Marketing Manager"
          />
        </div>

        <div className="bg-[#00545F]">
          <TestComponent
            message="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
            image={gifty}
            person="Roger Scott"
            position="Marketing Manager"
          />
        </div>

        <div className="bg-[#00D1D3]">
          <TestComponent
            message="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
            image={theo}
            person="Roger Scott"
            position="Marketing Manager"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
