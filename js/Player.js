class Player {
  constructor(name, id, color, active = false) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.active = active;
    this.tokens = this.createTokens(21);
  }

  /**
   * Creates token objects for player
   * @param   {integer}   num - Number of token objects to be created
   * @return  {array}     tokens - an array of new token objects
   */
  createTokens(num) {
    const tokens = [];

    for (let index = 0; index < num; index++) {
      const token = new Token('player1', index);
      tokens.push(token);
    };

    return tokens;
  }
}