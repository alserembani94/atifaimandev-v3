import { getCareer } from "../../lib/life-journey";
import Image from 'next/image';

const Career: React.FC = ({
  
}) => {
  const career = getCareer();

  return (
    <div>
      <h2 className="my-4">Career</h2>
      <div className="flex flex-col gap-4">
        {
          career.map((item, index) => (
            <div key={item.company + index} className="flex flex-row flex-wrap my-4 gap-8 items-start">
              <Image src={item.logo} alt={item.company} width={100} height={100} objectFit="contain" layout="intrinsic" />
              <div className=" flex-1 flex flex-col gap-2">
                <h4>{item.position}</h4>
                <a href={item.url} rel="noopener noreferrer" target="_blank"><h6>{item.company}</h6></a>
                <p className="text-zinc-600 mb-2">{item.start} - {item.end}</p>
                <p>{item.description}</p>
                <div className="flex flex-row gap-4 flex-wrap">
                  {
                    item.stacks.map((stack, index) => (
                      <div key={stack.title} className="text-3xl text-slate-400">
                        {stack.icon}
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Career;
