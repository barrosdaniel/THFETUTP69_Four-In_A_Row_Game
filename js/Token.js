class Token {
  constructor(owner, index) {
    this.owner = owner;
    this.id = `token-${index + 1}-${owner}`;
    this.dropped = false;
  }

  drawHTMLToken() {
    const token = document.createElement('div');
    document.getElementById('game-board-underlay').appendChild(token);
    token.setAttribute('id', this.id);
    token.setAttribute('class', 'token');
    token.style.backgroundColor = this.owner.color;
  }

  get htmlToken() {
    const htmlToken = this.id;
    return htmlToken;
  }
}