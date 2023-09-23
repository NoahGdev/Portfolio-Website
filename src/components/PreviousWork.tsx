import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  caseStudyUrl: string;
}

const projects = [
    {
      title: 'Ambush.IO',
      description: '(Software Developer) SaaS Company built for the sneaker reselling industry to allow users to mass enter raffles through the use of HTTP requests and more. Check out more by clicking on me!',
      imageUrl: 'https://pbs.twimg.com/profile_banners/1425260143227416579/1634063170/600x200',
      caseStudyUrl: '/AmbushIO',
    },
    {
      title: 'Liquid Tools',
      description: '(Founder + Developer) SaaS company built in the sneaker reselling industry consisting of tools to simplify user experience and increase effiency. Find out more by click on me!',
      imageUrl: 'https://pbs.twimg.com/profile_banners/1513162011835834372/1670196785/600x200',
      caseStudyUrl: '/LiquidTools',
    },
    {
      title: 'Church Website revamp',
      description: 'Simple website I made for free to improve on current outdated website for my church!',
      imageUrl: 'https://media.discordapp.net/attachments/881992483603611708/1098721882292887663/image.png?width=1377&height=676',
      caseStudyUrl: '/',
    },
    {
      title: 'Freelance Work',
      description: 'Checkout a list of freelance work I have done and what i learned from it here.',
      imageUrl: 'https://images.ctfassets.net/qr8kennq1pom/1FwKqQoHL68jdVhdkJBJcI/12576e11f3d925df875ebdcb38db9f0a/Freelance.jpg',
      caseStudyUrl: '/',
    },
    {
      title: 'University Ticketing System',
      description: 'A school prject to make a system that allows users to do things such as create an EC claim, Tickets, and check status of services.\
      This also consisted of an Admin side to the page. Fidn out more by clicking on this card!',
      imageUrl: 'https://opengraph.githubassets.com/7b02cda8e327adcedfc900200743207256260a375221cc7525a175d8d1c475ca/NoahGdev/Hermes',
      caseStudyUrl: '/Hermes',
    },
    {
      title: 'This website ✨',
      description: 'Portfolio website built in Next.js 13 to showcase my projects, experience ans resume through a cooler way. Checkout the repo and more by clicking on me.',
      imageUrl: 'https://nextjs.org/static/blog/next-13/twitter-card.png',
      caseStudyUrl: '/ThisSite',
    }
  ];

const PreviousWork: React.FC = () => {
  return (
    <div className="bg-transparent text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-center mb-20">Previous Projects</h2>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={project.imageUrl} alt={project.title} />
              </div>
              <div className="flex-1 bg-transparent p-6 flex flex-col justify-between pw-bg">
                <div className="flex-1">
                  <Link href={project.caseStudyUrl}>
                    <div className="block mt-2">
                      <p className="text-xl font-semibold">{project.title}</p>
                      <p className="mt-3 text-base">{project.description}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviousWork;
