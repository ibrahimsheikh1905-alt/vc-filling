function snakeToSentenceCase(str: string): string {
  return str
    ?.split("_") // Split the string by underscores
    ?.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize first letter and lowercase the rest
    .join(" "); // Join the words with spaces
}

// Example usage:
export default snakeToSentenceCase;
