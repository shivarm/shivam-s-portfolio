import React from "react";
import { portfolioData } from "./index.js";

export default function App() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans flex justify-center items-center p-6">
      <div className="w-full max-w-4xl">
        <header className="text-center mb-10">
          <img
            src="pic.png"
            alt="Profile"
            className="object-cover mx-auto rounded-full w-32 h-32 mb-4 border-4 border-blue-500"
          />
          <h1 className="text-4xl font-bold text-blue-400">{portfolioData.name}</h1>
          <p className="text-lg mt-2 text-gray-200">{portfolioData.title}</p>
          <div className="flex justify-center items-center gap-4 mt-4">
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="text-blue-300 hover:underline"
              target="_blank" rel="noopener noreferrer"
            >
              {portfolioData.contact.email}
            </a>
            <a
              href={portfolioData.contact.github}
              className="text-blue-300 hover:underline"
              target="_blank" rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={portfolioData.contact.twitter}
              className="text-blue-300 hover:underline"
              target="_blank" rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href={portfolioData.contact.linkedin}
              className="text-blue-300 hover:underline"
              target="_blank" rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-400 mb-2">About Me</h2>
          <p className="text-gray-300">{portfolioData.about}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Experience</h2>
          <div className="space-y-4">
            {portfolioData.experience.map((job, idx) => (
              <div key={idx} className="p-4 bg-gray-800 text-gray-100 rounded-lg shadow">
                <h3 className="text-xl font-bold">
                  {job.role} at{" "}
                  <a
                    href={job.link}
                    className="text-blue-300 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {job.company}
                  </a>
                </h3>
                <p className="text-sm text-gray-400">
                  {
                    // Highlight "Present" in green
                    job.period.split("Present").map((part, i, arr) =>
                      i < arr.length - 1 ? (
                        <React.Fragment key={i}>
                          {part}
                          <span className="text-green-400 font-semibold">Present</span>
                        </React.Fragment>
                      ) : (
                        part
                      )
                    )
                  }
                </p>
                <pre className="whitespace-pre-wrap font-sans text-gray-200">{job.description}</pre>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Projects</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {portfolioData.projects.map((project, idx) => (
              <div key={idx} className="p-4 bg-gray-800 text-gray-100 rounded-lg shadow">
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="text-blue-400 hover:underline">
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {portfolioData.skills.map((skill, idx) => (
              <span key={idx} className="bg-blue-700 text-blue-100 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
