import { useState } from "react";

const faqs = [
  {
    question: "What documents are required to rent a car?",
    answer: "You need a valid driving license, ID proof, and a payment method."
  },
  {
    question: "Is there a minimum age requirement?",
    answer: "Yes, the minimum age to rent a car is 21 years."
  },
  {
    question: "Can I cancel my booking?",
    answer: "Yes, you can cancel your booking from your account dashboard."
  },
  {
    question: "Are fuel charges included?",
    answer: "Fuel charges are not included unless specified in the offer."
  },
  {
    question: "Do you provide doorstep delivery?",
    answer: "Yes, we offer doorstep delivery in selected locations."
  },
  {
    question: "What happens in case of breakdown?",
    answer: "We provide 24/7 roadside assistance for all bookings."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-secondary min-h-screen p-6 fade-in">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-3">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Find answers to the most common questions about our car rental service.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg"
          >
            {/* Question */}
            <button
              onClick={() => toggle(index)}
              className="w-full text-left p-4 flex justify-between items-center hover:bg-primary hover:text-white transition duration-300"
            >
              <span className="font-semibold">
                {faq.question}
              </span>

              <span className="text-xl font-bold">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>

            {/* Answer */}
            <div
              className={`px-4 overflow-hidden transition-all duration-500 ${
                activeIndex === index ? "max-h-40 py-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 text-sm">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-primary mb-3">
          Still have questions?
        </h2>
        <p className="text-gray-600 mb-6">
          Contact our support team and we’ll help you out.
        </p>

        <button className="bg-primary text-white px-8 py-3 rounded-lg shadow hover:scale-105 hover:bg-opacity-90 transition duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
}
// import Accordion from "../components/Accordion";

// const faqData = [
//   {
//     title: "What documents are required?",
//     content: "You need a valid license and ID proof."
//   },
//   {
//     title: "Can I cancel my booking?",
//     content: "Yes, cancellations are allowed from dashboard."
//   },
// ];

// export default function FAQ() {
//   return (
//     <div className="p-6 bg-secondary min-h-screen">
//       <h1 className="text-3xl font-bold text-primary mb-6">
//         FAQs
//       </h1>

//       <Accordion items={faqData} />
//     </div>
//   );
// }