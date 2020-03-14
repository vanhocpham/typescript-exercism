class TwoFer {
  public static twoFer( name?:string ): string {
    // Your code here
    return `One for ${ !name ? "you" : name }, one for me.`
  }
}

export default TwoFer
