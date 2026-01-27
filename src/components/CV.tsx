export function CV() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl text-[#2d2d2d] pb-4 border-b border-[#d4c4b0]">
        Curriculum Vitae
      </h1>

      {/* Education */}
      <section className="space-y-4">
        <h2 className="text-2xl text-[#e85d2a]">Education</h2>
        <div className="space-y-6">
          <div className="space-y-2 pl-4 border-l-2 border-[#e85d2a]">
            <h3 className="text-lg text-[#2d2d2d]">Ph.D. in Network Science</h3>
            <p className="text-[#5a5a5a]">Central European University (Vienna) | 2023 - Present</p>
            <p className="text-[#5a5a5a] text-sm italic">
              Dissertation: "Network Science and Big Data in Computational Psychopathology"
            </p>
          </div>
          <div className="space-y-2 pl-4 border-l-2 border-[#e85d2a]">
            <h3 className="text-lg text-[#2d2d2d]">M.S. in Information Technologies</h3>
            <p className="text-[#5a5a5a]">Jožef Stefan International Postgraduate School (Ljubljana) | 2020 - 2022</p>
            <p className="text-[#5a5a5a] text-sm italic">
              Thesis: "Community Evolution Analysis on Social Media Networks"
            </p>
          </div>
          <div className="space-y-2 pl-4 border-l-2 border-[#e85d2a]">
            <h3 className="text-lg text-[#2d2d2d]">B.S. in Computer Science</h3>
            <p className="text-[#5a5a5a]">Ss. Cyril and Methodius University (Skopje) | 2015 - 2019</p>
            <p className="text-[#5a5a5a] text-sm italic">
              Thesis: "Predictive Model Management in Spark Structured Streaming"
            </p>
          </div>
        </div>
      </section>

      {/* Employment and Interships */}
      <section className="space-y-4">
        <h2 className="text-2xl text-[#e85d2a]">Employment and Internships</h2>
        <div className="space-y-6">
          <div className="space-y-2 pl-4 border-l-2 border-[#e85d2a]">
            <h3 className="text-lg text-[#2d2d2d]">Young Research Assistant</h3>
            <p className="text-[#5a5a5a]">Institute of Contemporary History (Ljubljana) | 2022 - 2023</p>
          </div>
          <div className="space-y-2 pl-4 border-l-2 border-[#e85d2a]">
            <h3 className="text-lg text-[#2d2d2d]">Machine Learning Intern</h3>
            <p className="text-[#5a5a5a]">G+D Netcetera (Skopje) | Summer 2018</p>
          </div>
          <div className="space-y-2 pl-4 border-l-2 border-[#e85d2a]">
            <h3 className="text-lg text-[#2d2d2d]">Software Engineering Intern</h3>
            <p className="text-[#5a5a5a]">Endava (Skopje) | Summer 2017</p>
          </div>
        </div>
      </section>

      {/* Teaching and Mentorship */}
      <section className="space-y-4">
        <h2 className="text-2xl text-[#e85d2a]">Teaching and Mentorship</h2>
        <div className="space-y-6">
          <div className="space-y-2 pl-4 border-l-2 border-[#e85d2a]">
            <h3 className="text-lg text-[#2d2d2d]">Teaching Assistant</h3>
            <p className="text-[#5a5a5a]">Central European University (Vienna) | 2023 - Present</p>
            <p className="text-[#5a5a5a] text-sm">
              - Introduction to Machine Learning and Data Mining (2024, 2025) <br />
              - Introduction to Computational Social Science (2025) <br />
              - Object Oriented Programming (2026) <br /> 
              - Data Mining and Machine Learning Fundamentals (2025, 2026)
            </p>
          </div>
          <div className="space-y-2 pl-4 border-l-2 border-[#e85d2a]">
            <h3 className="text-lg text-[#2d2d2d]">Team Coordinator</h3>
            <p className="text-[#5a5a5a]">Digital Humanities Hackathon (Helsinki) | 2022, 2023</p>
          </div>
        </div>
      </section>

      {/* Community Activity */}
      <section className="space-y-4">
        <h2 className="text-2xl text-[#e85d2a]">Community Activity</h2>
        <div className="space-y-6">
          <div className="space-y-2 pl-4 border-l-2 border-[#e85d2a]">
            <h3 className="text-lg text-[#2d2d2d]">Reviewing</h3>
            <p className="text-[#5a5a5a] text-sm">
              - ECML-PKDD (since 2023) <br />
              - Expert Systems with Applications (since 2023) <br />
              - PLOS One (since 2025) <br />
              - Applied Network Science (since 2023) <br /> 
            </p>
          </div>
          <div className="space-y-2 pl-4 border-l-2 border-[#e85d2a]">
            <h3 className="text-lg text-[#2d2d2d]">Organizer</h3>
            <p className="text-[#5a5a5a] text-sm">
              - Data Stories 11th Edition, Vienna (2025) <br />
              - IPSCC Student Conference, Kamnik (2022) <br />
            </p>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="space-y-4">
        <h2 className="text-2xl text-[#e85d2a]">Awards</h2>
        <div className="space-y-3">
          <div className="text-[#5a5a5a] pl-4 border-l-2 border-[#e85d2a]">
            <span className="text-[#2d2d2d]">Best Paper Award</span> - Language and Technology Conference (2022)
          </div>
          <div className="text-[#5a5a5a] pl-4 border-l-2 border-[#e85d2a]">
            <span className="text-[#2d2d2d]">Best Lighting Talk</span> - Complex Networks Conference (2021)
          </div>
          <div className="text-[#5a5a5a] pl-4 border-l-2 border-[#e85d2a]">
            <span className="text-[#2d2d2d]">Ad Futura Scholarship</span> - Ministry of Education, Slovenia (2020)
          </div>
        </div>
      </section>
    </div>
  );
}