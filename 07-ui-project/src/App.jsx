import React from "react";
import Section1 from "./Components/Section1/Section1";
import Section2 from "./Components/Section2/Section2";

const App = () => {
  const users = [
    { img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", color:"orange", intro: "", tag: "Satisfied" },
    { img: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", color:"lightseagreen", intro: "", tag: "Underserved" },
    { img: "https://images.unsplash.com/photo-1759593218431-6f1585bc14de?q=80&w=1304&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", color:"maroon", intro: "", tag: "Underbanked" },
    { img: "https://images.unsplash.com/photo-1635766854982-fc151c6e9278?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHwxfDB8fHwy", color:"green", intro: "", tag: "Average" },
    { img: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", color:"black", intro: "", tag: "Underbanked" },
  ];
  return (
    <div>
      <Section1 users = {users} />
      <Section2 />
    </div>
  );
};

export default App;
