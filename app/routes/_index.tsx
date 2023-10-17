import SUPABASE from "~/api/supabaseClient"
import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Header from "~/components/Header";
import Navbar from "~/components/Navbar";
import ArticleCard from "~/components/ArticleCard";

interface Posts {
  title: string,
  text: string,
  synopsis: string,
  slug: string,
  author: string,
  created_at: string
}

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  try {
    const { data: posts, error: postsError } = await SUPABASE.from('posts').select(
      'title, text, synopsis, slug, author, created_at'
    )

    if (postsError !== null) {
      throw postsError
    }
    return posts
  } catch (e) {
    console.log(e)
  }
};

export default function Index() {
  const posts = useLoaderData<Posts[]>();
  return (
    <>
      <Navbar />
      <Header />
      <main className="w-full md:pt-10 pb-10">
        <div className="container mx-auto px-5 w-full md:w-[900px] lg:w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {posts.map((post: { title: string; text: string; synopsis: string; slug: string; author: string; created_at: string; }) => (
              <ArticleCard title={post.title} text={post.text} synopsis={post.synopsis} slug={post.slug} author={post.author} created_at={post.created_at} key={post.slug} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
