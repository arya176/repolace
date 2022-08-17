import React from "react";
import Card from "./card";
import Avatar from "./avatar";
import Contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar imgURL="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      />

      <Card
        name={Contacts[0].name}
        img={Contacts[0].imgURL}
        phone={Contacts[0].phone}
        email={Contacts[0].email}
      />
      <Card
        name={Contacts[1].name}
        img={Contacts[1].imgURL}
        phone={Contacts[1].phone}
        email={Contacts[1].email}
      />
      <Card
        name={Contacts[2].name}
        img={Contacts[2].imgURL}
        phone={Contacts[2].phone}
        email={Contacts[2].email}
      />
    </div>
  );
}

export default App;
