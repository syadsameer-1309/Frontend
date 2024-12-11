
const LoadStarwarsPeople = async () => {

  try {
  const response = await fetch("https://swapi.dev/api/people/1");
//   console.log("response");
  
//   console.log(response);
  
    const data = await response.json();

    console.log("=================This is the data of the person 1 in Starwars========");
    console.log(data.name);

  }
  catch (error) {
    console.log('ohno error', error);
  }
}

LoadStarwarsPeople();

