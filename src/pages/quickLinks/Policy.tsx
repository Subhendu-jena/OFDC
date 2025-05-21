import React from 'react';

const Policy: React.FC = () => {
  return (
    <>
      <div className="p-3">
        {' '}
        <h2 className="text-2xl font-bold text-red-600 border-b pb-2">
          Privacy Policy
        </h2>
        <p>
          We value your privacy and collect personal information solely to
          respond to your queries. Should you choose to provide details—such as
          your email or mailing address via our Contact form—these are used only
          to address your concerns and provide the information you seek.
        </p>
        <p>
          Our platform does not engage in collecting data for advertising,
          marketing, or building individual profiles. While an email address is
          necessary to reply to your message, we strongly recommend refraining
          from sharing any additional personal information
        </p>{' '}
      </div>
      <div className="p-3">
        {' '}
        <h2 className="text-2xl font-bold text-red-600 border-b pb-2">
          Hyperlink Policy
        </h2>
        <p>
          Throughout this website, you may come across links that lead to
          external websites or portals, provided solely for your convenience.
          Please note that we do not take responsibility for the content or
          reliability of these external sources, nor should their inclusion be
          seen as an endorsement of the views they express.
        </p>
        <p>
          The presence of a link on our site does not imply any official
          approval or recommendation. Additionally, we cannot guarantee the
          functionality or continued availability of these linked pages, as they
          are beyond our control.
        </p>{' '}
      </div>
      <div className="p-3">
        {' '}
        <h2 className="text-2xl font-bold text-red-600 border-b pb-2">
          Copyright Policy
        </h2>
        <p>
          No part of this website’s content may be reproduced, in whole or in
          part, without prior permission from Odisha Film Development
          Corporation Limited. If any material from this site is referenced or
          used on another website, proper credit to the original source must be
          clearly provided. Under no circumstances should the content be used in
          a misleading or inappropriate context.
        </p>
      </div>
    </>
  );
};

export default Policy;
