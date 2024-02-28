import React from "react";
import EventNotificationsTab from "../components/Events/EventNotificationsTab";
import EventsCalendar from "../components/Events/EventsCalendar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const events = {
  "2024-02-28": [
    {
      title: "Math Department Colloquium",
      description: "A talk on algebraic structures.",
    },
  ],
  "2024-02-27": [
    {
      title: "Art Exhibit Opening",
      description: "Featuring contemporary artists.",
    },
  ],
  "2024-02-29": [
    {
      title: "Computer Science Hackathon",
      description: "Join us for a weekend of coding, innovation, and fun.",
    },
  ],
  "2024-03-01": [
    {
      title: "Philosophy Debate Club",
      description:
        "Deliberate on 'The Ethics of AI' with guest speakers from various disciplines.",
    },
  ],
  "2024-02-12": [
    {
      title: "Economics Symposium",
      description:
        "Discuss the impacts of digital currencies on global economies.",
    },
  ],
  "2024-02-13": [
    {
      title: "Sustainability Workshop",
      description:
        "Workshop on sustainable practices and eco-friendly campus initiatives.",
    },
  ],
  "2024-02-19": [
    {
      title: "Biology Field Trip",
      description: "Explore local ecosystems with the Biology Department.",
    },
  ],
  "2024-02-20": [
    {
      title: "Foreign Language Mixer",
      description:
        "Practice language skills and meet fellow language enthusiasts.",
    },
  ],
  "2024-02-26": [
    {
      title: "Student Theater Performance",
      description:
        "The Drama Club presents an adaptation of Shakespeare's Hamlet.",
    },
  ],
  "2024-02-25": [
    {
      title: "Career Fair",
      description:
        "Meet potential employers and learn about career opportunities in various fields.",
    },
  ],
  "2024-02-02": [
    {
      title: "Engineering Design Showcase",
      description:
        "Senior engineering students present their capstone projects.",
    },
  ],
  "2024-02-03": [
    {
      title: "Jazz Night",
      description:
        "Enjoy an evening of live jazz music performed by student musicians.",
    },
  ],
  "2024-02-09": [
    {
      title: "Poetry Slam Event",
      description:
        "Share your poetry with fellow students at our monthly slam event.",
    },
  ],
};

const notifications = [
  {
    date: "2024-02-28",
    title: "Math Nerds Unite!",
    description:
      "🧮 Dive into the cool world of algebraic structures with us. Math's not boring when you get to the fun part!",
  },
  {
    date: "2024-02-28",
    title: "Art Exhibit Launch Party",
    description:
      "🎨 Come see art that speaks louder than words. Contemporary pieces that’ll make you think, laugh, and maybe even cry. Refreshments provided!",
  },
  {
    date: "2024-02-29",
    title: "Hackathon Madness",
    description:
      "💻 Got ideas? Need a break from the mundane? Join us for a weekend hackathon. Code, create, and maybe crash (your code, not you). Let's innovate together!",
  },
  {
    date: "2024-02-29",
    title: "Philosophy Club's AI Ethics Night",
    description:
      "🤔 AI's taking over, but is it cool or creepy? Let's chat about the future with cookies and philosophers.",
  },
  {
    date: "2024-02-12",
    title: "Crypto Craze",
    description:
      "💹 Is Bitcoin the future or just a fad? Debate and discuss the digital dollar dream over donuts.",
  },
  {
    date: "2024-02-12",
    title: "Green Thumbs & Sustainable Bums",
    description:
      "🌱 Let’s get our hands dirty with some eco-friendly projects. Save the planet, one workshop at a time. Plus, free plants!",
  },
];

const Events = () => {
  const currentMonth = new Date(2024, 1);

  return (
    <div className="bg-gray-700 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-6 flex gap-8">
        <div className="flex-auto">
          <EventsCalendar events={events} currentMonth={currentMonth} />
        </div>

        <div className="flex-initial w-1/4">
          {" "}
          {/* Adjust w-x/x as needed */}
          <EventNotificationsTab notifications={notifications} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
