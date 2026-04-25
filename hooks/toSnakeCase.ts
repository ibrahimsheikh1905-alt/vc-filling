//change '-' to '_' if present in string
export const changeToSnake =(word:string) => {
    //change '-' to '_' if present in string
    return word.replace(/-/g, '_');
}
