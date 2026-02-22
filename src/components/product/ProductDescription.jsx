import React from "react";
import { Separator } from "../ui/separator";

const ProductDescription = () => {
  return (
    <div className="mx-auto flex max-w-[1050px] flex-col gap-6 px-8 py-10 lg:px-0">
      <nav className="flex justify-between py-8 lg:justify-center lg:gap-8">
        <ul className="link text-second-text-color"> Description</ul>
        <ul className="link text-second-text-color">Additional Information</ul>
        <ul className="link text-second-text-color">Reviews</ul>
      </nav>
      <Separator />
      <div className="flex flex-col gap-8 py-6 lg:flex-row">
        <img
          src="/assets/product-detail.png"
          alt=""
          className="flex-1 object-contain object-top"
        />
        <div className="flex flex-1 flex-col gap-8 py-6 lg:py-0">
          <h1 className="h3 text-text-color">the quick fox jumps over </h1>
          <p className="paragraph text-second-text-color">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="paragraph text-second-text-color">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="paragraph text-second-text-color">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <div className="flex flex-col gap-8">
            <h1 className="h3 text-text-color">the quick fox jumps over </h1>
            <ul className="h6 text-second-text-color flex flex-col gap-3">
              <li>the quick fox jumps over the lazy dog</li>
              <li>the quick fox jumps over the lazy dog</li>
              <li>the quick fox jumps over the lazy dog</li>
              <li>the quick fox jumps over the lazy dog</li>
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="h3 text-text-color">the quick fox jumps over </h1>
            <ul className="h6 text-second-text-color flex flex-col gap-3">
              <li>the quick fox jumps over the lazy dog</li>
              <li>the quick fox jumps over the lazy dog</li>
              <li>the quick fox jumps over the lazy dog</li>
              <li>the quick fox jumps over the lazy dog</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
