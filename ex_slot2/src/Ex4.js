function Ex4() {

    class Shape {
        constructor(color) {
            this.color = color;
        }

        getArea() {
            throw new Error("getArea() must be implemented");
        }

        toString() {
            return `Shape: color = ${this.color}`;
        }
    }


    class Rectangle extends Shape {
        constructor(color, length, width) {
            super(color);
            this.length = length;
            this.width = width;
        }

        getArea() {
            return this.length * this.width;
        }

        toString() {
            return `Rectangle: color = ${this.color}, length = ${this.length}, width = ${this.width}`;
        }
    }


    class Triangle extends Shape {
        constructor(color, base, height) {
            super(color);
            this.base = base;
            this.height = height;
        }

        getArea() {
            return (this.base * this.height) / 2;
        }

        toString() {
            return `Triangle: color = ${this.color}, base = ${this.base}, height = ${this.height}`;
        }
    }


    // Create objects
    const rectangle = new Rectangle("Red", 10, 5);
    const triangle = new Triangle("Blue", 10, 6);


    return (
        <div style={{ textAlign: "center" }}>

            <h2>Shape</h2>

            <h3>Rectangle</h3>
            <div>
                {rectangle.toString()}
            </div>

            <div>
                Area: {rectangle.getArea()}
            </div>


            <h3>Triangle</h3>
            <div>
                {triangle.toString()}
            </div>

            <div>
                Area: {triangle.getArea()}
            </div>

        </div>
    );
}

export default Ex4;