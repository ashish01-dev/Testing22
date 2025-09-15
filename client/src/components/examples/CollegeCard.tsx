import { CollegeCard } from '../CollegeCard';

export default function CollegeCardExample() {
  return (
    <div className="max-w-md mx-auto">
      <CollegeCard
        name="IIT Delhi"
        location="New Delhi"
        ranking={2}
        category="IIT"
        courses={["B.Tech CSE", "B.Tech EE", "B.Tech ME", "B.Tech CE"]}
        cutoff="121 closing rank for CSE (General)"
        fees="₹2.5 lakh per year"
        applyUrl="https://www.iitd.ac.in"
      />
    </div>
  );
}