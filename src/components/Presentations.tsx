import { Calendar, MapPin, Presentation } from 'lucide-react';

interface PresentationType {
  id: number;
  year: number;
  title: string;
  type: 'keynote' | 'invited' | 'conference' | 'poster';
  event: string;
  location: string;
  date: string;
}

const presentations: PresentationType[] = [
  {
    id: 1,
    year: 2024,
    title: 'The Future of Computational Approaches in Mental Health Research',
    type: 'keynote',
    event: 'International Conference on Digital Mental Health',
    location: 'San Francisco, CA',
    date: 'October 2024'
  },
  {
    id: 2,
    year: 2024,
    title: 'Machine Learning for Early Detection of Psychosis',
    type: 'invited',
    event: 'Computational Psychiatry Seminar Series',
    location: 'Virtual',
    date: 'June 2024'
  },
  {
    id: 3,
    year: 2024,
    title: 'NLP Methods in Clinical Text Analysis',
    type: 'conference',
    event: 'Annual Meeting of the Society for Biological Psychiatry',
    location: 'Austin, TX',
    date: 'May 2024'
  },
  {
    id: 4,
    year: 2023,
    title: 'Predicting Treatment Outcomes Using Multimodal Data',
    type: 'conference',
    event: 'Conference on Computational Psychiatry',
    location: 'Boston, MA',
    date: 'November 2023'
  },
  {
    id: 5,
    year: 2023,
    title: 'Automated Risk Assessment from Clinical Notes',
    type: 'poster',
    event: 'American College of Neuropsychopharmacology Annual Meeting',
    location: 'Tampa, FL',
    date: 'December 2023'
  },
  {
    id: 6,
    year: 2023,
    title: 'Deep Learning Approaches to Suicide Risk Prediction',
    type: 'invited',
    event: 'Department of Psychiatry Grand Rounds',
    location: 'Johns Hopkins University',
    date: 'March 2023'
  },
  {
    id: 7,
    year: 2022,
    title: 'Computational Methods for Analyzing Mood Dynamics',
    type: 'conference',
    event: 'International Conference on Affective Computing',
    location: 'London, UK',
    date: 'September 2022'
  },
  {
    id: 8,
    year: 2022,
    title: 'Feature Engineering for Mental Health Prediction Models',
    type: 'poster',
    event: 'Neural Information Processing Systems (NeurIPS)',
    location: 'New Orleans, LA',
    date: 'November 2022'
  },
  {
    id: 9,
    year: 2021,
    title: 'Natural Language Processing in Psychiatry: Opportunities and Challenges',
    type: 'conference',
    event: 'Annual Conference on Neural Information Processing Systems',
    location: 'Virtual',
    date: 'December 2021'
  }
];

export function Presentations() {
  const yearGroups = presentations.reduce((acc, pres) => {
    if (!acc[pres.year]) {
      acc[pres.year] = [];
    }
    acc[pres.year].push(pres);
    return acc;
  }, {} as Record<number, PresentationType[]>);

  const years = Object.keys(yearGroups).sort((a, b) => Number(b) - Number(a));

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'keynote':
        return 'Keynote';
      case 'invited':
        return 'Invited Talk';
      case 'conference':
        return 'Conference Presentation';
      case 'poster':
        return 'Poster Presentation';
      default:
        return type;
    }
  };

  const getTypeBadgeClass = (type: string) => {
    switch (type) {
      case 'keynote':
        return 'bg-[#e85d2a] text-white';
      case 'invited':
        return 'bg-[#d4c4b0] text-[#2d2d2d]';
      case 'conference':
        return 'bg-white border border-[#d4c4b0] text-[#2d2d2d]';
      case 'poster':
        return 'bg-white border border-[#d4c4b0] text-[#5a5a5a]';
      default:
        return 'bg-white border border-[#d4c4b0] text-[#2d2d2d]';
    }
  };

  return (
    <div className="space-y-10">
      <h1 className="text-3xl text-[#2d2d2d] pb-4 border-b border-[#d4c4b0]">
        Presentations
      </h1>

      <div className="space-y-8">
        {years.map(year => (
          <section key={year} className="space-y-4">
            <h2 className="text-2xl text-[#e85d2a]">{year}</h2>
            <div className="space-y-4">
              {yearGroups[Number(year)].map(pres => (
                <div
                  key={pres.id}
                  className="bg-white border border-[#d4c4b0] rounded p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <Presentation className="w-5 h-5 text-[#e85d2a] mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <span className={`px-3 py-1 text-xs rounded ${getTypeBadgeClass(pres.type)}`}>
                          {getTypeLabel(pres.type)}
                        </span>
                      </div>
                      <h3 className="text-lg text-[#2d2d2d] mb-2">{pres.title}</h3>
                      <p className="text-[#5a5a5a] mb-3">{pres.event}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-[#5a5a5a]">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{pres.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{pres.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}