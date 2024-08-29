import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FormFAQ from "@/components/custom/FormFAQ";

const qna = [
  {
    id: 1,
    quest: "What is IT MEET?",
    ans: "IT MEET is a non-profit, student-organized university-level tech meetup held annually at Kathmandu University, Dhulikhel. It is a collaborative effort of the Kathmandu University Computer Club (KUCC) and the Department of Computer Science and Engineering (DoCSE). IT MEET focuses on celebrating recent achievements in the field of information and technology, providing opportunities for tech enthusiasts to share innovative ideas, compete with their peers, and gain real-world experience.",
  },
  {
    id: 2,
    quest: "When and where will IT MEET 2024 take place?",
    ans: "IT MEET 2023 will be held at Kathmandu University, Dhulikhel and the Date is yet to be determined.",
  },
  {
    id: 3,
    quest: "What is the theme of IT MEET 2024?",
    ans: "TBD",
  },
  {
    id: 4,
    quest:
      "What types of events and competitions can I expect at IT MEET 2024?",
    ans: "IT MEET 2024 will feature a variety of tech and non-tech-related events, including Coding challenges, Codecamps, Robomaze, Project Exhibition, Panel Discussion, and many more. You can visit our website and official social media pages for more information.",
  },
  {
    id: 5,
    quest: "How can I participate in the different events of IT MEET 2024?",
    ans: "To register for different events at IT MEET 2024, please stay informed by following our official social media pages, where we will regularly post updates about event registrations.",
  },
  {
    id: 6,
    quest: "Is IT MEET only for students of Kathmandu University?",
    ans: "IT MEET is open to students from various schools, colleges, and universities. If you're 16 years or older and currently in high school, college, or graduate school, you can participate in IT MEET 2024.",
  },
  {
    id: 7,
    quest: "Are there any age restrictions for participants?",
    ans: "There is no age restriction for participants of IT MEET 2024. It is a tech festival where we invite people from diverse backgrounds.",
  },
  {
    id: 8,
    quest:
      "If I am interested in becoming a sponsor for IT MEET 2024 or have sponsorship-related inquiries, how can I get in touch with the organizers?",
    ans: "If you are interested in becoming a sponsor for IT MEET 2024 or have inquiries about sponsorship packages, please visit the “Our Sponsors” section on our website or you can reach us directly through itmeet@ku.edu.np.",
  },
  {
    id: 9,
    quest:
      "How can I contact the organizers if I have questions or need assistance?",
    ans: "If you have any questions or need assistance, feel free to contact us at itmeet@ku.edu.np.com. You can also connect with us on our official social media accounts (Facebook, Instagram, LinkedIn, and Twitter), and we'll be happy to assist you promptly.",
  },
];

export default function FAQ() {

  return (
    <div className="flex flex-col overflow-hidden p-6 sm:p-8 md:p-10 gap-6 sm:gap-8 items-center justify-center min-h-screen bg-slate-100">
    <div className="flex flex-col items-center gap-2 sm:gap-3">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#171A23]">
        FAQs
      </h1>
      <div className="w-full rounded-full bg-[#14C58F] h-1 sm:h-2"></div>
    </div>
    <div className="flex flex-col lg:flex-row items-center w-full mt-0 md:mt-5 justify-between gap-6 sm:gap-8">
      <div className="w-full lg:w-1/2 h-[400px] lg:h-[500px] space-y-3 rounded-2xl lg:rounded-3xl overflow-y-scroll bg-[#171A23] text-white p-6 sm:p-8 lg:pl-12">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-center">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="space-y-3 sm:space-y-5">
          {qna.map((item) => (
            <Accordion key={item.id} type="single" collapsible className="w-full">
              <AccordionItem value={item.id.toString()}>
                <AccordionTrigger className="text-lg sm:text-xl text-start">
                  {item.quest}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base font-semibold text-gray-300">
                  {item.ans}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-8 sm:gap-12 h-auto lg:h-[500px] bg-[#369FFF] text-white rounded-2xl lg:rounded-3xl p-6 sm:p-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-center">
            Any questions? Let's talk.
          </h1>
        </div>
        <div>
          <FormFAQ />
        </div>
      </div>
    </div>
  </div>
  );
}
