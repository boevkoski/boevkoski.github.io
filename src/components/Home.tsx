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
              src="./src/images/bojanevkoskiceuphoto.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl text-[#2d2d2d] mb-2">Bojan Evkoski</h1>
          <p className="text-lg font-semibold text-[#e85d2a]">PhD Student in Network Science (CEU, Vienna)</p>
          <p className="text-[#5a5a5a] leading-relaxed">
            Main Research Topic: Computational Psychopathology
          </p>
        </div>
      </section>

      {/* About */}
      <section className="space-y-4">
        <h2 className="text-2xl text-[#2d2d2d] pb-3 border-b border-[#d4c4b0]">
          About
        </h2>
        <p className="text-[#5a5a5a] leading-relaxed">
          I am a computer and network scientist working in computational psychopathology,
          with a focus on understanding how mental disorders relate to one another when examined at scale.
          For that purpose, I try to integrate multiple large-scale data sources—including online peer-support spaces,
          biomedical literature, and structured diagnostic frameworks. I am interested in transdiagnostic patterns, blurred or rigid diagnostic boundaries,
          and systematic forms of fragmentation that are missing from the formal taxonomies such as the ICD and DSM.
        </p>
        <p className="text-[#5a5a5a] leading-relaxed">
          My Master’s research adapted community detection methods to study the temporal evolution of communities in large-scale social networks,
          while my Bachelor’s work focused on deploying machine learning models in stream-processing settings, with an emphasis on practical and scalable inference.
        </p>
        <p className="text-[#5a5a5a] leading-relaxed">
          My future research interests include clinical and peer-support text analysis in suicidality, predictive modeling of treatment outcomes,
          and the development of data-driven approaches to advance mental health nosology.
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

          <div className="flex gap-4 p-4 bg-white border border-[#d4c4b0] rounded hover:shadow-md transition-shadow">
            <div className="text-[#e85d2a] font-semibold text-sm whitespace-nowrap">
              Jan 2026
            </div>
            <div className="text-[#5a5a5a]">
              Began teaching assistantships for <em>Intro to OOP</em> and <em>Data Mining and ML Fundamentals</em> at CEU.
            </div>
          </div>
          <div className="flex gap-4 p-4 bg-white border border-[#d4c4b0] rounded hover:shadow-md transition-shadow">
            <div className="text-[#e85d2a] font-semibold text-sm whitespace-nowrap">
              Dec 2025
            </div>
            <div className="text-[#5a5a5a]">
              Presented my annual research progress at the DNDS weekly seminar.
            </div>
          </div>
          
          <div className="flex gap-4 p-4 bg-white border border-[#d4c4b0] rounded hover:shadow-md transition-shadow">
            <div className="text-[#e85d2a] font-semibold text-sm whitespace-nowrap">
              Nov 2025
            </div>
            <div className="text-[#5a5a5a]">
              Gave a talk at the Department of Psychology (University of Limerick) on our latest{" "}
              <a
                href="https://osf.io/preprints/psyarxiv/7dfcw_v1"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#3a3a3a]"
              >
                pre-print
              </a>.
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-white border border-[#d4c4b0] rounded hover:shadow-md transition-shadow">
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
                Premenstrual Dysphoric Disorder in Online Communities.
              </a>.
            </div>
          </div>
          
          <div className="flex gap-4 p-4 bg-white border border-[#d4c4b0] rounded hover:shadow-md transition-shadow">
            <div className="text-[#e85d2a] font-semibold text-sm whitespace-nowrap">
              Sep 2025
            </div>
            <div className="text-[#5a5a5a]">
              Began teaching assistantships for <em>Intro to ML</em> and <em>Intro to CSS</em> at CEU.
            </div>
          </div>
          
          <div className="flex gap-4 p-4 bg-white border border-[#d4c4b0] rounded hover:shadow-md transition-shadow">
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
          
          <div className="flex gap-4 p-4 bg-white border border-[#d4c4b0] rounded hover:shadow-md transition-shadow">
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