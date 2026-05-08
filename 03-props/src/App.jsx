import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card
        user="Raj Singh"
        img="https://images.unsplash.com/photo-1704278917298-254db4a66741?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="John Doe"
        img="https://images.unsplash.com/photo-1756745679117-5f2c14a05321?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"
      />
      <Card
        user="Jane Smith"
        img="https://plus.unsplash.com/premium_photo-1711367287679-d6ce302fdc2b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1MHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"
      />
    </div>
  );
};

export default App;
