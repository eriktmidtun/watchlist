/* Check for empty string. */
export const required = value => (value ? undefined : "Kan ikke være tom");

/* Check for minimum string length. */
export const minLength = min => value =>
  value && value.length < min ? `Må være minst ${min} bokstaver` : undefined;

export const minLength3 = minLength(3);

/* Check for maximum string length. */
export const maxLength = max => value =>
  value && value.length > max
    ? `Maks lengde er ${max} bokstaver eller mindre`
    : undefined;

export const maxLength100 = maxLength(100);

/* Check that both password fields are equal. */
export const passwordsMatch = (value, allValues) =>
  value !== allValues.password ? "Passordene må være like" : undefined;

/* Check for valid email. */
export const isEmail = value => {
  const emailPattern = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  return emailPattern.test(value) ? undefined : "Ikke en gyldig epost-addresse";
};

/* Check for capital letters in names. */
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
