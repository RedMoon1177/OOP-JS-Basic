// create a prototype (~ CLASS) - it is an object in js
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function() {
//         console.log('draw');
//     }
// };

///////// Note: there are 2 ways to construct an object in JS
// Factory Function (~ constructor)
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function() {
//             console.log('draw');
//         }
//     };
// }
// const circle = createCircle(1);


// Constructor function
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }
// const another = new Circle(1);


// const Circle1 = new Function('radius',`
// this.radius = radius;
// this.draw = function() {
//     console.log('draw');
// }
// `);

// const circle = new Circle1(1);



////////////////// TAKE-AWAYS ONLY FROM JS
// Circle.call({}, 1); // This calls the Circle function with the 'this' context set to an empty object {} and passes 1 as the radius argument.
// Circle.apply({}, [1,2,3])

// const another = new Circle(1);

// SUMMARY:
// - Circle.call({}, 1) and Circle.apply({}, [1,2,3]) temporarily set this to an empty object, but the modified object is not retained.
// - const another = new Circle(1) creates a new Circle instance with radius set to 1 and a draw method, which is retained in the another variable.