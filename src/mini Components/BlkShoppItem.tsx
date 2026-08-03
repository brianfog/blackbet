


const ShopItem = ({shoptitle = "shoptitle"}) => {

    return (
        <div className="Shop-Item">
            <div className="Shop-Image">

            </div>
            <div className="Shop-Title">
                <h1>
                    {shoptitle}
                </h1>
                <button>BUY</button>
            </div>
        </div>
    )

}

export default ShopItem;