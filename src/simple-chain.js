// const chainMaker = {
//   chain: [],

//   getLength() {
//     return this.chain.length
//   },
//   addLink(value) {
//     this.chain.push(`( ${value} )`)
//     return this
//   },
//   removeLink(position) {
//     if(Number.isInteger(position) && 1 <= position && position < this.chain.length) {
//       this.chain.splice(position - 1, 1)
//       return this
//     }
//     throw 'not valid value';
    
//   },
//   reverseChain() {
//     this.chain.reverse()
//     return this
//   },
//   finishChain() {
//     return this.chain.join('~~')
//   }
// };

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain.push(`( ${value + ''} )`)
    return this
  },
  removeLink(position) {
    if(Number.isInteger(position) && 1 <= position && position <= this.chain.length) {
      this.chain.splice(position - 1, 1)
      return this
    } else {
      this.chain = [];
      throw 'error'
    };
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    const result = this.chain.join('~~');
    this.chain = []
    return result
  }
};

module.exports = chainMaker;
