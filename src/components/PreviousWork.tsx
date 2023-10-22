const projects = [
    {
      title: 'Ambush.IO',
      description: '(Software Developer) SaaS Company built for the sneaker reselling industry to allow users to mass enter raffles through the use of HTTP requests and more. Check out more by clicking on me!',
      imageUrl: 'https://pbs.twimg.com/profile_banners/1425260143227416579/1634063170/600x200',
      caseStudyUrl: '#'
    },
    {
      title: 'Liquid Tools',
      description: '(Founder + Developer) SaaS company built in the sneaker reselling industry consisting of tools to simplify user experience and increase effiency. Check Out Repo and Live website here!',
      imageUrl: 'https://pbs.twimg.com/profile_banners/1513162011835834372/1670196785/600x200',
      caseStudyUrl: 'https://github.com/NoahGdev/LiquidTools',
    },
    {
      title: 'Church Website revamp',
      description: 'Simple website I made for free to improve on current outdated website for my church!',
      imageUrl: 'https://media.discordapp.net/attachments/881992483603611708/1098721882292887663/image.png?width=1377&height=676',
      caseStudyUrl: '#',
    },
    {
      title: 'Freelance Work',
      description: 'I have completed various projects from discord bots to websites with payment integrations and much more!',
      imageUrl: 'https://images.ctfassets.net/qr8kennq1pom/1FwKqQoHL68jdVhdkJBJcI/12576e11f3d925df875ebdcb38db9f0a/Freelance.jpg',
      caseStudyUrl: '#',
    },
    {
      title: 'Podcast App',
      description: 'An app created with react-native and expo for my church where podcasts could be streamed live or listned back to. The app displayed different stacks for logged in\
      and logged out users, saved sessions and this is where I learned about authentication with sign up and sign in.',
      imageUrl: 'https://media.discordapp.net/attachments/1123342178991734795/1165465536658931712/image1.jpeg?ex=6546f35d&is=65347e5d&hm=6826bde1839e5f938f4cfc9f419edf3ddc1b0c67793366b732ce5d87a0beaea9&=&width=1014&height=676',
      caseStudyUrl: '#',
    },
    {
      title: 'This website ✨',
      description: 'Portfolio website built in Next.js 13 to showcase my projects, experience and resume through a cooler way. Checkout the repo and more by clicking on me.',
      imageUrl: 'https://nextjs.org/static/blog/next-13/twitter-card.png',
      caseStudyUrl: 'https://github.com/NoahGdev/Portfolio-Website',
    }
  ];

  const PreviousWork: React.FC = () => {
    return (
      <div id='previouswork' className="bg-transparent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-center mb-20">Previous Projects</h2>
          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-[#0a0a0a]">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={project.imageUrl} alt={project.title} />
                </div>
                <div className="flex-1 bg-transparent p-6 flex flex-col justify-between pw-bg">
                  <div className="flex-1">
                    {project.caseStudyUrl !== '#' ? (
                      <a href={project.caseStudyUrl} target='_blank' rel='noopener noreferrer'>
                        <div className="block mt-2">
                          <p className="text-xl font-semibold text-gray-300">{project.title}</p>
                          <p className="mt-3 text-base text-gray-300">{project.description}</p>
                        </div>
                      </a>
                    ) : (
                      <a>
                        <div className="block mt-2">
                          <p className="text-xl font-semibold text-gray-300">{project.title}</p>
                          <p className="mt-3 text-base text-gray-300">{project.description}</p>
                        </div>
                      </a>
                    )}
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
  