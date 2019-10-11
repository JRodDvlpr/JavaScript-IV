/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/* Destroy prototype method for character object  
dimension is the size, height and width of object character
*/
class GameObject {
    constructor (attributes) {
    this.createdAt = attributes.createdAt;
    this.name = attributes.name;
    this.dimensions = attributes.dimensions;
    }

    destroy() {
    return `${this.name} was removed from the game.`;
    }
}
