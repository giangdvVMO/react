import MyCartDetail from "./MyCartDetail";

const MyCart = ({ listProduct }) => {
    return (
        <>
            {
                listProduct.map((product) => {
                    return (
                        <div key={product.id}>
                            <MyCartDetail product={product} />
                        </div>
                    )
                })
            }
        </>
    )
}

export default MyCart;