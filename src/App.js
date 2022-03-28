import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
// import writers from "./writers";
import ProfileCard from "./ProfileCard";
import ProfileForm from "./ProfileForm";

function App() {
  const [allProfile, setAllprofile] = useState([
    {
      firstName: "Hannah",
      lastName: "Montana",
      email: "hannah.montana@email.com",
      phone: "+223 024 455 000",
    },
  ]);

  const submit = (profile) => {
    const arr = allProfile;
    arr.push(profile);
    setAllprofile(arr);
  };

  return (
    <div>
      <h1>Writer Profiles</h1>
      <div className="container">
        <ProfileForm submit={submit} />
        {allProfile.map((writer) => (
          <ProfileCard key={writer.id} writer={writer} />
        ))}
      </div>
    </div>
  );
}

export default App;
