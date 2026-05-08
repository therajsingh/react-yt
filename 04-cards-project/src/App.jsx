import React from "react";
import Card from "./components/Card";

const jobOpenings = [
  {
    img: "https://www.google.com/s2/favicons?sz=128&domain_url=amazon.com",
    companyName: "Amazon",
    jobTitle: "Software Engineer",
    jobposted: "2 days ago",
    shift: "Full-time",
    level: "Mid-level",
    salary: "50",
    location: "Seattle, WA",
  },
  {
    img: "https://www.google.com/s2/favicons?sz=128&domain_url=google.com",
    companyName: "Google",
    jobTitle: "Product Manager",
    jobposted: "1 day ago",
    shift: "Part-time",
    level: "Senior",
    salary: "70",
    location: "Mountain View, CA",
  },
  {
    img: "https://www.google.com/s2/favicons?sz=128&domain_url=microsoft.com",
    companyName: "Microsoft",
    jobTitle: "Data Scientist",
    jobposted: "3 days ago",
    shift: "Contract",
    level: "Mid-level",
    salary: "60",
    location: "Redmond, WA",
  },
  {
    img: "https://www.google.com/s2/favicons?sz=128&domain_url=apple.com",
    companyName: "Apple",
    jobTitle: "UX Designer",
    jobposted: "5 days ago",
    shift: "Full-time",
    level: "Junior",
    salary: "45",
    location: "Cupertino, CA",
  },
  {
    img: "https://www.google.com/s2/favicons?sz=128&domain_url=tesla.com",
    companyName: "Tesla",
    jobTitle: "Sales Associate",
    jobposted: "1 week ago",
    shift: "Part-time",
    level: "Entry-level",
    salary: "35",
    location: "Austin, TX",
  },
  {
    img: "https://www.google.com/s2/favicons?sz=128&domain_url=netflix.com",
    companyName: "Netflix",
    jobTitle: "Content Strategist",
    jobposted: "2 weeks ago",
    shift: "Full-time",
    level: "Senior",
    salary: "80",
    location: "Los Gatos, CA",
  },
  {
    img: "https://www.google.com/s2/favicons?sz=128&domain_url=meta.com",
    companyName: "Meta",
    jobTitle: "Frontend Engineer",
    jobposted: "4 hours ago",
    shift: "Full-time",
    level: "Mid-level",
    salary: "75",
    location: "Menlo Park, CA",
  },
  {
    img: "https://www.google.com/s2/favicons?sz=128&domain_url=ibm.com",
    companyName: "IBM",
    jobTitle: "Cloud Engineer",
    jobposted: "1 day ago",
    shift: "Full-time",
    level: "Senior",
    salary: "65",
    location: "Armonk, NY",
  },
  {
    img: "https://www.google.com/s2/favicons?sz=128&domain_url=openai.com",
    companyName: "OpenAI",
    jobTitle: "AI Research Engineer",
    jobposted: "6 hours ago",
    shift: "Full-time",
    level: "Senior",
    salary: "120",
    location: "San Francisco, CA",
  },
  {
    img: "https://www.google.com/s2/favicons?sz=128&domain_url=salesforce.com",
    companyName: "Salesforce",
    jobTitle: "Backend Developer",
    jobposted: "2 days ago",
    shift: "Full-time",
    level: "Mid-level",
    salary: "68",
    location: "San Francisco, CA",
  },
  {
    img: "https://www.google.com/s2/favicons?sz=128&domain_url=linkedin.com",
    companyName: "LinkedIn",
    jobTitle: "Software Development Engineer",
    jobposted: "5 days ago",
    shift: "Full-time",
    level: "Junior",
    salary: "58",
    location: "Sunnyvale, CA",
  },
  {
    img: "https://www.google.com/s2/favicons?sz=128&domain_url=uber.com",
    companyName: "Uber",
    jobTitle: "Mobile App Developer",
    jobposted: "3 days ago",
    shift: "Contract",
    level: "Mid-level",
    salary: "62",
    location: "San Francisco, CA",
  },
  {
    img: "https://www.google.com/s2/favicons?sz=128&domain_url=oracle.com",
    companyName: "Oracle",
    jobTitle: "Database Engineer",
    jobposted: "1 week ago",
    shift: "Full-time",
    level: "Senior",
    salary: "72",
    location: "Austin, TX",
  },
  {
    img: "https://www.google.com/s2/favicons?sz=128&domain_url=adobe.com",
    companyName: "Adobe",
    jobTitle: "UI Engineer",
    jobposted: "2 days ago",
    shift: "Full-time",
    level: "Mid-level",
    salary: "66",
    location: "San Jose, CA",
  },
  {
    img: "https://www.google.com/s2/favicons?sz=128&domain_url=nvidia.com",
    companyName: "NVIDIA",
    jobTitle: "Machine Learning Engineer",
    jobposted: "8 hours ago",
    shift: "Full-time",
    level: "Senior",
    salary: "110",
    location: "Santa Clara, CA",
  },
  {
    img: "https://www.google.com/s2/favicons?sz=128&domain_url=intel.com",
    companyName: "Intel",
    jobTitle: "Embedded Systems Engineer",
    jobposted: "4 days ago",
    shift: "Full-time",
    level: "Entry-level",
    salary: "55",
    location: "Santa Clara, CA",
  },
];

const App = () => {
  return (
    <div className="parent">
      {jobOpenings.map((job, index) => (
        <div key={index}>
          <Card
            img={job.img}
            companyName={job.companyName}
            jobTitle={job.jobTitle}
            jobposted={job.jobposted}
            shift={job.shift}
            level={job.level}
            salary={job.salary}
            location={job.location}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
