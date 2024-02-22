const projects = [
  {
    title: "Freelancer Web GIS Developer",
    description:
      "The responsibilities include crafting UI/UX designs, establishing synchronization with PostgreSQL databases, developing backend systems using the Laravel framework, deploying data to hosting platforms, presenting work outcomes, and creating a manual book for user guidance in application usage.",
    imageUrl: "https://thumbs2.imgbox.com/2f/0b/SqVL9bkC_t.png",
    caseStudyUrl: "#",
  },
  {
    title: "Surveyour PTSL PM Kabupaten Lumajang",
    description:
      "The duties include identifying land parcel boundaries with village staff, creating operational maps for field activities, conducting land parcel boundary measurements using GPS RTK survey equipment, and drafting measurement results using AutoCAD applications.",
    imageUrl: "https://thumbs2.imgbox.com/74/73/9tXJg4bC_t.png",
    caseStudyUrl: "#",
  },
  {
    title: "Surveyour PTSL PM Kabupaten Siak",
    description:
      "The duties include identifying land parcel boundaries with village staff, creating operational maps for field activities, conducting land parcel boundary measurements using GPS RTK survey equipment, and drafting measurement results using AutoCAD applications.",
    imageUrl: "https://rakyatntt.com/wp-content/uploads/2020/11/logo-kementrian-ATR.jpg",
    caseStudyUrl: "#",
  },
  {
    title: "Geographic Information Systems Specialist Manager",
    description:
      "The tasks involve drafting an implementation plan for technical agreements, preparing preliminary reports, coordinating with teams from the National Geospatial Information Agency (BIG) and villages prior to technical activities, creating a Geodatabase framework for implementation, developing pre-activity operational maps, conducting internal quality control processes for boundary segment delineation, establishing topological rules to check spatial data, and creating a final Geodatabase in accordance with the agreed structure.",
    imageUrl: "https://4.bp.blogspot.com/-uEZUutT5T6g/WMDwaUeA98I/AAAAAAAABNg/L_w65dGWjoofOwJJaESlKkc1p1LWTCWewCLcB/s1600/logo-badan-informasi-geospasial-big.jpg",
    caseStudyUrl: "https://www.instagram.com/p/CnlyJMALxw2/?igsh=MWh0aGtzaG04NGduZA==",
  },
  {
    title: "Technical Support Junior Developer",
    description:
      "The responsibilities entail generating progress reports based on project outcomes received, providing technical support alongside the sales team, creating mock-ups for clients, deploying data to hosting platforms, developing backend systems for application data, and producing weekly reports.",
    imageUrl: "https://images2.imgbox.com/38/06/vZBuJGCy_o.png",
    caseStudyUrl: "https://youtu.be/WrqLf0mcZtY",
  },
  {
    title: "This website ✨",
    description: "The content of this website is currently undergoing updates.",
    imageUrl: "https://www.hazard-signs.nz/wp-content/uploads/2021/02/caution_097.jpg",
    caseStudyUrl: "https://github.com/XGamingTechnology/",
  },
];

const PreviousWork: React.FC = () => {
  return (
    <div id="previouswork" className="bg-transparent text-white py-16">
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
                  {project.caseStudyUrl !== "#" ? (
                    <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer">
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
