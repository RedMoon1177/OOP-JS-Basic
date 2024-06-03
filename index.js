function Circle(radius) {
    this.radius = radius;


    // private members
    let defaultLocation = { x:0, y:0 };

    // getters/ setters
    this.getDefaultLocation = function() {
        return defaultLocation;
    };

    // public methods
    this.draw = function() {
        console.log('draw');
    };

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if(!value.x || !value.y)
                throw new Error('Invalid location');

            defaultLocation = value;
        }
    })
} 

const circle = new Circle(10);
circle.defaultLocation = {x:1, y:1};
circle.draw();

