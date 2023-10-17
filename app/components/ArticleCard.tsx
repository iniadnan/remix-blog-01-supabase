import { Link } from "@remix-run/react"

interface Post {
    title: string,
    text: string,
    synopsis: string,
    slug: string,
    author: string,
    created_at: string,
    // handleDelete: (slug: string) => void
}

const ArticleCard: React.FC<Post> = (props) => {

    const { title, synopsis, slug } = props;
    // const { title, synopsis, slug, handleDelete } = props;

    // const onHandleDelete = (slug: string) => {
    //     handleDelete(slug)
    // }

    return (
        <article className="relative bg-gray-50 hover:bg-gray-100 border rounded-lg py-3 px-5">
            <button
                type="button"
                // onClick={() => onHandleDelete(slug)}
                className="absolute top-0 right-0 bg-red-600 py-2 px-2 rounded text-gray-50 z-10"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                </svg>
            </button>
            <Link to={`/blog/${slug}`} className="block">
                <section className="mb-2.5">
                    <h2 className="font-semibold text-lg md:text-xl text-gray-700">{title}</h2>
                </section>
                <div>
                    <p className="text-sm md:text-base text-gray-700">{synopsis}</p>
                </div>
            </Link>
        </article>
    )
}

export default ArticleCard