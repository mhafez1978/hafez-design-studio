import React from "react";

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">Effective Date: [Insert Date]</p>
      <p className="mb-6">
        Welcome to <strong>Hafez Design Studio</strong> (“we,” “us,” or “our”).
        By accessing or using our website,{" "}
        <a
          href="https://HafezDesignStudio.com"
          className="text-blue-600 underline"
        >
          HafezDesignStudio.com
        </a>{" "}
        (the “Website”), you agree to comply with and be bound by the following
        Terms of Service. If you do not agree, please do not use our Website or
        services.
      </p>

      <h2 className="text-2xl font-semibold mb-4">1. Use of the Website</h2>
      <p className="mb-4">
        1.1. You agree to use the Website and services provided by Hafez Design
        Studio only for lawful purposes and in accordance with these Terms.
      </p>
      <p className="mb-4">
        1.2. You must not:
        <ul className="list-disc ml-6">
          <li>
            Use the Website in any way that violates applicable federal, state,
            or local laws and regulations.
          </li>
          <li>
            Attempt to gain unauthorized access to our systems or third-party
            systems related to the Website.
          </li>
          <li>
            Engage in any conduct that restricts or inhibits any other
            user&apos;s use or enjoyment of the Website.
          </li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mb-4">2. Intellectual Property</h2>
      <p className="mb-4">
        2.1. All content on this Website, including text, graphics, logos,
        images, and software, is the property of Hafez Design Studio or its
        licensors and is protected by copyright, trademark, and other
        intellectual property laws.
      </p>
      <p className="mb-4">
        2.2. You are not permitted to copy, reproduce, distribute, or modify any
        content from the Website without our express written permission.
      </p>

      <h2 className="text-2xl font-semibold mb-4">3. User Content</h2>
      <p className="mb-4">
        3.1. Any content you upload, post, or otherwise submit to the Website
        (e.g., reviews, testimonials, or comments) remains your property, but
        you grant us a worldwide, royalty-free, irrevocable license to use,
        reproduce, and display such content.
      </p>
      <p className="mb-4">
        3.2. You represent and warrant that any content you submit does not
        infringe on the rights of any third party or violate any laws.
      </p>

      <h2 className="text-2xl font-semibold mb-4">4. Services</h2>
      <p className="mb-4">
        4.1. Hafez Design Studio provides services such as web design, branding,
        and digital marketing. Specific terms for these services will be agreed
        upon in a separate contract.
      </p>
      <p className="mb-4">
        4.2. We reserve the right to modify or discontinue any services offered
        on the Website at any time without notice.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        5. Disclaimer of Warranties
      </h2>
      <p className="mb-4">
        5.1. The Website and its services are provided “as is” and “as
        available” without warranties of any kind, either express or implied,
        including but not limited to implied warranties of merchantability,
        fitness for a particular purpose, or non-infringement.
      </p>
      <p className="mb-4">
        5.2. We do not warrant that the Website or its content will be
        error-free, uninterrupted, or free of harmful components.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        6. Limitation of Liability
      </h2>
      <p className="mb-4">
        6.1. To the maximum extent permitted by law, Hafez Design Studio and its
        employees, affiliates, or agents shall not be liable for any damages
        arising out of or related to your use of the Website or services,
        including but not limited to direct, indirect, incidental, or
        consequential damages.
      </p>

      <h2 className="text-2xl font-semibold mb-4">7. Indemnification</h2>
      <p className="mb-4">
        7.1. You agree to indemnify and hold harmless Hafez Design Studio from
        any claims, damages, or losses arising from your use of the Website or
        your breach of these Terms.
      </p>

      <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
      <p className="mb-4">
        8.1. These Terms are governed by and construed in accordance with the
        laws of the State of [Insert State], without regard to its conflict of
        law principles.
      </p>

      <h2 className="text-2xl font-semibold mb-4">9. Changes to the Terms</h2>
      <p className="mb-4">
        9.1. We reserve the right to modify these Terms of Service at any time.
        Updates will be posted on this page with the effective date. Continued
        use of the Website constitutes acceptance of the updated Terms.
      </p>
    </div>
  );
};

export default TermsOfService;
