import React from "react";
import { portfolioData } from "./index.js";

export default function App() {
  return (
    <div className="min-h-screen font-sans flex flex-col items-center justify-start p-0 bg-gradient-to-br from-[#23272f] via-[#2d3142] to-[#222831]">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-16 bg-opacity-80 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-blue-700/20 to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center">
          <img
            src="pic.png"
            alt="Profile"
            className="object-cover mx-auto rounded-full w-36 h-36 mb-6 border-4 border-blue-500 shadow-lg shadow-blue-900/30"
          />
          <h1 className="relative text-6xl font-extrabold text-blue-100 mb-2 tracking-tight text-center">
            {portfolioData.name}
            <span className="block absolute left-1/2 -translate-x-1/2 bottom-[-8px] w-2/3 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full animate-pulse" />
          </h1>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xl text-blue-200 font-semibold bg-blue-800/60 px-6 py-2 rounded-full shadow mb-4 mt-2 tracking-wide">{portfolioData.title}</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="text-blue-200 hover:underline hover:text-blue-400 transition"
              target="_blank" rel="noopener noreferrer"
            >
              {portfolioData.contact.email}
            </a>
            <a
              href={portfolioData.contact.github}
              className="text-blue-200 hover:underline hover:text-blue-400 transition"
              target="_blank" rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={portfolioData.contact.twitter}
              className="text-blue-200 hover:underline hover:text-blue-400 transition"
              target="_blank" rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href={portfolioData.contact.linkedin}
              className="text-blue-200 hover:underline hover:text-blue-400 transition"
              target="_blank" rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About Section - Standalone Card with Icon Above */}
      <div className="w-full flex flex-col items-center mb-12 px-2 md:px-6">
        <div className="flex flex-col items-center mb-4">
            <h2 className="text-2xl font-bold text-blue-200 tracking-wide mb-4">About Me</h2>
        </div>
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-md p-8 flex flex-col items-center">
          <p className="text-gray-700 text-lg leading-relaxed text-center">{portfolioData.about}</p>
        </div>
      </div>

      {/* Experience Section */}
      <section className="w-full flex flex-col items-center mb-12 px-2 md:px-6">
        <h2 className="text-2xl font-bold text-blue-200 mb-6 tracking-wide">Experience</h2>
        <div className="flex flex-col gap-8 items-center w-full">
          {portfolioData.experience.map((job, idx) => (
            <div
              key={idx}
              className="w-full max-w-3xl bg-white rounded-2xl shadow-md p-8 flex flex-col h-full min-h-[220px]"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl font-bold">
                  <span role="img" aria-label="work">💼</span>
                </div>
                <h3 className="text-2xl font-extrabold text-blue-800">
                  {job.role} at {job.link ? (
                    <a
                      href={job.link}
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {job.company}
                    </a>
                  ) : (
                    <span>{job.company}</span>
                  )}
                </h3>
              </div>
              <p className="text-sm text-gray-500 mb-2">
                {job.period.split("Present").map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <React.Fragment key={i}>
                      {part}
                      <span className="text-green-600 font-semibold">Present</span>
                    </React.Fragment>
                  ) : (
                    part
                  )
                )}
              </p>
              <pre className="whitespace-pre-wrap font-sans text-gray-700 text-base leading-relaxed bg-gray-50 rounded p-2">{job.description}</pre>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full flex justify-center mb-12 px-2 md:px-6">
        <div className="w-full max-w-5xl">
           <div className="flex flex-col items-center mb-4">
            <h2 className="text-2xl font-bold text-blue-200 tracking-wide mb-4">Projects</h2>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md p-8 flex flex-col h-full min-h-[220px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-xl font-bold">
                    <span role="img" aria-label="project">🚀</span>
                  </div>
                  <span className="text-xs text-purple-600 font-semibold uppercase tracking-wider">Project</span>
                </div>
                <h3 className="text-lg font-bold text-purple-800 mb-1">{project.name}</h3>
                <p className="text-gray-700 mb-3">{project.description}</p>
                <div className="flex gap-4 mt-auto">
                  {project.view && (
                    <a href={project.view} className="text-blue-500 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  )}
                  <a href={project.github} className="text-blue-500 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">
                    Github
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full flex flex-col items-center mb-16 px-2 md:px-6">
        <h2 className="text-2xl font-bold text-blue-200 mb-8 tracking-wide">Skills</h2>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 w-full max-w-4xl">
          {portfolioData.skills.map((skill, idx) => {
            // Accent color palette
            const colors = [
              'text-blue-600 border-blue-200 hover:bg-blue-50',
              'text-purple-600 border-purple-200 hover:bg-purple-50',
              'text-pink-600 border-pink-200 hover:bg-pink-50',
              'text-green-600 border-green-200 hover:bg-green-50',
              'text-yellow-600 border-yellow-200 hover:bg-yellow-50',
              'text-indigo-600 border-indigo-200 hover:bg-indigo-50',
              'text-red-600 border-red-200 hover:bg-red-50',
              'text-cyan-600 border-cyan-200 hover:bg-cyan-50',
            ];
            const color = colors[idx % colors.length];
            return (
              <span
                key={idx}
                className={`px-8 py-4 rounded-full text-lg font-bold bg-white border shadow transition-all duration-200 cursor-pointer ${color} hover:scale-105`}
                style={{ letterSpacing: '0.04em' }}
              >
                {skill}
              </span>
            );
          })}
        </div>
      </section>
    </div>
  );
}
