class Token {
  constructor(owner, index) {
    this.owner = owner;
    this.id = `token-${index + 1}-${owner}`;
    this.dropped = false;
  }
}