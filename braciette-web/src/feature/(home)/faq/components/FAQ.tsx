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

// Mock FAQ data - easy to replace with real data later
const FAQ_DATA: Array<{ id: string; question: string; answer: string }> = [
  {
    id: "item-1",
    question: "How do I cast my vote on this platform?",
    answer:
      "To cast your vote, simply log in to your account, navigate to the voting page, select your preferred option, and click the 'Submit Vote' button. You'll receive a confirmation once your vote is recorded.",
  },
  {
    id: "item-2",
    question: "Can I change my vote after submitting it?",
    answer:
      "No, once a vote is submitted, it cannot be changed or withdrawn. Please review your selection carefully before confirming your vote.",
  },
  {
    id: "item-3",
    question: "Is my vote anonymous?",
    answer:
      "Yes, all votes are kept anonymous. The system only records the number of votes each option receives, without linking votes to individual accounts.",
  },
  {
    id: "item-4",
    question: "Do I need an account to vote?",
    answer:
      "Yes, you must create and log in to your account to ensure that each user can only vote once. This helps maintain fairness and prevents duplicate voting.",
  },
  {
    id: "item-5",
    question: "When will the voting results be announced?",
    answer:
      "The results will be available immediately after the voting period ends. You can check the 'Results' page to see the outcomes in real time once voting closes.",
  },
];

function FAQ() {
  // State for search functionality
  const [searchTerm, setSearchTerm] = useState("");

  // Filter FAQ items based on search term
  const filteredFAQs = FAQ_DATA.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="faq" className="pb-[20dvh] scroll-mt-45">
      <div className="w-full h-full flex flex-col justify-center items-center">
        {/* Title with existing stars */}
        <h1
          className="relative font-yourmate text-green text-center mb-16"
          style={{ fontSize: "clamp(30px, 5vw, 72px)" }}
        >
          Frequently Asked Question
          {/* Star 1 */}
          <div className="hidden md:block absolute -top-12 -left-6 lg:-top-10 lg:-left-10 xl:-top-9 xl:-left-18">
            <div className="relative w-[3dvw] h-[9dvh]">
              <Image
                src="/landing-page/star-pink.svg"
                alt="Lines Background"
                fill={true}
                objectFit="contain"
              />
            </div>
          </div>
          {/* Star 2 */}
          <div className="hidden md:block absolute top-2 -left-10 lg:top-6 lg:-left-16 xl:top-8 xl:-left-24">
            <div className="relative w-[3dvw] h-[5dvh]">
              <Image
                src="/landing-page/star-pink.svg"
                alt="Lines Background"
                fill={true}
                objectFit="contain"
              />
            </div>
          </div>
          {/* Star 3 */}
          <div className="hidden md:block absolute top-1 -right-8 lg:top-3 lg:-right-10 xl:top-9 xl:-right-18">
            <div className="relative w-[3dvw] h-[9dvh]">
              <Image
                src="/landing-page/star-pink.svg"
                alt="Lines Background"
                fill={true}
                objectFit="contain"
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
            <Accordion type="multiple" className="space-y-4 overflow-scroll">
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
