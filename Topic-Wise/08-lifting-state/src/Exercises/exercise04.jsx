// Topic: Lifting State, useState
// Level: Intermediate
// Problem: Tabs Component - Challenge 

import { useState } from "react";

function TabApp(){
  const [activeTab, setActiveTab] = useState("Home");

  return(
    <div>
      <h1>Tabs UI</h1>
      <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabContent activeTab={activeTab} />
    </div>
  )
}

function TabHeader({activeTab, setActiveTab}){
  const tabs = ["Home", "About", "Contact"]

  return(
    <div>
      {tabs.map((tab) => {
        return(
        <button 
          key={tab}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
        )
      })}
    </div>
  )
}

function TabContent({activeTab}){
  return(
    <div>
      {activeTab === "Home" && <Home />}
      {activeTab === "About" && <About />}
      {activeTab === "Contact" && <Contact />}
    </div>
  )
}

function Home(){
  return(<p>Welcome to Home Page</p>)
}

function About(){
  return(<p>About me: I build cool website with react </p>)
}

function Contact(){
  return(<p>Contact me at: contact@example.com</p>)
}

export default TabApp