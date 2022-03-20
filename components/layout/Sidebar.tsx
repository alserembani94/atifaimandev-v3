import Link from "next/link";
import { useRouter } from "next/router";
import { IconContext } from "react-icons";
import { getCta } from "../../lib/cta";
import { getNavigation } from "../../lib/navigation";
import Image from 'next/image';

interface Props {
  
}

const Sidebar: React.FC<Props> = ({
  
}) => {
  const { pathname } = useRouter();
  const navigation = getNavigation();
  const cta = getCta();

  return (
    <section className="hidden sm:flex flex-col justify-end w-[250px] transition-all overflow-y-auto sticky top-0 left-0 max-h-[92vh] px-4 py-20 gap-8">
      <nav className="font-bold text-lg">
        <ul className="flex flex-col">
          {
            navigation.map((item, index) => (
              <li key={item.title + index}>
                <Link href={item.path}>
                  <a className={`
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
                    py-2
                    ${ pathname === item.path && 'border-blue-800 text-blue-800' }
                  `}>
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
              <IconContext.Provider value={{ className: "w-8 h-8 text-slate-500 hover:text-slate-900 p-1 transition-all duration-300 ease-in-out" }}>
                {item.icon}
              </IconContext.Provider>
            </a>
          ))
        }
      </div>
      <div className="relative">
        <Link href="/buymeacoffee">
          <a target="_blank" rel="noopener noreferrer" id="buymeacoffee" className="relative">
            <Image
              src="/images/button_buymeacoffee.png"
              alt="Buy me a coffee!"
              width={200}
              height={50}
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              className="rounded-md"
            />
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Sidebar;
