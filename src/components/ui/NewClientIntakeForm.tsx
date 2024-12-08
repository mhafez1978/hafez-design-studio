// "use client";

// import React, { useState, useEffect, useCallback } from "react";
// import emailjs from "emailjs-com";

// interface FormData {
//   fullname: string;
//   phone: string;
//   email: string;
//   serviceInterest: string[];
//   additionalRooms: string;
//   hobbies: string;
//   projectTimeframe: string;
//   budget: string;
//   decisionMakers: string;
//   favouriteFood: string;
//   favouriteDrink: string;
//   favouriteFlowers: string;
//   pastExperience: string;
//   referral: string;
//   spaceFeedback: string;
// }

// const NewClientIntakeForm: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     fullname: "",
//     phone: "",
//     email: "",
//     serviceInterest: [],
//     additionalRooms: "",
//     hobbies: "",
//     projectTimeframe: "",
//     budget: "",
//     decisionMakers: "",
//     favouriteFood: "",
//     favouriteDrink: "",
//     favouriteFlowers: "",
//     pastExperience: "",
//     referral: "",
//     spaceFeedback: "",
//   });

//   const [errors, setErrors] = useState<Partial<FormData>>({});
//   const [touched, setTouched] = useState<
//     Partial<Record<keyof FormData, boolean>>
//   >({});
//   const [isDisabled, setIsDisabled] = useState(true);
//   const [emailStatus, setEmailStatus] = useState<string | null>(null);

//   const handleInputChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { value, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       serviceInterest: checked
//         ? [...prev.serviceInterest, value]
//         : prev.serviceInterest.filter((service) => service !== value),
//     }));
//   };

//   const handleBlur = (
//     e: React.FocusEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     const { name } = e.target;
//     setTouched((prev) => ({ ...prev, [name]: true }));
//   };

//   const validateForm = useCallback((): Partial<FormData> => {
//     const errors: Partial<FormData> = {};
//     if (!formData.fullname.trim()) errors.fullname = "Full name is required.";
//     if (!formData.phone.trim()) errors.phone = "Phone number is required.";
//     if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = "A valid email is required.";
//     }
//     return errors;
//   }, [formData]);

//   useEffect(() => {
//     const formErrors = validateForm();
//     setErrors((prev) =>
//       Object.keys(formErrors).reduce((acc, key) => {
//         if (touched[key as keyof FormData]) {
//           acc[key as keyof FormData] = formErrors[key as keyof FormData];
//         }
//         return acc;
//       }, {} as Partial<FormData>)
//     );
//     setIsDisabled(Object.keys(formErrors).length > 0);
//   }, [formData, validateForm, touched]);

//   // const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//   //   e.preventDefault();
//   //   const formErrors = validateForm();
//   //   if (Object.keys(formErrors).length === 0) {
//   //     sendEmail();
//   //   } else {
//   //     setTouched(
//   //       Object.keys(formErrors).reduce(
//   //         (acc, key) => ({ ...acc, [key]: true }),
//   //         {}
//   //       )
//   //     );

//   //     setErrors((prev) =>
//   //       Object.keys(formErrors).reduce(
//   //         (acc, key) => {
//   //           acc[key as keyof typeof prev] = formErrors[
//   //             key as keyof typeof formErrors
//   //           ] as string;
//   //           return acc;
//   //         },
//   //         { ...prev }
//   //       )
//   //     );
//   //   }
//   // };

//   const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const formErrors = validateForm();
//     if (Object.keys(formErrors).length === 0) {
//       sendEmail();
//     } else {
//       setTouched(
//         Object.keys(formErrors).reduce(
//           (acc, key) => ({ ...acc, [key]: true }),
//           {}
//         )
//       );

//       setErrors((prev) =>
//         Object.keys(formErrors).reduce(
//           (acc, key) => {
//             acc[key as keyof typeof prev] = formErrors[
//               key as keyof typeof formErrors
//             ] as string;
//             return acc;
//           },
//           { ...prev }
//         )
//       );
//     }
//   };

//   const sendEmail = async () => {
//     try {
//       await emailjs.send(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
//         "HDS_ClientIntake",
//         { ...formData, serviceInterest: formData.serviceInterest.join(", ") },
//         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
//       );
//       setEmailStatus("Email sent successfully!");
//       resetForm();
//       clearFormStatus();
//     } catch (error) {
//       console.error("Failed to send email:", error);
//       setEmailStatus("Failed to send email. Please try again.");
//     }
//   };

//   const clearFormStatus = () => {
//     const timeoutId = setTimeout(() => {
//       setEmailStatus(null);
//     }, 5000);
//     return () => clearTimeout(timeoutId);
//   };

//   const resetForm = () => {
//     setFormData({
//       fullname: "",
//       phone: "",
//       email: "",
//       serviceInterest: [],
//       additionalRooms: "",
//       hobbies: "",
//       projectTimeframe: "",
//       budget: "",
//       decisionMakers: "",
//       favouriteFood: "",
//       favouriteDrink: "",
//       favouriteFlowers: "",
//       pastExperience: "",
//       referral: "",
//       spaceFeedback: "",
//     });
//     setTouched({});
//   };

"use client";

import React, { useState, useEffect, useCallback } from "react";
import emailjs from "emailjs-com";

interface FormData {
  fullname: string;
  phone: string;
  email: string;
  serviceInterest: string[];
  additionalRooms: string;
  hobbies: string;
  projectTimeframe: string;
  budget: string;
  decisionMakers: string;
  favouriteFood: string;
  favouriteDrink: string;
  favouriteFlowers: string;
  pastExperience: string;
  referral: string;
  spaceFeedback: string;
}

const NewClientIntakeForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullname: "",
    phone: "",
    email: "",
    serviceInterest: [],
    additionalRooms: "",
    hobbies: "",
    projectTimeframe: "",
    budget: "",
    decisionMakers: "",
    favouriteFood: "",
    favouriteDrink: "",
    favouriteFlowers: "",
    pastExperience: "",
    referral: "",
    spaceFeedback: "",
  });

  const [errors, setErrors] = useState<
    Record<keyof FormData, string | undefined>
  >({
    fullname: undefined,
    phone: undefined,
    email: undefined,
    serviceInterest: undefined,
    additionalRooms: undefined,
    hobbies: undefined,
    projectTimeframe: undefined,
    budget: undefined,
    decisionMakers: undefined,
    favouriteFood: undefined,
    favouriteDrink: undefined,
    favouriteFlowers: undefined,
    pastExperience: undefined,
    referral: undefined,
    spaceFeedback: undefined,
  });
  const [touched, setTouched] = useState<Record<keyof FormData, boolean>>({
    fullname: false,
    phone: false,
    email: false,
    serviceInterest: false,
    additionalRooms: false,
    hobbies: false,
    projectTimeframe: false,
    budget: false,
    decisionMakers: false,
    favouriteFood: false,
    favouriteDrink: false,
    favouriteFlowers: false,
    pastExperience: false,
    referral: false,
    spaceFeedback: false,
  });

  const [isDisabled, setIsDisabled] = useState(true);
  const [emailStatus, setEmailStatus] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      serviceInterest: checked
        ? [...prev.serviceInterest, value]
        : prev.serviceInterest.filter((service) => service !== value),
    }));
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const validateForm = useCallback((): Partial<FormData> => {
    const errors: Partial<FormData> = {};
    if (!formData.fullname.trim()) errors.fullname = "Full name is required.";
    if (!formData.phone.trim()) errors.phone = "Phone number is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "A valid email is required.";
    }
    return errors;
  }, [formData]);

  useEffect(() => {
    const formErrors = validateForm();
    setErrors((prev) =>
      Object.keys(formErrors).reduce(
        (acc, key) => {
          if (touched[key as keyof FormData]) {
            acc[key as keyof FormData] =
              typeof formErrors[key as keyof FormData] === "string"
                ? (formErrors[key as keyof FormData] as string)
                : undefined;
          }
          return acc;
        },
        { ...prev }
      )
    );
    setIsDisabled(Object.keys(formErrors).length > 0);
  }, [formData, validateForm, touched]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      sendEmail();
    } else {
      setTouched(
        Object.keys(formErrors).reduce(
          (acc, key) => ({ ...acc, [key]: true }),
          {
            fullname: false,
            phone: false,
            email: false,
            serviceInterest: false,
            additionalRooms: false,
            hobbies: false,
            projectTimeframe: false,
            budget: false,
            decisionMakers: false,
            favouriteFood: false,
            favouriteDrink: false,
            favouriteFlowers: false,
            pastExperience: false,
            referral: false,
            spaceFeedback: false,
          }
        )
      );

      setErrors((prev) =>
        Object.keys(formErrors).reduce(
          (acc, key) => {
            if (touched[key as keyof FormData]) {
              acc[key as keyof FormData] = formErrors[
                key as keyof FormData
              ] as string; // Assert as string
            }
            return acc;
          },
          { ...prev }
        )
      );
    }
  };

  const sendEmail = async () => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        "HDS_ClientIntake",
        { ...formData, serviceInterest: formData.serviceInterest.join(", ") },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );
      setEmailStatus("Email sent successfully!");
      resetForm();
      clearFormStatus();
    } catch (error) {
      console.error("Failed to send email:", error);
      setEmailStatus("Failed to send email. Please try again.");
    }
  };

  const clearFormStatus = () => {
    const timeoutId = setTimeout(() => {
      setEmailStatus(null);
    }, 5000);
    return () => clearTimeout(timeoutId);
  };

  const resetForm = () => {
    setFormData({
      fullname: "",
      phone: "",
      email: "",
      serviceInterest: [],
      additionalRooms: "",
      hobbies: "",
      projectTimeframe: "",
      budget: "",
      decisionMakers: "",
      favouriteFood: "",
      favouriteDrink: "",
      favouriteFlowers: "",
      pastExperience: "",
      referral: "",
      spaceFeedback: "",
    });
    setTouched({
      fullname: false,
      phone: false,
      email: false,
      serviceInterest: false,
      additionalRooms: false,
      hobbies: false,
      projectTimeframe: false,
      budget: false,
      decisionMakers: false,
      favouriteFood: false,
      favouriteDrink: false,
      favouriteFlowers: false,
      pastExperience: false,
      referral: false,
      spaceFeedback: false,
    });
  };

  return (
    <section className="relative z-10 mt-[8vh] overflow-hidden bg-gray-100 py-16 md:py-20 lg:py-28">
      <div className="flex flex-col gap-4 px-10 lg:flex-row">
        <div className="w-full flex flex-col mt-8 justify-center lg:w-1/2 lg:mx-auto">
          <div className="mx-auto w-full max-w-[540px]">
            <h3 className="mb-8 text-black font-black text-3xl">
              Design Intake Questionnaire
            </h3>

            <form onSubmit={handleFormSubmit}>
              {/* Full Name */}
              <div className="mb-6">
                <label htmlFor="fullname" className="block font-bold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleInputChange}
                  className="border rounded-md p-2 w-full"
                  onBlur={handleBlur}
                  required
                />
                {errors.fullname && (
                  <p className="text-red-500">{errors.fullname}</p>
                )}
              </div>

              {/* Phone */}
              <div className="mb-6">
                <label htmlFor="phone" className="block font-bold mb-2">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="border rounded-md p-2 w-full"
                  onBlur={handleBlur}
                  required
                />
                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
              </div>

              {/* Email */}
              <div className="mb-6">
                <label htmlFor="email" className="block font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border rounded-md p-2 w-full"
                  onBlur={handleBlur}
                  required
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>

              {/* Service Interest */}
              <div className="mb-6">
                <label className="block font-bold mb-2">
                  Which Service are you interested in? Check all that apply:
                </label>
                {[
                  "Full Service Interior Design",
                  "Space Planning / Furniture Selection",
                  "Kitchen / Bath Design",
                  "Basement Design / Legalize",
                  "Custom Millwork Design",
                  "Commercial Design",
                  "Residential Design",
                  "Project Management",
                ].map((service) => (
                  <label key={service} className="block">
                    <input
                      type="checkbox"
                      name="serviceInterest"
                      value={service}
                      checked={formData.serviceInterest.includes(service)}
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    {service}
                  </label>
                ))}
              </div>

              {/* Additional Rooms */}
              <div className="mb-6">
                <label
                  htmlFor="additionalRooms"
                  className="block font-bold mb-2"
                >
                  Are there other rooms or spaces you want to focus on?
                </label>
                <textarea
                  id="additionalRooms"
                  name="additionalRooms"
                  value={formData.additionalRooms}
                  onChange={handleInputChange}
                  className="border rounded-md p-2 w-full"
                  onBlur={handleBlur}
                />
              </div>

              {/* Hobbies */}
              <div className="mb-6">
                <label htmlFor="hobbies" className="block font-bold mb-2">
                  Do you have any hobbies or collections that need to be
                  factored in?
                </label>
                <textarea
                  id="hobbies"
                  name="hobbies"
                  value={formData.hobbies}
                  onChange={handleInputChange}
                  className="border rounded-md p-2 w-full"
                  onBlur={handleBlur}
                />
              </div>

              {/* Project Timeframe */}
              <div className="mb-6">
                <label
                  htmlFor="projectTimeframe"
                  className="block font-bold mb-2"
                >
                  What is your project timeframe?
                </label>
                <input
                  type="text"
                  id="projectTimeframe"
                  name="projectTimeframe"
                  value={formData.projectTimeframe}
                  onChange={handleInputChange}
                  className="border rounded-md p-2 w-full"
                  onBlur={handleBlur}
                />
              </div>

              {/* Budget */}
              <div className="mb-6">
                <label htmlFor="budget" className="block font-bold mb-2">
                  What is your Budget?
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="border rounded-md p-2 w-full"
                >
                  <option value="">Select your budget</option>
                  <option value="5000-10000">5000 - 10000 CAD$</option>
                  <option value="10000-20000">10000 - 20000 CAD$</option>
                  <option value="20000-30000">20000 - 30000 CAD$</option>
                  <option value="30000-50000">30000 - 50000 CAD$</option>
                  <option value="50000-70000">50000 - 70000 CAD$</option>
                  <option value="70000-100000">70000 - 100000 CAD$</option>
                  <option value="100000-UP">100000 CAD$ - UP</option>
                </select>
              </div>

              {/* Decision Makers */}
              <div className="mb-6">
                <label
                  htmlFor="decisionMakers"
                  className="block font-bold mb-2"
                >
                  Who are all the decision makers on this project?
                </label>
                <textarea
                  id="decisionMakers"
                  name="decisionMakers"
                  value={formData.decisionMakers}
                  onChange={handleInputChange}
                  className="border rounded-md p-2 w-full"
                  onBlur={handleBlur}
                />
              </div>

              {/* Favourite Food */}
              <div className="mb-6">
                <label htmlFor="favouriteFood" className="block font-bold mb-2">
                  What is your favourite food?
                </label>
                <input
                  type="text"
                  id="favouriteFood"
                  name="favouriteFood"
                  value={formData.favouriteFood}
                  onChange={handleInputChange}
                  className="border rounded-md p-2 w-full"
                  onBlur={handleBlur}
                />
              </div>

              {/* Favourite Drink */}
              <div className="mb-6">
                <label
                  htmlFor="favouriteDrink"
                  className="block font-bold mb-2"
                >
                  What is your favourite drink?
                </label>
                <input
                  type="text"
                  id="favouriteDrink"
                  name="favouriteDrink"
                  value={formData.favouriteDrink}
                  onChange={handleInputChange}
                  className="border rounded-md p-2 w-full"
                  onBlur={handleBlur}
                />
              </div>

              {/* Favourite Flowers */}
              <div className="mb-6">
                <label
                  htmlFor="favouriteFlowers"
                  className="block font-bold mb-2"
                >
                  What are your favourite flowers?
                </label>
                <input
                  type="text"
                  id="favouriteFlowers"
                  name="favouriteFlowers"
                  value={formData.favouriteFlowers}
                  onChange={handleInputChange}
                  className="border rounded-md p-2 w-full"
                  onBlur={handleBlur}
                />
              </div>

              {/* Past Experience */}
              <div className="mb-6">
                <label
                  htmlFor="pastExperience"
                  className="block font-bold mb-2"
                >
                  Have you worked with a designer before? How was your
                  experience?
                </label>
                <textarea
                  id="pastExperience"
                  name="pastExperience"
                  value={formData.pastExperience}
                  onChange={handleInputChange}
                  className="border rounded-md p-2 w-full"
                  onBlur={handleBlur}
                />
              </div>

              {/* Referral */}
              <div className="mb-6">
                <label htmlFor="referral" className="block font-bold mb-2">
                  How did you hear about my design studio?
                </label>
                <input
                  type="text"
                  id="referral"
                  name="referral"
                  value={formData.referral}
                  onChange={handleInputChange}
                  className="border rounded-md p-2 w-full"
                  onBlur={handleBlur}
                />
              </div>

              {/* Space Feedback */}
              <div className="mb-6">
                <label htmlFor="spaceFeedback" className="block font-bold mb-2">
                  What do you already love or hate about the space you want to
                  design?
                </label>
                <textarea
                  id="spaceFeedback"
                  name="spaceFeedback"
                  value={formData.spaceFeedback}
                  onChange={handleInputChange}
                  className="border rounded-md p-2 w-full"
                  onBlur={handleBlur}
                />
              </div>

              <div className="flex flex-row gap-6 items-center justify-start">
                <button
                  type="submit"
                  className={`border bg-black text-white py-3 px-6 rounded ${
                    isDisabled ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={isDisabled}
                >
                  Submit
                </button>
                {emailStatus && (
                  <span
                    className={`py-3 px-6 ${
                      emailStatus.includes("successfully")
                        ? "text-emerald-400"
                        : "text-red-500"
                    }`}
                  >
                    {emailStatus}
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewClientIntakeForm;
