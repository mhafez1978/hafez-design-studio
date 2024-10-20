"use client";
import React, { useState, useEffect } from "react";
//import Image from "next/image";

// Define the form data type with proper typing for serviceInterest
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
  // Initialize form data with default values
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

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isDisabled, setIsDisabled] = useState(true);

  //Tracks whether the user has interacted with the field
  // const [touched, setTouched] = useState<
  //   Partial<Record<keyof FormData, boolean>>
  // >({});

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear errors on input
  };

  // Handle checkbox changes for service interest
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      serviceInterest: checked
        ? [...prevData.serviceInterest, value]
        : prevData.serviceInterest.filter((item) => item !== value),
    }));
  };

  // Memoized function for form validation
  //const validateForm = useCallback(() => {}, []);

  // useEffect to validate the form whenever formData changes
  useEffect(() => {
    setIsDisabled(true);
  }, []);

  // Handle form submission
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="relative z-10 mt-[8vh] overflow-hidden bg-gray-100 py-16 md:py-20 lg:py-28 ">
      <div className="flex flex-col gap-4 px-10 lg:flex-row">
        {/* Form section */}
        <div className="w-full flex flex-col mt-8  justify-center lg:w-1/2 lg:mx-auto">
          <div className="mx-auto w-full max-w-[540px]">
            <h3 className="mb-8 text-black font-black text-3xl">
              Design Intake Questionnaire
            </h3>
            <form onSubmit={handleFormSubmit}>
              {/* fullname */}
              <div className="mb-6">
                <label htmlFor="fullname" className="block font-bold mb-2">
                  Full Name
                </label>
                <input
                  type="fullname"
                  id="fullname"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleInputChange}
                  className="border rounded-md p-2 w-full"
                  required
                />
                {errors.fullname && (
                  <p className="text-red-500">{errors.fullname}</p>
                )}
              </div>
              {/* phone */}
              <div className="mb-6">
                <label htmlFor="phone" className="block font-bold mb-2">
                  phone
                </label>
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="border rounded-md p-2 w-full"
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
                  required
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>

              {/* Service Interest */}
              <div className="mb-6">
                <label className="block font-bold mb-2">
                  Which Service are you interested in? Check all that apply:
                </label>
                <div className="flex flex-col">
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
                    <label key={service}>
                      <input
                        type="checkbox"
                        name="serviceInterest"
                        value={service}
                        checked={formData.serviceInterest.includes(service)}
                        onChange={handleCheckboxChange}
                      />{" "}
                      {service}
                    </label>
                  ))}
                </div>
                {errors.serviceInterest && (
                  <p className="text-red-500">{errors.serviceInterest}</p>
                )}
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
                />
                {errors.additionalRooms && (
                  <p className="text-red-500">{errors.additionalRooms}</p>
                )}
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
                />
                {errors.hobbies && (
                  <p className="text-red-500">{errors.hobbies}</p>
                )}
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
                  placeholder="Ready to start / 1-3 months / 3-6 months / 6-12 months / 1 year +"
                />
                {errors.projectTimeframe && (
                  <p className="text-red-500">{errors.projectTimeframe}</p>
                )}
              </div>

              {/* Budget */}
              <div className="mb-6">
                <label className="block font-bold mb-2">
                  What is your Budget?
                </label>
                <select
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
                {errors.budget && (
                  <p className="text-red-500">{errors.budget}</p>
                )}
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
                />
                {errors.decisionMakers && (
                  <p className="text-red-500">{errors.decisionMakers}</p>
                )}
              </div>

              {/* Favorite Food */}
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
                />
                {errors.favouriteFood && (
                  <p className="text-red-500">{errors.favouriteFood}</p>
                )}
              </div>

              {/* Favorite Drink */}
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
                />
                {errors.favouriteDrink && (
                  <p className="text-red-500">{errors.favouriteDrink}</p>
                )}
              </div>

              {/* Favorite Flowers */}
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
                />
                {errors.favouriteFlowers && (
                  <p className="text-red-500">{errors.favouriteFlowers}</p>
                )}
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
                />
                {errors.pastExperience && (
                  <p className="text-red-500">{errors.pastExperience}</p>
                )}
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
                />
                {errors.referral && (
                  <p className="text-red-500">{errors.referral}</p>
                )}
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
                />
                {errors.spaceFeedback && (
                  <p className="text-red-500">{errors.spaceFeedback}</p>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="border border-white bg-black text-white rounded-lg py-4 px-12 hover:bg-white hover:text-black hover:ring-4 hover:ring-offset-slate-200"
                  disabled={isDisabled}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewClientIntakeForm;
