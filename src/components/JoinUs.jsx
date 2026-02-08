import React, { useState } from "react";
import { Button } from "./ui/button";

const JoinUs = ({ api }) => {
  const [email, setEmail] = useState("");

  function handleEmailSubmit(e) {
    e.preventDefault();
    console.log(email);
    setEmail("");
  }

  return (
    <div>
      <form className="flex" onSubmit={handleEmailSubmit}>
        <input
          placeholder="Your Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="bg-primary-foreground pl-1 text-center"
        ></input>
        <Button
          variant={"default"}
          size={"lg"}
          className="bg-slider-bg hover:bg-slider-bg/80 text-light-text-color w-max-[117px] rounded-l-none font-bold"
        >
          Subscribe
        </Button>
      </form>
    </div>
  );
};

export default JoinUs;
