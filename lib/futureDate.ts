type WeekdayString =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";
type MonthString =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

function getDate(increment : number): string {
  // Create a date object for tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + increment);

  // Format options
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  // Format the date
  const formattedDate: string = tomorrow.toLocaleDateString("en-IN", options);

  // Split the formatted date into its components
  const [weekday, month, day, year] = formattedDate.replace(",", "").split(" ");

  // Construct the final string
  return `${weekday as WeekdayString}, ${month as MonthString} ${day}, ${year}`;
}

export default getDate;