export class ResistorColor {
  public arrColor: Array<string> = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
  ];


  private colors: string[];

  constructor(colors: string[]) {
    if (colors.length < 2) {
      throw new Error("At least two colors need to be present");
    }
    this.colors = colors.slice(0, 2);
  }
  public value(): number {
    const result = this.colors
      .map((color) => this.arrColor.indexOf(color))
      .join('');
    return Number(result);
  }
}
