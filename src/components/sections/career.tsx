import Image from "next/image";
import { getCareer } from "../../lib/career";
import { twMerge } from "@/lib/helpers";

const Career: React.FC = ({}) => {
  const career = getCareer();

  return (
    <div>
      <h2 className="my-4">Career</h2>
      <div className="flex flex-col gap-4">
        {career.map((item, index) => (
          <div
            key={item.company + index}
            className="flex flex-col sm:flex-row flex-wrap my-4 gap-8 items:center sm:items-start text-center sm:text-left"
          >
            <div className="w-[100px] h-[100px] relative">
              <Image
                src={item.logo}
                alt={item.company}
                fill
                sizes="100px"
                className="object-contain object-center"
              />
            </div>
            <div className=" flex-1 flex flex-col gap-2">
              <h4>{item.position}</h4>
              <a href={item.url} rel="noopener noreferrer" target="_blank">
                <h6>{item.company}</h6>
              </a>
              <p className="text-zinc-600 mb-2">
                {item.start} - {item.end}
              </p>
              <p>{item.description}</p>
              <div className="flex flex-row gap-4 flex-wrap justify-center sm:justify-start">
                {item.stacks.map(
                  (stack, index) =>
                    stack && (
                      <div
                        key={stack.title}
                        data-tool={stack.id}
                        className={twMerge("text-3xl text-slate-400 transition-all", stack.className)}
                      >
                        {stack.icon}
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
