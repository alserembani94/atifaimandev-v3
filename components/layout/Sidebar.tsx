import Link from "next/link";
import { IconContext } from "react-icons";
import { getCta } from "../../lib/cta";
import { getNavigation } from "../../lib/navigation";

interface Props {
  
}

const Sidebar: React.FC<Props> = ({
  
}) => {
  const navigation = getNavigation();
  const cta = getCta();

  return (
    <section className="hidden sm:flex flex-col justify-end w-[250px] transition-all overflow-y-auto sticky top-0 left-0 max-h-[92vh] px-4 py-20 gap-8">
      <nav className="font-bold text-lg">
        <ul className="flex flex-col gap-4">
          {
            navigation.map((item, index) => (
              <li key={item.title + index}>
                <Link href={item.path}>
                  <a className="
                    border-r-4
                    border-black
                    hover:border-blue-500
                    text-black
                    hover:text-blue-500
                    flex
                    flex-row
                    gap-4
                    justify-end
                    transition-all
                    duration-300
                    ease-in-out
                    text-right
                    pr-6
                    py-1
                  ">
                    {item.title}
                  </a>
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>

      <div className="flex flex-row gap-2 items-center justify-end">
        {
          cta.map((item, index) => (
            <a key={item.title} rel="noopener noreferrer" target="_blank" href={item.href}>
              <IconContext.Provider value={{ className: "w-8 h-8 text-slate-500 hover:text-slate-900 p-1" }}>
                {item.icon}
              </IconContext.Provider>
            </a>
          ))
        }
      </div>
    </section>
  );
};

export default Sidebar;
