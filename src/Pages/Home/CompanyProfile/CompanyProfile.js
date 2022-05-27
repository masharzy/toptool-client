import React from "react";

const CompanyProfile = () => {
  return (
    <div className="container mx-auto my-10">
      <h2 className="text-3xl font-bold mb-5">Company Profile</h2>
      <div className="flex">
        <img
          src="https://cdn.toptul.com/comm/upimage/w_220506_03859.jpg"
          className=" hidden lg:block lg:w-1/2"
          alt=""
        />
        <div>
          A GLOBAL BRAND IN THE PROFESSIONAL HAND TOOL INDUSTRY
          <br />
          <br />
          TOPTUL<sup>®</sup> is a reliable tool brand offering a comprehensive
          range of high performance and superior quality tool selections to meet
          the demands of today’s professional users. In this latest edition of
          TOPTUL<sup>®</sup> product tool catalogue, new developed and
          innovative tools, tool sets, trolleys and automotive specialty tools
          are also introduced for professionals. <br />
          <br />
          Being a quality-oriented tool company, TOPTUL<sup>®</sup> looks
          forward to leading the continual advancement of the tools not only
          just through research and development, but also by being guided by
          what is in the hearts and souls of end-users around the world.
        </div>
        {/* write 50 characters description of this manufacturer project */}
      </div>
    </div>
  );
};

export default CompanyProfile;
