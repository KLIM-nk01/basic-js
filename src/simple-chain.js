const CustomError = require("../extensions/custom-error");



const chainMaker = {
   arr : [],
   count: 0,
  getLength() {
    return this.count;
  },
  addLink(value) {
      this.count++;
      if(value === undefined){this.arr.push(`( )`)
    } else {this.arr.push(`( ${value} )`);}
       return this;
   
  },
  removeLink(position) {
    if(!(Number.isInteger(position)) || position > this.count ||  position === undefined ){
      this.arr = [];
      throw new Error(); 
    } else  {
      this.arr.splice(position-1, 1);
    }
    return this;
   
  },
  reverseChain() {
    this.arr = this.arr.reverse();
    return this;
  },
  finishChain() {
    let str = this.arr.join('~~');
    this.arr = [];

    return str;
  }
};

module.exports = chainMaker;
