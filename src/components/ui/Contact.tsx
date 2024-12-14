// // "use client";

// // import { send } from "process";
// // import React, { useState, useEffect, useCallback } from "react";

// // // Define the form data interface
// // interface FormData {
// //   firstname: string;
// //   lastname: string;
// //   email: string;
// //   phone: string;
// //   message: string;
// // }

// // const Contact: React.FC = () => {
// //   // State for form data
// //   const [formData, setFormData] = useState<FormData>({
// //     firstname: "",
// //     lastname: "",
// //     email: "",
// //     phone: "",
// //     message: "",
// //   });

// //   // State for errors
// //   const [errors, setErrors] = useState<Partial<FormData>>({});
// //   const [isDisabled, setIsDisabled] = useState(true);

// //   // State for tracking touched fields
// //   const [touched, setTouched] = useState<
// //     Partial<Record<keyof FormData, boolean>>
// //   >({
// //     firstname: false,
// //     lastname: false,
// //     email: false,
// //     phone: false,
// //     message: false,
// //   });

// //   // Handle input changes
// //   const handleInputChange = useCallback(
// //     (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// //       const { name, value } = e.target;
// //       setFormData((prev) => ({ ...prev, [name]: value }));

// //       // Clear specific error when user starts typing
// //       setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
// //     },
// //     []
// //   );

// //   // Handle input blur for touched fields
// //   const handleBlur = useCallback(
// //     (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// //       const { name } = e.target;
// //       setTouched((prevTouched) => ({ ...prevTouched, [name]: true }));
// //     },
// //     []
// //   );

// //   // Memoized form validation
// //   const validateForm = useCallback((): Partial<FormData> => {
// //     const newErrors: Partial<FormData> = {};

// //     if (!formData.firstname.trim())
// //       newErrors.firstname = "First name is required";
// //     if (!formData.lastname.trim()) newErrors.lastname = "Last name is required";
// //     if (!formData.email.trim()) {
// //       newErrors.email = "Email is required";
// //     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
// //       newErrors.email = "Invalid email format";
// //     }
// //     if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
// //     if (!formData.message.trim()) {
// //       newErrors.message = "Message is required";
// //     } else if (formData.message.length < 5) {
// //       newErrors.message = "Message must be at least 5 characters long";
// //     }

// //     return newErrors;
// //   }, [formData]);

// //   // Effect to validate form whenever formData changes
// //   useEffect(() => {
// //     const formErrors = validateForm();
// //     setErrors(formErrors);
// //     setIsDisabled(Object.keys(formErrors).length > 0);
// //   }, [formData, validateForm]);

// //   // Handle form submission
// //   const handleFormSubmission = useCallback(
// //     (e: React.FormEvent<HTMLFormElement>) => {
// //       e.preventDefault();
// //       const formErrors = validateForm();

// //       if (Object.keys(formErrors).length === 0) {
// //         // No errors, form is valid
// //         alert(`Form submitted successfully: ${formData.firstname}`);
// //         sendEmail(formData);
// //       } else {
// //         // Set errors if any
// //         setErrors(formErrors);
// //       }
// //     },
// //     [formData, validateForm]
// //   );

// //   const sendEmail = async(formData: FormData) => {
// //     const response = await fetch("/api/send-email", {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify(formData),
// //     }

// //     if (!response.ok) {
// //       throw new Error("Failed to send email");
// //     }

// //     const data = await response.json();
// //     console.log(data);
// //   }

// //   return (
// //     <section className="relative z-10 mt-[220px] overflow-hidden bg-white py-16 md:py-20 lg:py-28 dark:bg-dark">
// //       <div className="flex flex-col gap-4 px-10 lg:flex-row">
// //         <div className="w-full flex flex-col mt-8 justify-start lg:w-1/2">
// //           <div className="mx-auto w-full max-w-[540px]">
// //             <h3 className="mb-8 text-black font-black text-3xl">
// //               We Love To Hear From You
// //             </h3>
// //             <form onSubmit={handleFormSubmission}>
// //               <div className="-mx-4 flex flex-wrap">
// //                 {/* First Name */}
// //                 <div className="w-full px-4 sm:w-1/2">
// //                   <div className="mb-6">
// //                     <label className="mb-2.5 block text-base font-medium text-dark dark:text-white">
// //                       First name
// //                     </label>
// //                     <input
// //                       name="firstname"
// //                       type="text"
// //                       placeholder="First name"
// //                       className="w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-none duration-200 focus:border-primary dark:border-dark-3 dark:text-white dark:focus:border-primary"
// //                       onChange={handleInputChange}
// //                       onBlur={handleBlur}
// //                       value={formData.firstname}
// //                     />
// //                     {touched.firstname && errors.firstname && (
// //                       <span className="text-sm text-red-500">
// //                         {errors.firstname}
// //                       </span>
// //                     )}
// //                   </div>
// //                 </div>

// //                 {/* Last Name */}
// //                 <div className="w-full px-4 sm:w-1/2">
// //                   <div className="mb-6">
// //                     <label className="mb-2.5 block text-base font-medium text-dark dark:text-white">
// //                       Last name
// //                     </label>
// //                     <input
// //                       name="lastname"
// //                       type="text"
// //                       placeholder="Last name"
// //                       className="w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-none duration-200 focus:border-primary dark:border-dark-3 dark:text-white dark:focus:border-primary"
// //                       onChange={handleInputChange}
// //                       onBlur={handleBlur}
// //                       value={formData.lastname}
// //                     />
// //                     {touched.lastname && errors.lastname && (
// //                       <span className="text-sm text-red-500">
// //                         {errors.lastname}
// //                       </span>
// //                     )}
// //                   </div>
// //                 </div>

// //                 {/* Email */}
// //                 <div className="w-full px-4">
// //                   <div className="mb-6">
// //                     <label className="mb-2.5 block text-base font-medium text-dark dark:text-white">
// //                       Email
// //                     </label>
// //                     <input
// //                       name="email"
// //                       type="email"
// //                       placeholder="email@company.com"
// //                       className="w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-none duration-200 focus:border-primary dark:border-dark-3 dark:text-white dark:focus:border-primary"
// //                       onChange={handleInputChange}
// //                       onBlur={handleBlur}
// //                       value={formData.email}
// //                     />
// //                     {touched.email && errors.email && (
// //                       <span className="text-sm text-red-500">
// //                         {errors.email}
// //                       </span>
// //                     )}
// //                   </div>
// //                 </div>

// //                 {/* Phone */}
// //                 <div className="w-full px-4">
// //                   <div className="mb-6">
// //                     <label className="mb-2.5 block text-base font-medium text-dark dark:text-white">
// //                       Phone number
// //                     </label>
// //                     <input
// //                       name="phone"
// //                       type="text"
// //                       placeholder="+1 (555) 444-0000"
// //                       className="w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-none duration-200 focus:border-primary dark:border-dark-3 dark:text-white dark:focus:border-primary"
// //                       onChange={handleInputChange}
// //                       onBlur={handleBlur}
// //                       value={formData.phone}
// //                     />
// //                     {touched.phone && errors.phone && (
// //                       <span className="text-sm text-red-500">
// //                         {errors.phone}
// //                       </span>
// //                     )}
// //                   </div>
// //                 </div>

// //                 {/* Message */}
// //                 <div className="w-full px-4">
// //                   <div className="mb-6">
// //                     <label className="mb-2.5 block text-base font-medium text-dark dark:text-white">
// //                       Message
// //                     </label>
// //                     <textarea
// //                       name="message"
// //                       rows={6}
// //                       placeholder="Type your message"
// //                       className="w-full rounded-lg border border-stroke bg-transparent p-5 text-dark placeholder-dark-5 outline-none duration-200 focus:border-primary dark:border-dark-3 dark:text-white dark:focus:border-primary"
// //                       onChange={handleInputChange}
// //                       onBlur={handleBlur}
// //                       value={formData.message}
// //                     ></textarea>
// //                     {touched.message && errors.message && (
// //                       <span className="text-sm text-red-500">
// //                         {errors.message}
// //                       </span>
// //                     )}
// //                   </div>
// //                 </div>

// //                 {/* Submit Button */}
// //                 <div className="w-full px-4">
// //                   <button
// //                     type="submit"
// //                     className={`flex h-12 w-full items-center justify-center rounded-lg px-5 py-3 text-base font-medium text-white duration-200 ${
// //                       isDisabled
// //                         ? "bg-gray-400 cursor-not-allowed"
// //                         : "bg-black hover:bg-white hover:text-black hover:border hover:border-black"
// //                     }`}
// //                     disabled={isDisabled}
// //                   >
// //                     Send Message
// //                   </button>
// //                 </div>
// //               </div>
// //             </form>
// //           </div>
// //         </div>

// //         <div className="relative w-full border-4 border-slate-900 bg-[url('https://www.decorilla.com/online-decorating/wp-content/uploads/2022/03/Modern-Office-Interior-with-Open-Floor-Plan-scaled.jpeg')] bg-cover bg-center bg-no-repeat bg-fixed lg:w-1/2 lg:h-[71vh]">
// //           <img src="/ehab.png" alt="ehab" className="relative z-30" />
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Contact;

"use client";

import React, { useState, useEffect, useCallback } from "react";
import emailjs from "emailjs-com"; // Import EmailJS

// Define the form data interface
interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  // State for form data
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  // State for errors
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isDisabled, setIsDisabled] = useState(true);

  // State for email status
  const [emailStatus, setEmailStatus] = useState<string | null>(null);

  // State for tracking touched fields
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormData, boolean>>
  >({
    firstname: false,
    lastname: false,
    email: false,
    phone: false,
    message: false,
  });

  // Handle input changes
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));

      // Clear specific error when user starts typing
      setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
    },
    []
  );

  // Handle input blur for touched fields
  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name } = e.target;
      setTouched((prevTouched) => ({ ...prevTouched, [name]: true }));
    },
    []
  );

  // Memoized form validation
  const validateForm = useCallback((): Partial<FormData> => {
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

    return newErrors;
  }, [formData]);

  // Effect to validate form whenever formData changes
  useEffect(() => {
    const formErrors = validateForm();
    setErrors(formErrors);
    setIsDisabled(Object.keys(formErrors).length > 0);
  }, [formData, validateForm]);

  // Send email using EmailJS
  const sendEmail = useCallback(() => {
    const templateParams = {
      first_name: formData.firstname,
      last_name: formData.lastname,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      )
      .then(
        () => {
          setEmailStatus("Email sent successfully!");
          // Reset form data and touched state
          setFormData({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            message: "",
          });
          setTouched({
            firstname: false,
            lastname: false,
            email: false,
            phone: false,
            message: false,
          });
        },
        (error) => {
          console.error("Failed to send email:", error);
          setEmailStatus("Failed to send email. Please try again.");
        }
      );
  }, [formData]);

  // Handle form submission
  const handleFormSubmission = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formErrors = validateForm();

      if (Object.keys(formErrors).length === 0) {
        // No errors, form is valid
        sendEmail();
      } else {
        // Set errors if any
        setErrors(formErrors);
      }
    },
    [validateForm, sendEmail]
  );

  return (
    <section className="relative z-10 overflow-hidden bg-white pb-[150px]">
      <div className="flex flex-col gap-4 px-10 lg:flex-row">
        <div className="w-full flex flex-col mt-8 justify-start lg:w-1/2">
          <div className="mx-auto w-full max-w-[540px]">
            {emailStatus && (
              <div
                className={`mb-4 ${
                  emailStatus.includes("successfully")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {emailStatus}
              </div>
            )}
            <h2 className="text-4xl font-black text-black mb-6">
              Send us a message
            </h2>
            <form onSubmit={handleFormSubmission}>
              {/* Form fields */}
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
                      className="w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-none duration-200 focus:border-primary dark:border-dark-3 dark:text-white dark:focus:border-primary"
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
                      className="w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-none duration-200 focus:border-primary dark:border-dark-3 dark:text-white dark:focus:border-primary"
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
                      className="w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-5 outline-none duration-200 focus:border-primary dark:border-dark-3 dark:text-white dark:focus:border-primary"
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
                    className={`flex h-12 w-full items-center justify-center rounded-lg px-5 py-3 text-base font-medium text-white duration-200 ${
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
        <div className="w-full flex flex-col justify-start pt-[2%] pl-[10%] items-start lg:w-1/2 lg:h-[71vh]">
          <h2 className="text-4xl font-semibold text-black mb-4">
            Have a Project in Mind ?
          </h2>
          <h3 className="mb-4 text-gray-600 font-semibol text-xl">
            If you have any inquiries contact us directly
          </h3>
          <p>
            <a
              className="font-semibold text-lg text-black"
              href="mailtp:info@hafezdesignstudio.com"
            >
              info@hafezdesignstudio.com
            </a>
            <br />
            <a
              className="font-semibold text-lg text-black"
              href="tel:+17059882971"
            >
              +1 705 988 2971
            </a>
          </p>
          <img
            src="/450-logo.png"
            alt="ehab"
            className="w-[360px] h-[170px] z-30 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
