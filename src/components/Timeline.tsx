import React from "react";

const experiences = [
  {
    id: 1,
    role: "GIS Data Processor",
    company: "PT.Bias Reka / (BIG)",
    date: "08/2018 - 12/2018",
    description:
      "In this role, tasks involve updating spatial data utilizing ArcMap, creating operational maps, delineating village boundaries through cartometric techniques, and generating a Geodatabase based on the delineated boundaries.",
  },
  {
    id: 2,
    role: "Web GIS Developer",
    company: "PT.Damako (DPKP3 Bandung)",
    date: "03/2019 - 05/2019",
    description:
      "In this role, tasks involve creating a spatial database using QGIS, inputting survey results and spatial data modeling into a web data structure, developing a data system using QGIS for Leaflet, publishing Leaflet-generated data to hosting, and presenting product outcomes.",
  },
  {
    id: 3,
    role: "Web GIS Developer",
    company: "PT.Damako (DPKP3 Bandung)",
    date: "05/2019 - 06/2019",
    description:
      "In this role, tasks involve creating a spatial database using QGIS, inputting survey results and spatial data modeling into a web data structure, developing a data system using QGIS for Leaflet, publishing Leaflet-generated data to hosting, and presenting product outcomes.",
  },
  {
    id: 4,
    role: "GIS Data Processing Coordinator",
    company: "PT.Global Asia Solusindo (ATRBPN)",
    date: "09/2019 - 12/2019",
    description: "The responsibilities include creating operational maps, digitizing toponyms within the working area, printing work maps, coordinating field teams, and conducting quality control on field data.",
  },
  {
    id: 5,
    role: "Surveyour Ground Control Point",
    company: "PT.Bias Reka (BIG)",
    date: "09/2020 - 12/2020",
    description: "The tasks involve conducting coordinate point retrieval using GPS RTK through static methods, creating pre-fieldwork operational maps, and plotting coordinate points from measurement results.",
  },
  {
    id: 6,
    role: "Technical Support Junior Developer",
    company: "PT.Supermap Representative Office Indonesia",
    date: "03/2021 - 06/2021",
    description:
      "The responsibilities entail generating progress reports based on project outcomes received, providing technical support alongside the sales team, creating mock-ups for clients, deploying data to hosting platforms, developing backend systems for application data, and producing weekly reports.",
  },
  {
    id: 7,
    role: "Geographic Information Systems Specialist Manager",
    company: "PT.Bias Reka (BIG)",
    date: "09/2021 - 12/2021",
    description:
      "The tasks involve drafting an implementation plan for technical agreements, preparing preliminary reports, coordinating with teams from the National Geospatial Information Agency (BIG) and villages prior to technical activities, creating a Geodatabase framework for implementation, developing pre-activity operational maps, conducting internal quality control processes for boundary segment delineation, establishing topological rules to check spatial data, and creating a final Geodatabase in accordance with the agreed structure.",
  },
  {
    id: 8,
    role: "Surveyour PTSL PM Kabupaten Siak",
    company: "PT.Bias Reka (ATRBPN)",
    date: "09/2022 - 01/2023",
    description:
      "The duties include identifying land parcel boundaries with village staff, creating operational maps for field activities, conducting land parcel boundary measurements using GPS RTK survey equipment, and drafting measurement results using AutoCAD applications.",
  },
  {
    id: 9,
    role: "Surveyour PTSL PM Kabupaten Lumajang",
    company: "PT.Bias Reka (ATRBPN)",
    date: "03/2023 - 08/2023",
    description:
      "The duties include identifying land parcel boundaries with village staff, creating operational maps for field activities, conducting land parcel boundary measurements using GPS RTK survey equipment, and drafting measurement results using AutoCAD applications.",
  },
  {
    id: 10,
    role: "Freelancer Web GIS Developer",
    company: "PT. Waku (PUPR Provinsi Kalimantan Barat)",
    date: "08/2023 - 10/2023",
    description:
      "The responsibilities include crafting UI/UX designs, establishing synchronization with PostgreSQL databases, developing backend systems using the Laravel framework, deploying data to hosting platforms, presenting work outcomes, and creating a manual book for user guidance in application usage.",
  },
  {
    id: 11,
    role: "Freelancer Staf Engineer",
    company: "PT. Barata Geospasial Technology Bandung",
    date: "01/2024 - Current",
    description: "The tasks entail creating GIS project reports, conducting spatial data analysis, outlining project flow schematics, and performing data evaluation and monitoring.",
  },
];

interface TimelineItemProps {
  experience: (typeof experiences)[0];
  side: "left" | "right";
}

const TimelineItem: React.FC<TimelineItemProps> = ({ experience, side }) => {
  return (
    <div className={`relative w-full my-6 ${side === "right" ? "md:ml-auto" : "md:mr-auto"} md:w-2/5 ${side === "right" ? "timeline-bg1" : "timeline-bg2"}`}>
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
            <TimelineItem key={experience.id} experience={experience} side={index % 2 === 0 ? "left" : "right"} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalTimeline;
