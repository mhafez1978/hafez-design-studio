import React from "react";
import Image from "next/image";

const Contact: React.FC = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-white py-16 md:py-20 lg:py-28 dark:bg-dark">
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 dark:opacity-20">
        <Image
          src="https://cdn.tailgrids.com/2.2/assets/application/images/contact/contact-11/grid-shape.svg"
          alt="grid-shape"
          width={1440}
          height={400}
        />
      </div>
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-4xl font-bold text-dark md:text-5xl dark:text-white">
            Get in Touch
          </h2>
          <p className="text-lg text-body-color dark:text-dark-6">
            We&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="mx-auto w-full max-w-[540px]">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 sm:w-1/2">
              <div className="mb-6">
                <label
                  htmlFor="firstname"
                  className="mb-2.5 block text-base font-medium text-dark dark:text-white"
                >
                  First name
                </label>
                <input
                  name="firstname"
                  type="text"
                  placeholder="First name"
                  className="w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-none duration-200 focus:border-primary dark:border-dark-3 dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2">
              <div className="mb-6">
                <label
                  htmlFor="lastname"
                  className="mb-2.5 block text-base font-medium text-dark dark:text-white"
                >
                  Last name
                </label>
                <input
                  name="lastname"
                  type="text"
                  placeholder="Last name"
                  className="h-[46px] w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-none duration-200 focus:border-primary dark:border-dark-3 dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>
            <div className="w-full px-4">
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="mb-2.5 block text-base font-medium text-dark dark:text-white"
                >
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email@company.com"
                  className="h-[46px] w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-none duration-200 focus:border-primary dark:border-dark-3 dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>
            <div className="w-full px-4">
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="mb-2.5 block text-base font-medium text-dark dark:text-white"
                >
                  Phone number
                </label>
                <input
                  name="phone"
                  type="text"
                  placeholder="+1 (555) 444-0000"
                  className="h-[46px] w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-none duration-200 focus:border-primary dark:border-dark-3 dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>
            <div className="w-full px-4">
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="mb-2.5 block text-base font-medium text-dark dark:text-white"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Type your message"
                  className="w-full rounded-lg border border-stroke bg-transparent p-5 text-dark placeholder-dark-5 outline-none duration-200 focus:border-primary dark:border-dark-3 dark:text-white dark:focus:border-primary"
                ></textarea>
              </div>
            </div>
            <div className="w-full px-4">
              <button className="flex h-12 w-full items-center justify-center rounded-lg bg-black text-white px-5 py-3 text-base font-medium text-white duration-200 hover:bg-white hover:text-black hover:border hover:border-black">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
