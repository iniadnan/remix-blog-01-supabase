import SUPABASE from "~/api/supabaseClient"
import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Navbar from "~/components/Navbar";

interface Post {
    title: string,
    text: string,
    synopsis: string,
    slug: string,
    author: string,
    created_at: string
}

export const loader = async ({
    params,
}: LoaderFunctionArgs) => {
    try {
        const { data: post, error: postError } = await SUPABASE.from('posts')
            .select('id, title, text, synopsis, slug, author, created_at')
            .eq('slug', params.slug)
            .single()

        if (postError !== null) {
            throw postError
        }

        return post
    } catch (e) {
        console.log(e)
    }
};

export default function Blog() {
    const post = useLoaderData<Post>();
    return (
        <>
            <Navbar />
            <main className="pt-20 mx-auto w-full md:w-8/12">
                <h1 className="font-medium text-3xl text-gray-800 mb-5">{post.title}</h1>
                <p className="text-xl text-gray-800 mb-5">{post.text}</p>
                <p className="font-semibold text-base text-gray-800">- {post.author}</p>
            </main>
        </>
    )
}