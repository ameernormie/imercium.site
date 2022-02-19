import React from "react";
import Head from "next/head";

import { HeadingWithDescription, InnerPageHeader } from "../../components";
import PrivacyPolicyStyle from "./PrivacyPolicy.style";

export default function PrivacyPolicy() {
  return (
    <PrivacyPolicyStyle>
      <Head>
        <title>imercium - Privacy</title>
        <meta name="description" content="Privacy policy" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>

      <InnerPageHeader
        slogan="imercium Privacy Policy"
        image="/images/privacy/privacy-policy.png"
      />

      <div className="privacy-content">
        <p className="description">
          Any activity that infringes terms of this Agreement violates copyright
          law and will be prosecuted according to the current law. We reserve
          the right to revoke the license of any user who is holding an invalid
          license.
        </p>

        <p className="description">
          By purchasing any product (Software) from imercium you agree to the
          following terms (Agreement):
        </p>

        <ul className="privacy-list">
          <li>
            We are the copyright holder of the Software. The Software or a
            portion of it is a copyrightable matter and is liable to protection
            by the law. You may not use any part of the code in whole or part in
            any other software or product or website.
          </li>
          <li>
            You may not give, sell, distribute, sub-license, rent, lease or lend
            any portion of the Software or Documentation to anyone.
          </li>
          <li>
            We are the copyright holder of the Software. The Software or a
            portion of it is a copyrightable matter and is liable to protection
            by the law. You may not use any part of the code in whole or part in
            any other software or product or website.
          </li>
          <li>
            You may not give, sell, distribute, sub-license, rent, lease or lend
            any portion of the Software or Documentation to anyone.
          </li>
          <li>
            We are the copyright holder of the Software. The Software or a
            portion of it is a copyrightable matter and is liable to protection
            by the law. You may not use any part of the code in whole or part in
            any other software or product or website.
          </li>
          <li>
            You may not give, sell, distribute, sub-license, rent, lease or lend
            any portion of the Software or Documentation to anyone.
          </li>
          <li>
            We are the copyright holder of the Software. The Software or a
            portion of it is a copyrightable matter and is liable to protection
            by the law. You may not use any part of the code in whole or part in
            any other software or product or website.
          </li>
          <li>
            You may not give, sell, distribute, sub-license, rent, lease or lend
            any portion of the Software or Documentation to anyone.
          </li>
          <li>
            We are the copyright holder of the Software. The Software or a
            portion of it is a copyrightable matter and is liable to protection
            by the law. You may not use any part of the code in whole or part in
            any other software or product or website.
          </li>
          <li>
            You may not give, sell, distribute, sub-license, rent, lease or lend
            any portion of the Software or Documentation to anyone.
          </li>
        </ul>

        <HeadingWithDescription
          heading="Data Retention"
          description="Any personal data we might receive for the purpose of providing the Service will be deleted 2 days after the merchant stops using the Service and uninstalls the app, unless we have to keep it longer for business purposes.

          The customer's data is automatically deleted if we receive an automated request from the Platform to delete data about a specific customer. We also automatically delete subscriptions and all data associated with them if we receive a request from the Platform to delete data related to specific orders.
          
          The customer's data related to cancelled subscriptions is automatically deleted 2 days after cancellation, if the merchant turns on the option to automatically delete cancelled subscriptions."
        />
        <HeadingWithDescription
          heading="Email Address"
          description="E-mail address must be valid because it will be used for communication purposes. It is strongly recommended to use an e-mail address associated with your company. Free emails can be used for registration and checkout process, but orders placed using free email service addresses will be checked more thoroughly and may take longer for activation as a result."
        />

        <HeadingWithDescription
          heading="Download"
          description="All products are available for download once the payment has been accepted and verified. If you can’t download a product please check the status of your payment via payment processor interface or contact us in case of any problem."
        />

        <HeadingWithDescription
          heading="We reserve the Right"
          description="We reserve the right to refuse support and or customization for certain types of sites which include the following; Adult Toys, Sex related, Alcohol, and any illegal drug related."
        />
        <HeadingWithDescription
          heading="Changes to this privacy policy"
          description="We may update this document from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this document periodically for any changes. Changes to this document are effective when they are posted on this page."
        />
        <HeadingWithDescription
          heading="Questions and contact information"
          description="If you would like to request, access or delete any personal information we have about you or want more information about this privacy policy contact our Data Protection Officer at imercium@gmail.com."
        />
      </div>
    </PrivacyPolicyStyle>
  );
}
