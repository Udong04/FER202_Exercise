function Ex2() {
    const array = [1, 2, 3, 4];

    // Calculate sum
    const sum = array.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );

    // Calculate product
    const product = array.reduce(
        (accumulator, currentValue) => accumulator * currentValue,
        1
    );

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Array</h2>

            <div>[{array.join(", ")}]</div>

            <h3>Sum</h3>
            <div>{sum}</div>

            <h3>Product</h3>
            <div>{product}</div>
        </div>
    );
}

export default Ex2;