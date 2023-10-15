import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form, useNavigation } from "@remix-run/react";
import Navbar from "~/components/Navbar";
import SUPABASE from "~/api/supabaseClient"
import { useRef, useEffect } from "react";

export async function action({
    request,
}: ActionFunctionArgs) {
    const formData = await request.formData();
    const contactData = Object.fromEntries(formData)

    try {
        const { error } = await SUPABASE.from('contacts').insert({
            name: contactData.name,
            email: contactData.email,
            message: contactData.message,
        })

        if (error !== null) {
            throw error
        }
        return redirect('/contact')
    } catch (e) {
        console.log(e)
    }
}

export default function Contact() {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (!isSubmitting) {
            formRef.current?.reset();
        }
    }, [isSubmitting]);

    return (
        <>
            <Navbar />
            <main className="w-full pt-10 md:pt-14 pb-10 md:pb-20">
                <div className="container mx-auto px-5 w-full md:w-[800px] lg:w-[1000px]">
                    <section className="mb-10 md:mb-14">
                        <h1 className="font-semibold text-xl md:text-3xl text-gray-700 mb-2">Contact Us!</h1>
                        <p className="text-base text-gray-600 w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolor ab ipsam at corrupti veritatis, deleniti.</p>
                    </section>
                    <div className="flex flex-wrap md:flex-nowrap items-start gap-x-20">
                        <div className="w-6/12">
                            <div className="flex items-center gap-x-2.5 mb-5">
                                <div className="grow w-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </div>
                                <p className="flex-none w-full text-sm text-gray-700">Yogyakarta International Airport (YIA) Ngringit, Palihan, Kulon Progo Regency, Special Region of Yogyakarta</p>
                            </div>
                            <div className="flex items-center gap-x-2.5 mb-5">
                                <div className="grow w-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                                    </svg>
                                </div>
                                <p className="flex-none w-full text-sm text-gray-700">fromyogyakartawithlove@gmail.com</p>
                            </div>
                            <div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.9842257853093!2d110.05776127494572!3d-7.896716192126184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7ae510af9cb49f%3A0x53f3289baac373ed!2sYogyakarta%20International%20Airport%20(YIA)!5e0!3m2!1sen!2sid!4v1696761491094!5m2!1sen!2sid" width="600" height="450" className="w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Maps Yogyakarta"></iframe>
                            </div>
                        </div>
                        <Form method="POST" className="w-6/12" ref={formRef}>
                            <div className="mb-5">
                                <input type="text" id="name" name="name" className="w-full py-3 px-4 rounded-md bg-slate-100 text-base focus:ring-4 focus:outline-none focus:ring-blue-300" placeholder="Your Name" />
                            </div>
                            <div className="mb-5">
                                <input type="email" id="email" name="email" className="w-full py-3 px-4 rounded-md bg-slate-100 text-base focus:ring-4 focus:outline-none focus:ring-blue-300" placeholder="Your Email" />
                            </div>
                            <div className="mb-5">
                                <textarea className="w-full py-3 px-4 rounded-md bg-slate-100 text-base focus:ring-4 focus:outline-none focus:ring-blue-300" name="message" rows={10} placeholder="Message"></textarea>
                            </div>
                            <div>
                                <button disabled={isSubmitting} className="w-full text-base text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium py-3 px-5 rounded-lg">{isSubmitting ? 'Adding...' : 'Submit'}</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </main>
        </>
    )
}