import MainContact from "@/components/contact/MainContact";
import VisitContact from "@/components/contact/VisitContact";
import { Button } from "@/components/ui/button";
import { CornerRightDown } from "lucide-react";
import React from "react";

const ContactPage = () => {
  return (
    <div className="mx-auto max-w-[1050px] px-10 text-center lg:px-0">
      <MainContact />
      <VisitContact />
      <div className="flex flex-col items-center pt-9 pb-28">
        <CornerRightDown className="text-primary-color size-30" />
        <div className="flex flex-col items-center gap-8">
          <h6 className="h5">WE Can't WAIT TO MEET YOU</h6>
          <h2 className="h1">Let’s Talk</h2>
          <Button>
            <p className="btn-text">Try it free now</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
