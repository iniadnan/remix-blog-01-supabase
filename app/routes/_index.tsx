import SUPABASE from "~/api/supabaseClient"
import type { MetaFunction, ActionFunctionArgs } from "@remix-run/node";
import { useLoaderData, useNavigation } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import Header from "~/components/Header";
import Navbar from "~/components/Navbar";
import ModalForm from "~/components/ModalForm";
import ArticleCard from "~/components/ArticleCard";
import { useState, useEffect } from "react";

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

export async function action({
  request,
}: ActionFunctionArgs) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData)

  try {
    const { error } = await SUPABASE.from('posts').insert({
      title: postData.title,
      synopsis: postData.synopsis,
      slug: postData.slug,
      author: postData.author,
      text: postData.text
    })

    if (error !== null) {
      throw error
    }

    return redirect('/');
  } catch (e) {
    console.log(e)
  }
}

export default function Index() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const allPosts = useLoaderData<Posts[]>();
  const [isShowModal, setIsShowModal] = useState<boolean>(false)
  const [posts, setPosts] = useState<Posts[]>();

  useEffect(() => {
    if (!isSubmitting) {
      setIsShowModal(false)
    }
  }, [isSubmitting]);

  useEffect(() => {
    setPosts(allPosts)
  }, [allPosts])

  const appHandleModal = () => {
    setIsShowModal(!isShowModal)
  }

  const cancelModal = () => {
    setIsShowModal(!isShowModal)
  }

  const onHandleChange = (event: { target: { value: string; }; }) => {
    const value = event.target.value;

    if (value.length == 0) {
      return setPosts(allPosts)
    }

    const filteredPosts = allPosts.filter((post: Posts) => {
      return post.title.toLowerCase().includes(value.toLowerCase())
    })

    setPosts(filteredPosts)

  }

  return (
    <>
      <Navbar navHandleModal={appHandleModal} newPost={true} />
      <Header onChangeValue={onHandleChange} />
      <main className="w-full md:pt-10 pb-10">
        <div className="container mx-auto px-5 w-full md:w-[900px] lg:w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {posts?.map((post: { title: string; text: string; synopsis: string; slug: string; author: string; created_at: string; }) => (
              <ArticleCard title={post.title} text={post.text} synopsis={post.synopsis} slug={post.slug} author={post.author} created_at={post.created_at} key={post.slug} />
            ))}
          </div>
        </div>
      </main>
      <ModalForm modalShow={isShowModal} closeModal={cancelModal} />
    </>
  );
}
