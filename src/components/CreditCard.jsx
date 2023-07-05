export default function CreditCard ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}){
    const containerCard = {
        backgroundColor: bgColor,
        color: color,
        display:'inline-flex',
        margin:'0 15px 15px 15px',
        borderRadius:6,
        aspectRatio:'16/9',
        flexDirection:'column',
        justifyContent: 'space-between',
        padding:15,
        width:400,
    };


    // Reemplazar los dígitos por caracteres ocultos
    number = '*'.repeat(number.length - 4) + number.slice(-4);
    number = number.replace(/(.{4})/g, "$1 ");
    
    let logo = '';
    const metaColumn = {
        flex: '1 0 50%',
    };

    switch (type) {
        case 'Visa': logo = 'https://w7.pngwing.com/pngs/371/4/png-transparent-visa-debit-card-credit-card-logo-mastercard-visa-text-trademark-logo.png'; break;
        case 'Master Card': logo = 'https://www.pngplay.com/wp-content/uploads/12/Visa-Card-Logo-No-Background.png'; break;
    }

    return (
        <div className="credit-card" style={containerCard}>
            <div className="logo" style={{
                display:'flex',
                justifyContent:'flex-end',
                height:50,
            }}>
                <img src={logo} alt={type} style={{
                    width:'auto',
                    height:'100%',
                }}/>
            </div>
            
            <div className="number" style={{
                fontSize:'2rem',
                lineHeight: '2.5rem',
                textAlign: 'center',
            }}>
                {number}
            </div>

            <div className="meta" style={{
                textAlign:'left',
                display:'flex',
                justifyContent:'flex-start',
                flexWrap:'wrap',
            }}>
                <div className="expires" style={metaColumn}>
                    <span>Expires </span>{expirationMonth}/{expirationYear}
                </div>
                <div className="bank" style={metaColumn}>{bank}</div>
                <div className="owner" style={{
                    flex:'1 1 100%',
                }}>{owner}</div>
            </div>
        </div>
    );
}