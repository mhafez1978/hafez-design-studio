"use client";
import React, { useState, useEffect } from "react";

// Define the form data interface
interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  // Set initial form data
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  // Set errors as Partial<FormData> because errors may not exist for every field
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isDisabled, setIsDisabled] = useState(true);

  // Tracks whether the user has interacted with the field
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormData, boolean>>
  >({
    firstname: false,
    lastname: false,
    email: false,
    phone: false,
    message: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear specific error when user starts typing
    setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setTouched((prevTouched) => ({ ...prevTouched, [name]: true }));
  };

  // Only return errors for fields with issues
  const validateForm = (): Partial<FormData> => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstname.trim())
      newErrors.firstname = "First name is required";
    if (!formData.lastname.trim()) newErrors.lastname = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 5) {
      newErrors.message = "Message must be at least 5 characters long";
    }

    return newErrors; // Only returning fields with errors
  };

  useEffect(() => {
    const formErrors = validateForm();

    // Directly set errors with Partial<FormData>
    setErrors(formErrors); // Partial<FormData> is expected here

    // Disable button if there are any errors
    setIsDisabled(Object.keys(formErrors).length > 0);
  }, [formData, validateForm]);

  const handleFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      // No errors, form is valid, proceed with submission
      console.log("Form submitted successfully:", formData);
    } else {
      // Set errors if any exist
      setErrors(formErrors);
    }
  };

  return (
    <section className="relative z-10 mt-[8vh] overflow-hidden bg-white py-16 md:py-20 lg:py-28 dark:bg-dark">
      <div className="flex flex-col gap-4 px-10 lg:flex-row">
        <div className="w-full flex flex-col mt-8  justify-start lg:w-1/2">
          <div className="mx-auto w-full max-w-[540px]">
            <h3 className="mb-8 text-black font-black text-3xl">
              We Love To Hear From You
            </h3>
            <form onSubmit={handleFormSubmission}>
              <div className="-mx-4 flex flex-wrap">
                {/* First Name */}
                <div className="w-full px-4 sm:w-1/2">
                  <div className="mb-6">
                    <label className="mb-2.5 block text-base font-medium text-dark dark:text-white">
                      First name
                    </label>
                    <input
                      name="firstname"
                      type="text"
                      placeholder="First name"
                      className="w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-none duration-200 focus:border-primary dark:border-dark-3 dark:text-white dark:focus:border-primary"
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      value={formData.firstname}
                    />
                    {touched.firstname && errors.firstname && (
                      <span className="text-sm text-red-500">
                        {errors.firstname}
                      </span>
                    )}
                  </div>
                </div>

                {/* Last Name */}
                <div className="w-full px-4 sm:w-1/2">
                  <div className="mb-6">
                    <label className="mb-2.5 block text-base font-medium text-dark dark:text-white">
                      Last name
                    </label>
                    <input
                      name="lastname"
                      type="text"
                      placeholder="Last name"
                      className="h-[46px] w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-none duration-200 focus:border-primary dark:border-dark-3 dark:text-white dark:focus:border-primary"
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      value={formData.lastname}
                    />
                    {touched.lastname && errors.lastname && (
                      <span className="text-sm text-red-500">
                        {errors.lastname}
                      </span>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="w-full px-4">
                  <div className="mb-6">
                    <label className="mb-2.5 block text-base font-medium text-dark dark:text-white">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="email@company.com"
                      className="h-[46px] w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-none duration-200 focus:border-primary dark:border-dark-3 dark:text-white dark:focus:border-primary"
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      value={formData.email}
                    />
                    {touched.email && errors.email && (
                      <span className="text-sm text-red-500">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div className="w-full px-4">
                  <div className="mb-6">
                    <label className="mb-2.5 block text-base font-medium text-dark dark:text-white">
                      Phone number
                    </label>
                    <input
                      name="phone"
                      type="text"
                      placeholder="+1 (555) 444-0000"
                      className="h-[46px] w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-none duration-200 focus:border-primary dark:border-dark-3 dark:text-white dark:focus:border-primary"
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      value={formData.phone}
                    />
                    {touched.phone && errors.phone && (
                      <span className="text-sm text-red-500">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="w-full px-4">
                  <div className="mb-6">
                    <label className="mb-2.5 block text-base font-medium text-dark dark:text-white">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      placeholder="Type your message"
                      className="w-full rounded-lg border border-stroke bg-transparent p-5 text-dark placeholder-dark-5 outline-none duration-200 focus:border-primary dark:border-dark-3 dark:text-white dark:focus:border-primary"
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      value={formData.message}
                    ></textarea>
                    {touched.message && errors.message && (
                      <span className="text-sm text-red-500">
                        {errors.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="w-full px-4">
                  <button
                    type="submit"
                    name="submit"
                    className={`flex h-12 w-full items-center justify-center rounded-lg px-5 py-3 text-base font-medium text-white duration-200
                    ${
                      isDisabled
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-black hover:bg-white hover:text-black hover:border hover:border-black"
                    }`}
                    disabled={isDisabled}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="relative w-full border-4 border-slate-900 bg-[url('https://www.decorilla.com/online-decorating/wp-content/uploads/2022/03/Modern-Office-Interior-with-Open-Floor-Plan-scaled.jpeg')] bg-cover bg-center bg-no-repeat bg-fixed lg:w-1/2 lg:h-[71vh]">
          <img src="/ehab.png" alt="ehab" className="relative z-30" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
