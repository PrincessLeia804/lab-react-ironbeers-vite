const fetchBeer = async (setter, url) => {
  const response = await fetch(url);

  if (response.status === 200) {
    const parsed = await response.json();
    setter(parsed);
  }
};

const fetchRandomBeer = (state, setter) => {
  const randomPick = state[Math.round(Math.random() * state.length)]
  setter(randomPick)
  }

  export {fetchBeer, fetchRandomBeer};