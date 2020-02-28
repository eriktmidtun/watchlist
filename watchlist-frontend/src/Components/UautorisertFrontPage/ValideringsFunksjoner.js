/* sjekk for om strengen er tom */
export const required = value => (value ? undefined : "Kan ikke være tom");

/* Sjekk for minimum lengde på streng */
export const minLength = min => value =>
  value && value.length < min ? `Må være minst ${min} bokstaver` : undefined;

export const minLength3 = minLength(3);

/* Sjekk for maksimum lengde på streng */
export const maxLength = max => value =>
  value && value.length > max
    ? `Maks lengde er ${max} bokstaver eller mindre`
    : undefined;

export const maxLength100 = maxLength(100);

/* Sjekk for om all passordfelt er like*/
export const passwordsMatch = (value, allValues) =>
  value !== allValues.password ? "Passordene må være like" : undefined;

/* Sjekk for om strenger er en gyldig epost addresse */
export const isEmail = value => {
  const emailPattern = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  return emailPattern.test(value) ? undefined : "Ikke en gyldig epost-addresse";
};

/* Sjekk for om første bokstav i hvert ord er en stor forbokstav */
export const firstCharCapital = value => {
  const words = value.split(" ");
  console.log("words", words);
  let word;
  for (word of words) {
    console.log("word", word);
    let char = word.charAt(0);
    console.log("char", char);
    if (char !== char.toUpperCase()) {
      return "Alle navn må starte med stor forbokstav";
    }
  }
  return undefined;
};
