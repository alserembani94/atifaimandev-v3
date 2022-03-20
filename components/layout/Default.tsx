import Head from "next/head";
import { HTMLAttributes } from "react";
import { getNavigation } from "../../lib/navigation";
import Sidebar from "./Sidebar";

interface Props {
    children?: React.ReactNode;
    title?: string;
    description?: string;
    imageURL?: string;
    mainClassName?: HTMLAttributes<HTMLElement>["className"];
}

const Default: React.FC<Props> = ({
    children,
    title = "atifaiman.dev",
    description = "A place for my canvas of code, try everything I could think of to improve my skill continuously.",
    imageURL = "https://scontent.fkul10-1.fna.fbcdn.net/v/t39.30808-6/242120001_4758989014119332_6994841716013162894_n.png?_nc_cat=102&ccb=1-5&_nc_sid=e3f864&_nc_ohc=6cn1ejzIGoQAX8SZAGp&_nc_ht=scontent.fkul10-1.fna&oh=00_AT8CkPs5GHOA_j2JCBHWQ7uxc4NcwXyfnJZoL_jsp9xOwg&oe=623AA06A",
    
}) => {
    const navigation = getNavigation();
    
    return (
        <>
            <Head>
                {/* Basic configuration */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon.ico" />

                {/* Basic information */}
                <title>{title}</title>
                <meta name="description" content={description} />

                {/* Open Graph */}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={imageURL} />
                <meta property="og:site_name" content="NextJS Starter Kit" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary" key="twcard" />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={description} />
                <meta property="twitter:image" content={imageURL} />
                <meta property="twitter:site" content="@nextjs" />
                <meta property="twitter:creator" content="@nextjs" key="twhandle" />
            </Head>

            <div className="bg-zinc-100 min-h-screen flex flex-col items-center">
                <main className="flex-1 flex flex-row justify-center items-start w-full max-w-5xl gap-8">
                    <Sidebar />
                    <section className="flex-1 py-20 px-6 flex flex-col">
                        {children}
                    </section>
                    <button type="button" className="absolute left-4 top-4 bg-white w-12 h-12 shadow-md rounded-full inline sm:hidden">
                        M
                    </button>
                </main>

                <footer className="px-6 py-4 text-center">
                    <p>Made to the pixel-perfect by Atif Aiman 😍 • &copy; {new Date().getFullYear()}</p>
                </footer>
            </div>
        </>
    );
};

export default Default;
