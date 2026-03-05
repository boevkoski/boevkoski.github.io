import { Mail, GraduationCap, Linkedin, Twitter } from 'lucide-react';

export function Home() {
  return (
    <div className="space-y-12">
      {/* Introduction with Photo */}
      <section className="flex flex-col md:flex-row gap-8 items-start">
        {/* Photo */}
        <div className="flex-shrink-0">
          <div className="w-48 h-48 bg-white border-2 border-[#d4c4b0] rounded-lg overflow-hidden">
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl text-[#2d2d2d] mb-2">Bojan Evkoski</h1>
          <p className="text-lg font-semibold text-[#e85d2a]">PhD Student in Network Science (Central European University, Vienna)</p>
          <p className="text-[#5a5a5a] leading-relaxed">
            mental health • psychopathology • network science • machine learning
          </p>
        </div>
      </section>

      {/* About */}
      <section className="space-y-4">
        <h2 className="text-2xl text-[#2d2d2d] pb-3 border-b border-[#d4c4b0]">
          About
        </h2>
        <p className="text-[#5a5a5a] leading-relaxed">
          I am a data and network scientist studying complex social and behavioral systems through large-scale data. 
          Mainly interested in how these systems structure and evolve over time, and how they ultimately 
          affect individuals.
        </p>

        <p className="text-[#5a5a5a] leading-relaxed">
          My PhD research is focused on mental health. I study the structure of psychopathology when examined at scale by integrating multiple data sources—including 
          online peer-support communities, biomedical literature, hospital registries and diagnostic criteria.
          This allows me to investigate transdiagnostic patterns, blurred diagnostic boundaries, 
          and forms of fragmentation that are difficult to observe using traditional clinical studies or surveys.
        </p>

        <p className="text-[#5a5a5a] leading-relaxed">
          Methodologically, I rely primarily on machine learning and network science to analyze high-dimensional 
          data and uncover structural relationships within complex systems. My earlier work explored deploying 
          machine learning models in stream-processing environments with an emphasis on scalable inference, and 
          adapting community detection methods to study the temporal evolution of large-scale social networks.
        </p>

        <p className="text-[#5a5a5a] leading-relaxed">
          Looking ahead, I am interested in developing data-driven approaches to better understand mental health, 
          including the analysis of clinical and peer-support text related to psychosis and suicidality, predictive 
          modeling of treatment outcomes, and new computational approaches to psychiatric classification.
        </p>
      </section>

      {/* Contact & Links */}
      <section className="space-y-4">
        <h2 className="text-2xl text-[#2d2d2d] pb-3 border-b border-[#d4c4b0]">
          Connect
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Email */}
          <a
            href="mailto:evkoski_bojan@phd.ceu.edu"
            className="flex items-center gap-3 p-4 bg-white hover:bg-[#e85d2a] hover:text-white transition-all duration-300 rounded border border-[#d4c4b0] group"
          >
            <Mail className="w-5 h-5 text-[#e85d2a] group-hover:text-white" />
            <span className="text-[#2d2d2d] group-hover:text-white text-sm">Email</span>
          </a>

          {/* Google Scholar */}
          <a
            href="https://scholar.google.com/citations?user=CVysrE0AAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-white hover:bg-[#e85d2a] hover:text-white transition-all duration-300 rounded border border-[#d4c4b0] group"
          >
            <GraduationCap className="w-5 h-5 text-[#e85d2a] group-hover:text-white" />
            <span className="text-[#2d2d2d] group-hover:text-white text-sm">Scholar</span>
          </a>

          {/* ORCID */}
          <a
            href="https://orcid.org/0000-0003-1096-4666"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-white hover:bg-[#e85d2a] hover:text-white transition-all duration-300 rounded border border-[#d4c4b0] group"
          >
            <svg className="w-5 h-5 text-[#e85d2a] group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 8.24c.509 0 .922-.413.922-.922s-.413-.922-.922-.922-.922.413-.922.922.413.922.922.922zm-.338 1.955v6.568h1.415V10.195H7.031zm3.708 0v6.568h1.415v-3.664c0-1.326.792-2.053 1.732-2.053.94 0 1.507.646 1.507 1.732v3.985h1.415v-4.302c0-1.732-1.003-2.81-2.548-2.81-1.084 0-1.894.509-2.268 1.326h-.081v-1.084H10.74z"/>
            </svg>
            <span className="text-[#2d2d2d] group-hover:text-white text-sm">ORCID</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/bojan-evkoski/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-white hover:bg-[#e85d2a] hover:text-white transition-all duration-300 rounded border border-[#d4c4b0] group"
          >
            <Linkedin className="w-5 h-5 text-[#e85d2a] group-hover:text-white" />
            <span className="text-[#2d2d2d] group-hover:text-white text-sm">LinkedIn</span>
          </a>

          {/* Bluesky */}
          <a
            href="https://bsky.app/profile/bojanevkoski.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-white hover:bg-[#e85d2a] hover:text-white transition-all duration-300 rounded border border-[#d4c4b0] group"
          >
            <svg className="w-5 h-5 text-[#e85d2a] group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z"/>
            </svg>
            <span className="text-[#2d2d2d] group-hover:text-white text-sm">Bluesky</span>
          </a>

          {/* Twitter */}
          <a
            href="https://x.com/BojanEvkoski"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-white hover:bg-[#e85d2a] hover:text-white transition-all duration-300 rounded border border-[#d4c4b0] group"
          >
            <Twitter className="w-5 h-5 text-[#e85d2a] group-hover:text-white" />
            <span className="text-[#2d2d2d] group-hover:text-white text-sm">Twitter</span>
          </a>
        </div>
      </section>

      {/* News Section */}
      <section className="space-y-4">
        <h2 className="text-2xl text-[#2d2d2d] pb-3 border-b border-[#d4c4b0]">
          News
        </h2>
        <div className="space-y-4">

          <div className="flex items-center gap-4 p-4 bg-white border border-[#d4c4b0] rounded hover:shadow-md transition-shadow">
            <div className="text-[#e85d2a] font-semibold text-sm whitespace-nowrap">
              Jan 2026
            </div>
            <div className="text-[#5a5a5a]">
              Published article in JMIR on {" "}
              <a
                href="https://www.jmir.org/2026/1/e80958/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#3a3a3a]"
              >
                The Structure of Psychopathology on Reddit
              </a>.
            </div>
          </div>
           <div className="flex items-center gap-4 p-4 bg-white border border-[#d4c4b0] rounded hover:shadow-md transition-shadow">
            <div className="text-[#e85d2a] font-semibold text-sm whitespace-nowrap">
              Jan 2026
            </div>
            <div className="text-[#5a5a5a]">
              Began teaching assistantships for <em><a
                href="https://ceu.studyguide.timeedit.net/modules/UGST4252?type=CORE"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#3a3a3a]"
              >
                Intro to OOP
              </a></em> and <em><a
                href="https://ceu.studyguide.timeedit.net/modules/DNDS6005?type=CORE"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#3a3a3a]"
              >
                Data Mining and ML Fundamentals
              </a></em> at CEU.
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-white border border-[#d4c4b0] rounded hover:shadow-md transition-shadow">
            <div className="text-[#e85d2a] font-semibold text-sm whitespace-nowrap">
              Dec 2025
            </div>
            <div className="text-[#5a5a5a]">
              Presented my annual research progress at the <em><a
                href="https://bsky.app/profile/ceu-dnds.bsky.social/post/3ma3smf7egs2s"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#3a3a3a]"
              >
                DNDS weekly seminar
              </a></em>.
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-white border border-[#d4c4b0] rounded hover:shadow-md transition-shadow">
            <div className="text-[#e85d2a] font-semibold text-sm whitespace-nowrap">
              Nov 2025
            </div>
            <div className="text-[#5a5a5a]">
              Presented at the Department of Psychology (University of Limerick) on data-driven approaches for studying the structure of psychopathology
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-white border border-[#d4c4b0] rounded hover:shadow-md transition-shadow">
            <div className="text-[#e85d2a] font-semibold text-sm whitespace-nowrap">
              Oct 2025
            </div>
            <div className="text-[#5a5a5a]">
              Published article in SciRep on {" "}
              <a
                href="https://www.nature.com/articles/s41598-025-19220-2"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#3a3a3a]"
              >
                Premenstrual Dysphoric Disorder in Online Communities
              </a>.
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-white border border-[#d4c4b0] rounded hover:shadow-md transition-shadow">
            <div className="text-[#e85d2a] font-semibold text-sm whitespace-nowrap">
              Sep 2025
            </div>
            <div className="text-[#5a5a5a]">
              Began teaching assistantships for <em><a
                href="https://ceu.studyguide.timeedit.net/modules/UGST4088?type=CORE"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#3a3a3a]"
              >
                Intro to ML
              </a></em> and <em><a
                href="https://ceu.studyguide.timeedit.net/modules/DNDS6014?type=CORE"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#3a3a3a]"
              >
                Intro to CSS
              </a></em> at CEU.
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-white border border-[#d4c4b0] rounded hover:shadow-md transition-shadow">
            <div className="text-[#e85d2a] font-semibold text-sm whitespace-nowrap">
              Oct 2025
            </div>
            <div className="text-[#5a5a5a]">
              {" "}
              <a
                href="https://osf.io/27b9n/files/5nqkz"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#3a3a3a]"
              >
                Presented
              </a> in a parallel session at IC2S2 in Norrköping, Sweden.
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-white border border-[#d4c4b0] rounded hover:shadow-md transition-shadow">
            <div className="text-[#e85d2a] font-semibold text-sm whitespace-nowrap">
              Jan 2025
            </div>
            <div className="text-[#5a5a5a]">
              Attended the {" "}
              <a
                href="https://psychosystems.org/psynets-summer-workshop"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#3a3a3a]"
              >
                PSYNETS
              </a> 2025 workshop in Amsterdam, Netherlands.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}