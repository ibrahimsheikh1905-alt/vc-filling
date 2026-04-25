function camelToSentenceCase(text: string): string {
  // Replace uppercase letters with space followed by the lowercase version of the letter
  const sentence = text
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase()); // Capitalize the first letter

  return sentence.trim();
}

export default camelToSentenceCase;
