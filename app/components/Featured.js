import { FaListUl, FaLaptopCode, FaMicroscope, FaPalette, FaBusinessTime, FaRobot } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Comprehensive Career Guidance",
      description:
        "From 10th standard to graduation, explore all possible career paths tailored to your interests and strengths.",
    },
    {
      title: "Curated Learning Resources",
      description:
        "Access high-quality articles, videos, and courses with reference links to upskill and grow in your desired field.",
    },
    {
      title: "Skill Assessment & Personalized Insights",
      description:
        "Test your abilities and get personalized career recommendations based on your strengths and interests.",
    },
    {
      title: "Connect & Network",
      description:
        "Join a community of like-minded individuals, connect with groups, and build meaningful relationships with peers who share your passion.",
    },
    {
      title: "Verified Resources & Expert Insights",
      description:
        "Learn from trusted industry experts, mentors, and educational resources to make informed career decisions.",
    },
    {
      title: "Future-Ready Career Paths",
      description:
        "Stay ahead with insights on emerging industries, job trends, and in-demand skills for a successful career journey.",
    },
  ];

  const careers = [
    {
      title: "Software Development",
      description: "Design, develop, and maintain software applications.",
      icon: <FaLaptopCode className='text-3xl text-p4' />,
    },
    {
      title: "Data Science",
      description: "Analyze and interpret complex data to aid decision-making.",
      icon: <FaMicroscope className='text-3xl text-p4' />,
    },
    {
      title: "Graphic Design",
      description: "Create visual content for branding, marketing, and UI/UX.",
      icon: <FaPalette className='text-3xl text-p4' />,
    },
    {
      title: "Business Management",
      description: "Oversee operations, strategy, and financial planning.",
      icon: <FaBusinessTime className='text-3xl text-p4' />,
    },
    {
      title: "Artificial Intelligence",
      description: "Develop AI models to automate and enhance decision-making.",
      icon: <FaRobot className='text-3xl text-p4' />,
    },
  ];

  return (
    <div className="why w-full px-[10%] py-10 text-p5">
      <div className="w-full px-[5%] py-10  rounded-4xl">
        <div className="text-4xl text-p1 font-extrabold text-center mb-8">
          Why Choose CareerTrack?
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-4 p-6 bg-p2 rounded-4xl shadow-lg hover:scale-105 transition-transform"
            >
              <FaListUl className="text-3xl text-p5" />
              <div className="text-2xl font-bold">{feature.title}</div>
              <div className="text-xl">{feature.description}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Featured Career Paths Section */}
      <div className="w-full px-[5%] py-10 bg-p4 rounded-4xl mt-10">
        <div className="text-4xl font-extrabold text-center mb-8 text-p1">
          Featured Career Paths
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careers.map((career, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-4 p-6 bg-p1 rounded-4xl shadow-lg hover:scale-105 transition-transform"
            >
              {career.icon}
              <div className="text-2xl font-bold">{career.title}</div>
              <div className="text-xl">{career.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
