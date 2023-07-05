import Rating from "./Rating";

export default function DriverCard({name, rating, img, car}){
    const container = {
        borderRadius:5,
        backgroundColor:'#0969da',
        display:'flex',
        padding:20,
        justifyContent:'center',
        alignItems:'center',
        color:'#FFFFFF',
        marginBottom:24,
        columnGap:15,
    };

    return (
        <div className="driver-card" style={container}>
            <div className="avatar-container" style={{
                width:'25%',
            }}>
                <img src={img} alt={name} style={{
                    width:'100%',
                    height:'auto',
                    aspectRatio:'3/4',
                    objectFit:'cover',
                    objectPosition:'center',
                }} />
            </div>
            <div className="info" style={{
                textAlign:'left',
            }}>
                <h2 style={{
                    fontSize: '18px',
                    lineHeight:'22px',
                    margin:'0 0 10px 0',
                }}>{name}</h2>
                
                <Rating>{rating}</Rating>

                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    );
}