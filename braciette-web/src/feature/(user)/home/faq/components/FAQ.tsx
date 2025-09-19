"use client";
import Image from "next/image";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { FAQData } from "../data/faq-data";

function FAQ() {
  // State for search functionality
  const [searchTerm, setSearchTerm] = useState("");

  // Filter FAQ items based on search term
  const filteredFAQs = FAQData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="faq" className="pb-[20dvh] scroll-mt-45">
      <div className="w-full h-full flex flex-col justify-center items-center relative">
        <div className="hidden 2xl:block absolute w-25 right-0 top-20">
          <Image
            src="/landing-page/yellow-star-group.svg"
            alt="stars"
            width={100}
            height={100}
            className="w-full h-auto"
          />
        </div>
        <div className="hidden 2xl:block absolute w-25 left-0 top-50 rotate-180">
          <Image
            src="/landing-page/yellow-star-group.svg"
            alt="stars"
            width={100}
            height={100}
            className="w-full h-auto"
          />
        </div>
        {/* Title with existing stars */}
        <h1
          className="relative font-yourmate text-green text-center mb-16"
          style={{ fontSize: "clamp(30px, 5vw, 72px)" }}
        >
          Frequently Asked Question
          {/* Star 1 */}
          <div className="hidden xl:block absolute -top-12 -left-18">
            <div className="w-15">
              <Image
                src="/landing-page/star-pink.svg"
                alt="Lines Background"
                width={100}
                height={100}
                className="w-full h-auto"
              />
            </div>
          </div>
          {/* Star 2 */}
          <div className="hidden xl:block absolute top-12 -left-20">
            <div className="w-8">
              <Image
                src="/landing-page/star-pink.svg"
                alt="Lines Background"
                width={100}
                height={100}
                className="w-full h-auto"
              />
            </div>
          </div>
          {/* Star 3 */}
          <div className="hidden xl:block absolute top-8 -right-18">
            <div className="w-15">
              <Image
                src="/landing-page/star-pink.svg"
                alt="Lines Background"
                width={100}
                height={100}
                className="w-full h-auto"
              />
            </div>
          </div>
        </h1>

        {/* Main FAQ Content - Two Column Layout */}
        <div className="w-full max-w-7xl flex xl:flex-row flex-col justify-center gap-16 px-8 z-50">
          {/* Left Column - Mascot */}
          <div className="hidden xl:flex flex-shrink-0 w-1/3 justify-center items-center self-center xl:self-start">
            <div className="relative w-[400px] h-[400px]">
              <Image
                src="/landing-page/faq-mascot.svg"
                alt="FAQ Mascot"
                fill={true}
                objectFit="contain"
              />
            </div>
          </div>

          {/* Right Column - FAQ Feature */}
          <div className="flex-1 space-y-8">
            {/* Search Bar using shadcn Input */}
            <div className="relative z-50">
              <Input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 h-auto text-white placeholder-white/70 bg-transparent border-2 border-white rounded-2xl text-lg focus-visible:border-pink-400 focus-visible:ring-0 transition-colors"
              />
              {/* Search Icon */}
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* FAQ Items using shadcn Accordion */}
            <Accordion
              type="multiple"
              className="space-y-4 max-h-[20rem] overflow-y-auto border-b-2 pb-4"
            >
              {filteredFAQs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="rounded-2xl overflow-hidden transition-all duration-300 border-none pb-0"
                >
                  {/* Question Header - Always Visible */}
                  <AccordionTrigger className="font-poppins bg-pink w-full px-6 pt-4 text-left text-white font-medium text-lg hover:bg-pink-600 hover:no-underline transition-colors flex justify-between items-center [&>svg]:text-white [&>svg]:w-6 [&>svg]:h-6">
                    {faq.question}
                  </AccordionTrigger>

                  {/* Answer - Expandable with dark navy background */}
                  <AccordionContent className="w-full h-full border-2 border-t-0 pb-0 border-white rounded-b-2xl">
                    <div className="bg-white/1 backdrop-blur-xs rounded-b-2xl px-6 py-4 text-white/90 border border-white/20">
                      <p className="font-poppins font-bold">{faq.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* No Results Message */}
            {filteredFAQs.length === 0 && (
              <div className="text-center text-white/70 py-8">
                <p>No FAQ items found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
