function Ex5() {
    const products = [
        {
            id: 1,
            name: "Laptop ASUS",
            inputPrice: 15000,
            outPrice: 18500,
            stock: 5
        },
        {
            id: 2,
            name: "Chuột",
            inputPrice: 300,
            outPrice: 450,
            stock: 0
        },
        {
            id: 3,
            name: "Bàn phím",
            inputPrice: 800,
            outPrice: 1200,
            stock: 10
        },
        {
            id: 4,
            name: "Màn hình Dell",
            inputPrice: 3500,
            outPrice: 4200,
            stock: 2
        }
    ];

    // 1. Thêm trạng thái
    const productList = products.map(product => ({
        ...product,
        status: product.stock > 0 ? "Còn hàng" : "Hết hàng"
    }));

    // 2. Giá bán lớn nhất
    const maxProduct = products.reduce((max, product) =>
        product.outPrice > max.outPrice ? product : max
    );

    // Giá bán nhỏ nhất
    const minProduct = products.reduce((min, product) =>
        product.outPrice < min.outPrice ? product : min
    );

    // 3. Tính lợi nhuận + sắp xếp giảm dần
    const sortedProducts = [...products]
        .map(product => ({
            ...product,
            profit: product.outPrice - product.inputPrice
        }))
        .sort((a, b) => b.profit - a.profit);

    return (
        <div style={{ textAlign: "center" }}>

            <h2>Product Management</h2>

            {/* 1. Danh sách sản phẩm */}
            <h3>Product List</h3>

            <div>
                {productList.map(product => (
                    <div key={product.id}>
                        {product.name} - Giá bán: {product.outPrice}
                        {" - "}
                        {product.status}
                    </div>
                ))}
            </div>


            {/* 2. Giá cao nhất */}
            <h3>Highest Selling Price</h3>

            <div>
                {maxProduct.name} - {maxProduct.outPrice}
            </div>


            {/* Giá thấp nhất */}
            <h3>Lowest Selling Price</h3>

            <div>
                {minProduct.name} - {minProduct.outPrice}
            </div>


            {/* 3. Lợi nhuận */}
            <h3>Products by Profit</h3>

            <div>
                {sortedProducts.map(product => (
                    <div key={product.id}>
                        {product.name} - Lợi nhuận: {product.profit}
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Ex5;