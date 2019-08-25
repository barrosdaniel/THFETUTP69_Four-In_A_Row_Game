class Token {
  constructor(owner, index) {
    this.owner = owner;
    this.id = `token-${index + 1}-${owner}`;
    this.dropped = false;
  }

  drawHTMLToken() {
    const div = document.createElement('div');
    document.getElementById('game-board-underlay').appendChild(div);
    div.setAttribute('id', this.id);
    div.setAttribute('class', 'token');
    div.style.backgroundColor = this.owner.color;
  }

  get htmlToken() {
    const htmlToken = this.id;
    return htmlToken;
  }
}