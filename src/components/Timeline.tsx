import React from 'react';

const experiences = [
  {
    id: 1,
    role: 'Freelance Developer',
    company: 'Spill Notify',
    date: 'No Specific Date',
    description: 'Developed a tool that allows users of a group to buy limited time items faster than others by monitoring the websites using HTTP requests. More info here.',
  },
  {
    id: 2,
    role: 'Software Developer',
    company: 'Ambush.IO',
    date: 'Aug 2021 - Apr 2022',
    description: 'Used Python + Flask to develop the software for a SaaS with a team of developers. More info here.',
  },
  {
    id: 3,
    role: 'Developer/Owner',
    company: 'LiquidTools',
    date: 'Apr 2022 - Current',
    description: 'A SaaS start up I developed in my spare time that now has 200+ monthly paying users. Used Python + JS. More info here.',
  },
];

interface TimelineItemProps {
  experience: typeof experiences[0];
  side: 'left' | 'right';
}

const TimelineItem: React.FC<TimelineItemProps> = ({ experience, side }) => {
  return (
    <div className={`relative w-full my-6 ${side === 'right' ? 'md:ml-auto' : 'md:mr-auto'} md:w-2/5 ${side === 'right' ? 'timeline-bg1' : 'timeline-bg2'}`}>
      <div className={`bg-transparent bg-transparent border border-grey rounded-lg p-6 `}>
        <h3 className="text-xl font-semibold mb-2">{experience.role}</h3>
        <h4 className="text-purple-300 text-purple-300 mb-4">{experience.company}</h4>
        <p className="text-purple-200 text-purple-200 mb-2">{experience.date}</p>
        <p className="text-black text-white">{experience.description}</p>
      </div>
    </div>
  );
};

const VerticalTimeline: React.FC = () => {
  return (
    <div className="h-auto text-white py-12 bg-transparent">
      <h2 className="text-3xl font-bold mb-16 text-center">Work Experience</h2>
      <div className="container mx-auto px-6">
        <div className="relative w-full">
          <div className="hidden md:block border-l-2 border-purple-600 border-purple-450 absolute left-1/2 transform -translate-x-1/2 h-full"></div>
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              experience={experience}
              side={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalTimeline;
