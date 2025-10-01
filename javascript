<script>
  // Cape Town Info
  const capeTown = {
    name: "Cape Town",
    history: "Founded in 1652 by the Dutch as a refreshment station.",
    culture: "A vibrant mix of African, Dutch, and Cape Malay traditions.",
    attractions: "Table Mountain, Robben Island, V&A Waterfront, Boulders Beach."
  };

  document.getElementById("cape-town-info").innerHTML = `
    <h2>About ${capeTown.name}</h2>
    <p><b>History:</b> ${capeTown.history}</p>
    <p><b>Culture:</b> ${capeTown.culture}</p>
    <p><b>Attractions:</b> ${capeTown.attractions}</p>
  `;

  // Show More / Show Less
  function toggleInfo() {
    const extra = document.getElementById("extra-info");
    const btn = document.getElementById("toggle-btn");
    const showing = extra.style.display === "block";
    extra.style.display = showing ? "none" : "block";
    btn.textContent = showing ? "Show More" : "Show Less";
  }

  // Random Fun Fact
  const funFacts = [
    "Cape Town is called the 'Mother City' of South Africa.",
    "Table Mountain has more plant species than the UK.",
    "You can find wild African penguins at Boulders Beach.",
    "Cape Town was one of the host cities for the 2010 FIFA World Cup."
  ];
  const random = Math.floor(Math.random() * funFacts.length);
  document.getElementById("fun-fact").innerHTML = `<h3>Fun Fact:</h3><p>${funFacts[random]}</p>`;
</script>
