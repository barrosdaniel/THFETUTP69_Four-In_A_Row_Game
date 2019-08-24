class Board {
  constructor() {
    this.rows = 6;
    this.columns = 7;
    this.spaces = this.createSpaces();
  }

  /** 
   * Generates 2D array of spaces. 
   * @return  {Array}     An array of space objects
   */
  createSpaces() {
    const spaces = []

    for (let x = 0; x < this.rows; x++) {
      for (let y = 0; y < this.columns; y++) {
        const space = new Space(x + 1, y + 1);
        spaces.push(space.id);
      }
    }

    return spaces;
  }
}