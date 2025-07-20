// Topic: React Components  
// Level: Boss-Level  
// Problem: Create a component called ProfileCard that accepts name, job, and funFact as variables.  
// Use the component 3 times with different values inside App.

function ProfileCard({name, job, funFact}){
  return(
    <div>
      <h1>{name}</h1>
      <h3>{job}</h3>
      <p>{funFact}</p>
    </div>
  )
}

function Profile(){
  return(
    <div>
      <ProfileCard 
      name = "Varun"
      job = "Frontend Developer"
      funFact = "Trying to escape rat race"
      />
      <ProfileCard 
      name = "Virat Kohli"
      job = "Cricketer"
      funFact = "He is the only player who has never been auctioned"
      />
    </div>
  )
}

export default Profile;