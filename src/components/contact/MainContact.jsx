import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const MainContact = () => {
  return (
    <div className="flex flex-col gap-10 lg:flex-row">
      <div className="flex flex-col items-center gap-10 py-2.5 lg:items-start lg:text-left">
        <h5 className="h5">CONTACT US</h5>
        <h1 className="h2">Get in touch today!</h1>
        <h4 className="h4">
          We know how large objects will act, but things on a small scale just
          do not act that way.
        </h4>
        <div className="h3">
          <p>Phone : +451 215 215</p>
          <p>Fax : +451 215 215</p>
        </div>
        <div className="flex gap-4">
          <Twitter />
          <Facebook />
          <Instagram />
          <Linkedin />
        </div>
      </div>
      <img src="/assets/contact1.png" alt="" />
    </div>
  );
};

export default MainContact;
