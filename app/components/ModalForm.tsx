import { Form } from "@remix-run/react";

function ModalForm(props: { modalShow: boolean, closeModal: () => void }) {
    const { modalShow, closeModal } = props;

    const closeModalWithCancel = () => {
        closeModal()
    }

    return (
        <div
            className={`${modalShow ? "fixed" : "hidden"} top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 pt-0 pb-3 px-6 max-w-[95%] w-full md:w-[500px] bg-gray-50 z-10 shadow-xl`}
        >
            <div className="py-3 border-b">
                <h3 className="font-medium text-xl text-gray-500">Add New Post</h3>
            </div>
            <Form id="form__modal" method="POST" name="form__modal" className="py-5 max-h-[400px] overflow-y-auto">
                <div className="mb-5">
                    <label htmlFor="title" className="text-base text-gray-700 inline-block pb-2">Title</label>
                    <input type="title" id="title" name="title" className="bg-gray-100 w-full focus:outline-none py-2 px-4 rounded" placeholder="Title" />
                </div>
                <div className="mb-5">
                    <label htmlFor="synopsis" className="text-base text-gray-700 inline-block pb-2">Synopsis</label>
                    <input type="synopsis" id="synopsis" name="synopsis" className="bg-gray-100 w-full focus:outline-none py-2 px-4 rounded" placeholder="Synopsis" />
                </div>
                <div className="mb-5">
                    <label htmlFor="slug" className="text-base text-gray-700 inline-block pb-2">Slug</label>
                    <input type="slug" id="slug" name="slug" className="bg-gray-100 w-full focus:outline-none py-2 px-4 rounded" placeholder="Slug" />
                </div>
                <div className="mb-5">
                    <label htmlFor="author" className="text-base text-gray-700 inline-block pb-2">Author</label>
                    <input type="author" id="author" name="author" className="bg-gray-100 w-full focus:outline-none py-2 px-4 rounded" placeholder="Author" />
                </div>
                <div className="mb-5">
                    <label htmlFor="text" className="text-base text-gray-700 inline-block pb-2">Text</label>
                    <textarea
                        name="text"
                        id="text"
                        className="bg-gray-100 w-full focus:outline-none py-2 px-4 rounded"
                        placeholder="Text"
                        rows={5}
                    ></textarea>
                </div>
                <div className="flex items-center justify-end gap-x-6 pr-8">
                    <button type="button" className="text-base text-gray-700" onClick={closeModalWithCancel}>
                        Cancel
                    </button>
                    <button
                        className="text-base text-white py-1.5 px-4 rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium">
                        Save
                    </button>
                </div>
            </Form>
        </div >
    )
}

export default ModalForm