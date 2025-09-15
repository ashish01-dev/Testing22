import { CollegeCard } from './CollegeCard';

// todo: remove mock functionality - replace with real API data
const featuredColleges = [
  {
    name: 'IIT Delhi',
    location: 'New Delhi',
    ranking: 2,
    category: 'IIT',
    courses: ['B.Tech CSE', 'B.Tech EE', 'B.Tech ME', 'B.Tech CE'],
    cutoff: '121 closing rank for CSE (General)',
    fees: '₹2.5 lakh per year',
    applyUrl: 'https://www.iitd.ac.in'
  },
  {
    name: 'AIIMS Delhi',
    location: 'New Delhi',
    ranking: 1,
    category: 'AIIMS',
    courses: ['MBBS', 'BDS', 'BSc Nursing'],
    cutoff: 'Rank 55 (General)',
    fees: '₹1,464 per year',
    applyUrl: 'https://www.aiims.edu'
  },
  {
    name: 'IIT Roorkee',
    location: 'Uttarakhand',
    ranking: 6,
    category: 'IIT',
    courses: ['B.Tech CSE', 'B.Tech EE', 'B.Tech ME', 'B.Tech CE'],
    cutoff: '415 closing rank for CSE (General)',
    fees: '₹2.5 lakh per year',
    applyUrl: 'https://www.iitr.ac.in'
  },
  {
    name: 'NIT Kurukshetra',
    location: 'Haryana',
    ranking: 85,
    category: 'NIT',
    courses: ['B.Tech CSE', 'B.Tech EE', 'B.Tech ME'],
    cutoff: '95+ percentile for CSE (General)',
    fees: '₹1.8 lakh per year',
    applyUrl: 'https://www.nitkkr.ac.in'
  },
  {
    name: 'AIIMS Rishikesh',
    location: 'Uttarakhand',
    ranking: 8,
    category: 'AIIMS',
    courses: ['MBBS', 'BDS'],
    cutoff: 'Rank 178 (General)',
    fees: '₹1,464 per year',
    applyUrl: 'https://www.aiimsrishikesh.edu.in'
  },
  {
    name: 'Delhi Technological University',
    location: 'Delhi',
    ranking: 30,
    category: 'Government Engineering',
    courses: ['B.Tech CSE', 'B.Tech IT', 'B.Tech ECE'],
    cutoff: '92+ percentile for CSE',
    fees: '₹1.5 lakh per year',
    applyUrl: 'https://www.dtu.ac.in'
  }
];

export function CollegeGrid() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Government Colleges
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore top-ranked government colleges across Northern India with real 2024 cutoff data
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {featuredColleges.map((college, index) => (
            <CollegeCard
              key={index}
              {...college}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={() => console.log('View all colleges clicked')}
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 hover-elevate active-elevate-2 transition-colors"
            data-testid="button-view-all-colleges"
          >
            View All 2000+ Colleges
          </button>
        </div>
      </div>
    </section>
  );
}