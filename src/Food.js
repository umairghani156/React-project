export default function Food({foodDetail}){
    console.log("foodItems", foodDetail);
    return (
        <div style={{width:"350px", display: "flex", margin:"20px auto"}}>
            
                <img width={"37%"}  src={foodDetail.srcImg} alt="foodItems"/>
            
            <div style={{marginLeft: "20px", display: "flex", flexDirection:"column"}}>
            <h4 style={{marginTop: "0px", marginBottom: "0px"}}>{foodDetail.foodName}</h4>
            <p style={{fontSize:"14px"}}><i>{foodDetail.description}</i></p>
            <p style={{marginBottom:"0px"}}>{foodDetail.remaining == "0" ? "SOLD OUT" : foodDetail.remaining}</p>
            </div>
        </div>
    )
}