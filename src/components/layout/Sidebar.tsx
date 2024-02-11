import Link from "next/link";
import { useRouter } from "next/router";
import { getCta } from "../../lib/cta";
import { getNavigation } from "../../lib/navigation";
import Image from 'next/image';
import { useEasterEgg } from "@/hooks/useEasterEgg";
import { GiSpikedDragonHead } from "react-icons/gi";

interface Props {
  
}

const Sidebar: React.FC<Props> = ({
  
}) => {
  const { easterEgg, setIsOpenDen } = useEasterEgg();
  const { pathname } = useRouter();
  const navigation = getNavigation();
  const cta = getCta();

  const handleAction = () => {
    alert("You called upon the dragon!");
    setIsOpenDen(true);
  };

  return (
    <section className="flex flex-col justify-end w-[250px] transition-all overflow-y-auto sticky top-0 left-0 max-h-[92vh] px-4 py-20 gap-8">
      <nav className="font-bold text-lg">
        <ul className="flex flex-col">
          {
            navigation.map((item, index) => (
              <li key={item.title + index} className="flex flex-row gap-4 justify-end items-center group">
                {/* {
                  item.tag && item.tag.map((tag) => (
                    <p key={tag} className="text-xs px-4 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-white font-bold motion-safe:group-hover:animate-pulse">
                      {tag}
                    </p>
                  ))
                } */}
                <Link href={item.path} data-active={pathname === item.path} className="border-r-4 border-black hover:border-blue-500 text-black hover:text-blue-500 flex flex-row gap-4 justify-end transition-all duration-300 ease-in-out text-right pr-6 py-2 data-[active=true]:border-blue-800 data-[active=true]:text-blue-800">
                  {item.title}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>

      <div className="flex flex-row gap-2 items-center justify-end">
        {
          easterEgg && (
            <button onClick={handleAction}>
              <div className="text-2xl text-slate-500 hover:text-slate-900 p-1 transition-all duration-300 ease-in-out">
                <GiSpikedDragonHead />
              </div>
            </button>
          )
        }
        {
          cta.map((item, index) => (
            <a key={item.title} rel="noopener noreferrer" target="_blank" href={item.href}>
              <div className="text-2xl text-slate-500 hover:text-slate-900 p-1 transition-all duration-300 ease-in-out">
                {item.icon}
              </div>
            </a>
          ))
        }
      </div>
      <div className="relative flex">
        <Link href="/buymeacoffee" target="_blank" rel="noopener noreferrer" id="buymeacoffee" className="relative w-full h-16" as="/buymeacoffee">
          <Image
            src="/images/button_buymeacoffee.png"
            alt="Buy me a coffee!"
            fill
            sizes="100px"
            className="relative rounded-md object-cover"
          />
        </Link>
      </div>
    </section>
  );
};

export default Sidebar;
