import { ExternalLink } from "lucide-react";

type PubType = "Journal" | "Conference" | "Workshop" | "Preprint";

interface Publication {
  year: number;
  type: PubType;
  authors: string;
  title: string;
  venue: string;
  links?: Array<{ label: string; href: string }>;
}

const publications: Publication[] = [
  // -------------------
  // 2025
  // -------------------

  {
    year: 2026,
    type: "Journal",
    authors: "Evkoski, Bojan; Letina, Srebrenka; Kralj Novak, Petra",
    title: "The Structure of Psychopathology on Reddit: Network Analysis of Mental Health Communities in Relation to the ICD Diagnostic System",
    venue: "Journal of Medical Internet Research",
    links: [
      { label: "Journal", href: "https://www.jmir.org/2026/1/e80958/" }
    ]
  },
  {
    year: 2025,
    type: "Journal",
    authors: "Evkoski, Bojan; Letina, Srebrenka; Kralj Novak, Petra; Riddell, Julie",
    title: "Premenstrual dysphoric disorder in online peer support communities: a Reddit case study",
    venue: "Scientific Reports, 15(1), 34300",
    links: [
      { label: "DOI", href: "https://doi.org/10.1038/s41598-025-19220-2" },
      { label: "Journal", href: "https://www.nature.com/articles/s41598-025-19220-2" },
    ],
  },
  {
    year: 2025,
    type: "Preprint",
    authors: "Evkoski, Bojan; Mozetič, Igor; Ljubešić, Nikola; Kralj Novak, Petra",
    title: "Affective Polarization across European Parliaments",
    venue: "arXiv:2508.18916",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2508.18916" }],
  },
  // -------------------
  // 2024
  // -------------------
  {
    year: 2024,
    type: "Conference",
    authors: "Dobranić, Filip; Evkoski, Bojan; Ljubešić, Nikola",
    title:
      "A Lightweight Approach to a Giga-Corpus of Historical Periodicals: The Story of a Slovenian Historical Newspaper Collection",
    venue: "LREC-COLING 2024 (Proceedings), pp. 695–703",
    links: [
      { label: "PDF", href: "https://aclanthology.org/2024.lrec-main.61.pdf" },
      { label: "ACL Anthology", href: "https://aclanthology.org/2024.lrec-main.61/" },
    ],
  },

  // -------------------
  // 2023
  // -------------------
  {
    year: 2023,
    type: "Journal",
    authors: "Evkoski, Bojan; Kralj Novak, Petra; Ljubešić, Nikola",
    title:
      "Content-based comparison of communities in social networks: ex-Yugoslavian reactions to the Russian invasion of Ukraine",
    venue: "Applied Network Science, 8, 40",
    links: [{ label: "DOI", href: "https://doi.org/10.1007/s41109-023-00561-8" }],
  },
  {
    year: 2023,
    type: "Conference",
    authors: "Evkoski, Bojan; Pollak, Senja",
    title: "XAI in Computational Linguistics: Understanding Political Leanings in the Slovenian Parliament",
    venue: "Language & Technology Conference, 10, pp. 56–61",
    links: [{ label: "PDF", href: "https://arxiv.org/pdf/2305.04631" }],
  },
  {
    year: 2023,
    type: "Conference",
    authors: "Evkoski, Bojan; Lazarevic, Zarko; Pancur, Andrej; Fišer, Darja",
    title: "The Yugoslavian Interwar Business Network",
    venue: "DH (Conference)",
    links: [{ label: "PDF", href: "https://zenodo.org/records/8107560" }],
  },

  // -------------------
  // 2022
  // -------------------
  {
    year: 2022,
    type: "Journal",
    authors:
      "Evkoski, Bojan; Pelicon, Andraž; Mozetič, Igor; Ljubešić, Nikola; Kralj Novak, Petra",
    title: "Retweet communities reveal the main sources of hate speech",
    venue: "PLOS ONE, 17(3), e0265602",
    links: [{ label: "DOI", href: "https://doi.org/10.1371/journal.pone.0265602" }],
  },
  {
    year: 2022,
    type: "Journal",
    authors:
      "Andonovikj, Viktor; Boskoski, Pavle; Evkoski, Bojan; Redek, Tjaša; Mileva Boshkoska, Biljana",
    title: "Community analysis in Slovenian labour network 2010-2020",
    venue: "Journal of Decision Systems, 31(sup1), pp. 308–318",
    links: [{ label: "DOI", href: "https://doi.org/10.1080/12460125.2022.2070944" }],
  },
  {
    year: 2022,
    type: "Workshop",
    authors:
      "Skubic, Jure; Angermeier, Jan; Bruncrona, Alexandra; Evkoski, Bojan; Leiminger, Larissa",
    title: "Networks of Power: Gender Analysis in Selected European Parliaments",
    venue: "CPSS-2022 (Workshop), pp. 38–46",
    links: [
      {
        label: "PDF",
        href: "https://www.researchgate.net/publication/363486965_Networks_of_Power_-_Gender_Analysis_in_Selected_European_Parliaments",
      },
    ],
  },
  {
    year: 2022,
    type: "Journal",
    authors: "Franza, Jasmin; Evkoski, Bojan; Fišer, Darja",
    title: "Emotion analysis in socially unacceptable discourse",
    venue: "Slovenščina 2.0, 10(1), pp. 1–22",
    links: [{ label: "DOI", href: "https://doaj.org/article/f92671ebe61f4dce807a92296e76b60e" }],
  },

  // -------------------
  // 2021
  // -------------------
  {
    year: 2021,
    type: "Journal",
    authors: "Evkoski, Bojan; Ljubešić, Nikola; Pelicon, Andraž; Mozetič, Igor; Novak, Petra Kralj",
    title: "Evolution of topics and hate speech in retweet network communities",
    venue: "Applied Network Science, 6(1), 96",
    links: [{ label: "DOI", href: "https://doi.org/10.1007/s41109-021-00439-7" }],
  },
  {
    year: 2021,
    type: "Journal",
    authors: "Evkoski, Bojan; Mozetič, Igor; Ljubešić, Nikola; Kralj Novak, Petra",
    title: "Community evolution in retweet networks",
    venue: "PLOS ONE, 16(9), e0256175",
    links: [{ label: "DOI", href: "https://doi.org/10.1371/journal.pone.0256175" }],
  },

  // -------------------
  // 2020
  // -------------------
  {
    year: 2020,
    type: "Conference",
    authors: "Jovanovska, Lidija; Evkoski, Bojan; Mirchev, Miroslav; Mishkovski, Igor",
    title: "Demographic analysis of music preferences in streaming service networks",
    venue: "CompleNet 2020 (Complex Networks XI), pp. 233–242",
    links: [
      {
        label: "PDF",
        href: "https://www.researchgate.net/publication/339421592_Demographic_Analysis_of_Music_Preferences_in_Streaming_Service_Networks",
      },
    ],
  },
  {
    year: 2020,
    type: "Conference",
    authors: "Evkoski, Bojan; Mozetič, Igor; Ljubešić, Nikola; Novak, Petra Kralj",
    title: "A Slovenian retweet network 2018-2020",
    venue: "Information Society 2020 (Proceedings), Ljubljana, Slovenia",
    links: [
      {
        label: "PDF",
        href: "https://library.ijs.si/Stacks/Proceedings/InformationSociety/2020/IS2020_Volume_C%20-%20SiKDD.pdf",
      },
    ],
  },

  // -------------------
  // 2019
  // -------------------
  {
    year: 2019,
    type: "Conference",
    authors: "Evkoski, Bojan; Stojanovski, Zafir; Trajkovski, Aleksandar; Gjorgjevikj, Dejan; Cyril, S.",
    title: "Air pollution prediction using LSTM neural networks",
    venue: "CIIT 2019 (Proceedings)",
    links: [
      {
        label: "PDF",
        href: "https://www.researchgate.net/publication/342154151_Air_Pollution_Prediction_Using_LSTM_Neural_Networks",
      },
    ],
  },
];

function TypePill({ type }: { type: PubType }) {
  const base = "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium border";
  const styles: Record<PubType, string> = {
    Journal: "bg-white border-[#d4c4b0] text-[#2d2d2d]",
    Conference: "bg-white border-[#e85d2a] text-[#e85d2a]",
    Workshop: "bg-white border-[#b08f6a] text-[#b08f6a]",
    Preprint: "bg-white border-[#7a7a7a] text-[#5a5a5a]",
  };
  return <span className={`${base} ${styles[type]}`}>{type}</span>;
}

function pubKey(pub: Publication) {
  // Deterministic, content-based key (no manual ids).
  // Title+year is usually enough; authors included to protect against same-title edge cases.
  return `${pub.year}::${pub.title}::${pub.authors}`;
}

export function Publications() {
  // group by year
  const yearGroups = publications.reduce((acc, pub) => {
    (acc[pub.year] ??= []).push(pub);
    return acc;
  }, {} as Record<number, Publication[]>);

  const years = Object.keys(yearGroups).sort((a, b) => Number(b) - Number(a));

  // within each year: journals -> conferences -> workshops -> preprints, then alphabetical by title
  const typeOrder: Record<PubType, number> = { Journal: 0, Conference: 1, Workshop: 2, Preprint: 3 };

  years.forEach((y) => {
    yearGroups[Number(y)].sort((a, b) => {
      const t = typeOrder[a.type] - typeOrder[b.type];
      if (t !== 0) return t;
      return a.title.localeCompare(b.title);
    });
  });

  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl text-[#2d2d2d] pb-4 border-b border-[#d4c4b0]">
          Publications
        </h1>
      </div>

      <div className="space-y-8">
        {years.map((year) => (
          <section key={year} className="space-y-4">
            <h2 className="text-2xl text-[#e85d2a]">{year}</h2>

            <div className="space-y-4">
              {yearGroups[Number(year)].map((pub) => (
                <article
                  key={pubKey(pub)}
                  className="pl-4 py-3 border-l-2 border-[#e85d2a] hover:bg-white transition-colors"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <TypePill type={pub.type} />
                    <p className="text-[#5a5a5a] text-sm">{pub.authors}</p>
                  </div>

                  <h3 className="text-lg text-[#2d2d2d] mb-2">{pub.title}</h3>
                  <p className="text-[#5a5a5a] mb-3">{pub.venue}</p>

                  {pub.links?.length ? (
                    <div className="flex flex-wrap gap-3">
                      {pub.links.map((l) => (
                        <a
                          key={`${pubKey(pub)}::${l.href}`}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-[#e85d2a] hover:text-[#d14d1f] transition-colors text-sm"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>{l.label}</span>
                        </a>
                      ))}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}