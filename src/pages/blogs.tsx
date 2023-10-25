import { useLottie } from "lottie-react";
import { NextPage, GetStaticProps } from "next";
import Default from "../components/layout/Default";
import Image from "next/image";
import { IoMdHeart } from "react-icons/io";
import { FaCommentAlt } from "react-icons/fa";
import { useEffect } from "react";

type BlogData = {
  canonical_url: string;
  comments_count: number;
  cover_image: string;
  created_at: string;
  description: string;
  edited_at: string;
  id: number;
  path: string;
  positive_reactions_count: number;
  public_reactions_count: number;
  published_at: string;
  published_timestamp: string;
  reading_time_minutes: number;
  slug: string;
  social_image: string;
  tag_list: Array<string>;
  title: string;
  url: string;
};

interface Props {
  data: Array<BlogData>;
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const response = await fetch(
    "https://dev.to/api/articles?username=alserembani"
  );
  const data = await response.json();
  return {
    props: {
      data,
    },
    revalidate: 1 * 60 * 60 * 24,
  };
};

const Blogs: NextPage<Props> = ({ data }) => {
  useEffect(() => {
    console.log(
      "%cDid you just peak into the console? 👀",
      "background: #222; color: #bada55"
    );
  }, []);

  const style = {
    height: 300,
  };

  const options = {
    animationData: require("../animation/reading.json"),
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  return (
    <Default title="My Blogs">
      {View}
      <h1 className="text-center">Read to your own content!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {data.map((blog) => (
          <a
            href={blog.url}
            key={blog.id}
            className="flex flex-col items-center justify-center w-full rounded-md overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out bg-zinc-200"
            rel="noreferrer"
            target="_blank"
          >
            {blog.cover_image ? (
              <div className="w-full h-40 relative">
                <Image
                  src={blog.cover_image}
                  alt={blog.title}
                  fill
                  sizes="200px"
                  className="object-cover object-center"
                />
              </div>
            ) : (
              <div className="w-full h-40 bg-zinc-200" />
            )}
            <div className="flex flex-col gap-2 px-4 py-4 flex-1">
              <div className="flex flex-row flex-wrap gap-2">
                {blog.tag_list.map((tag) => (
                  <p
                    key={blog.id + tag}
                    className="text-xs px-4 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-white font-bold"
                  >
                    {tag}
                  </p>
                ))}
              </div>
              <h6 className="text-blue-700">{blog.title}</h6>
              <p className="text-zinc-400">
                {new Intl.DateTimeFormat("ms-MY", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                }).format(new Date(blog.published_timestamp))}{" "}
                - {blog.reading_time_minutes} min read
              </p>
              <p>{blog.description}</p>
              <p className="inline-flex items-center gap-2">
                <IoMdHeart color="red" />
                {blog.positive_reactions_count} •{" "}
                <FaCommentAlt color="midnightblue" />
                {blog.comments_count}
              </p>
            </div>
          </a>
        ))}
      </div>
    </Default>
  );
};

export default Blogs;
