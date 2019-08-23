class Token {
  constructor(owner) {
    this.owner = owner;
    this.id = `token-${index}-${owner}`;
    this.dropped = false;
  }
}