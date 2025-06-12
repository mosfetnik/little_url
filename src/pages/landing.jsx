import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [longUrl, setLongUrl] = useState();
  const navigate = useNavigate()

  function handleShorten(e) {
    e.preventDefault();
   if(longUrl) navigate(`/auth?createNew=${longUrl}`)
  }
  return (
    <div className="my-10 sm:my-16 text-center text-white px-4">
      <h1 className="text-3xl sm:text-6xl lg:text-7xl font-extrabold">
        🚀 Fast. Simple. Reliable.
      </h1>

      <p className="mt-4 text-xl sm:text-2xl lg:text-3xl text-gray-300 dark:text-gray-400 font-medium">
        A better way to share your links —{" "}
        <span className="text-purple-400 dark:text-purple-300 font-semibold">
          beautifully short
        </span>
        .
      </p>

      <form
        onSubmit={handleShorten}
        className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-3/4 md:w-2/4 mx-auto"
      >
        <Input
          value={longUrl}
          type="url"
          className="w-full sm:flex-1 h-12 sm:h-14 text-white-200"
          placeholder="Paste your link here..."
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <Button
          className="h-12 sm:h-14 px-6 text-base sm:text-lg font-semibold"
          type="submit"
        >
          Shorten
        </Button>
      </form>
      <Accordion type="multiple" collapsible className="w-full md:px-12">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default LandingPage;
