import Head from "next/head";
import { HTMLAttributes, useState } from "react";
import Sidebar from "./Sidebar";
import { HiMenuAlt2 } from "react-icons/hi";

interface Props {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  imageURL?: string;
  mainClassName?: HTMLAttributes<HTMLElement>["className"];
}

const myFunComments = `
<!--
  It seems that you are currently
  inspecting the element. You are
  cool! A strong high five 🖐🏼.
  Might as well look into my stash:
  https://www.youtube.com/watch?v=xvFZjo5PgG0
-->
`;

const Default: React.FC<Props> = ({
  children,
  title,
  description = "A place for my canvas of code, try everything I could think of to improve my skill continuously.",
  imageURL = "https://atifaiman.dev/images/banner.png",
}) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  
  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  const modifiedTitle = title ? `${title} | atifaiman.dev` : "atifaiman.dev";

  return (
    <>
      <Head>
        {/* Basic configuration */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />

        {/* Basic information */}
        <title>{modifiedTitle}</title>
        <meta name="description" content={description} />

        {/* Open Graph */}
        <meta property="og:title" content={modifiedTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageURL} />
        <meta property="og:site_name" content="atifaiman.dev" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary" key="twcard" />
        <meta property="twitter:title" content={modifiedTitle} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={imageURL} />
        <meta property="twitter:site" content="@alserembani" />
        <meta
          property="twitter:creator"
          content="@alserembani"
          key="twhandle"
        />
      </Head>
      <div
        dangerouslySetInnerHTML={{
          __html: myFunComments,
        }}
      />

      <div className="bg-zinc-100 min-h-screen flex flex-col items-center">
        <main className="flex-1 flex flex-row justify-center items-start w-full max-w-5xl gap-8 relative">
          <div className="hidden sm:flex sticky top-0">
            <Sidebar />
          </div>
          <section className="flex-1 py-20 px-6 flex flex-col">
            {children}
          </section>
        </main>

        <button
          type="button"
          onClick={toggleDrawer}
          className="fixed left-8 top-8 bg-white w-12 h-12 z-50 shadow-md rounded-full flex sm:hidden items-center justify-center"
        >
          <HiMenuAlt2 />
        </button>
        <div
        data-drawer={isDrawerOpen}
          className="sm:hidden transition-all duration-300 ease-in-out flex fixed shadow-xl left-0 top-0 bg-white h-screen items-start w-full justify-end data-[drawer=true]:translate-x-0 data-[drawer=false]:translate-x-[120rem]"
        >
          <Sidebar />
        </div>

        <footer className="px-6 py-4 text-center">
          <p>
            Made to the pixel-perfect by Atif Aiman 😍 • &copy;{" "}
            {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </>
  );
};

export default Default;
