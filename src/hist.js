console.log("history");

function hist() {
  const wrapper = document.querySelector('#myTabContent');
  wrapper.innerHTML = '';
  const h2 = document.createElement("h2");
  h2.textContent = "History";
  h2.style.cssText = " text-align: center; color: seashell;";
  wrapper.appendChild(h2);
  const div = document.createElement("div");
  div.innerHTML = `
  <p>More than 50 years ago, the legendary French chansonnier Gilbert Bécaud performed in Moscow. When he returned
    to
    Paris he wrote the song “Natalie” and dedicated it to his Russian guide. The song goes: “We are walking
    around
    Moscow, visiting Red Square, and you are telling me learned things about Lenin and the Revolution, but I’m
    thinking, ‘I wish we were at Café Pushkin, looking at the snow outside the windows. We’d drink hot
    chocolate,
    and talk about something completely different…’”</p>

  <p>The song became incredibly popular in France, and it is no wonder that French visitors to Moscow tried to
    find
    “Café Pushkin.” They couldn’t find it as it existed only as a poetic fantasy in Bécaud’s song. But it was
    the
    song that inspired Andrei Dellos, an artist and restaurateur with Franco-Russian roots, to create “Café
    Pushkin.”
    On June 4, 1999, “Café Pushkin” opened in a Baroque mansion on Tverskoy Boulevard. At the grand opening,
    Gilbert
    Bécaud performed his world-famous song “Natalie.”</p>
  <p>Tverskoy Boulevard and the streets around it played a significant, almost mystical role in the life of
    Russian
    poet Alexander Pushkin. When the boulevard opened in 1796, it became a favorite place among Moscow high
    society
    for a stroll. Pushkin could be found there frequently.</p>
  <p>The famous dancing master Jogel, who taught dance to the children of Moscow and St Petersburg’s nobility for
    many
    years, hosted children’s balls at the house of the Kologrivov family, which stood where the Moscow Gorky
    Arts
    Theatre now stands. It was at one such ball that Pushkin met his future wife, Natalya Goncharova. At the far
    end
    of the boulevard, near the Nikitsky Gates, is the church where the couple later married. The statue of
    Pushkin
    originally stood on Tverskoy Boulevard, too.</p>`;
  div.style.cssText =
    " text-align: center; margin-left: auto;margin-right: auto; line-height: 20px;width: 36em;line-height: 1.5; color: seashell;";
  wrapper.appendChild(div);
}

export { hist };
