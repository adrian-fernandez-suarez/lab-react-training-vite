
export default function IdCard({firstName, lastName, gender, height, birth, picture}){
    return (
    <div className="idCard" style={{
        display: 'flex',
        gap:15,
        border:'1px solid black',
        marginBottom:'1rem',
        padding:'0.3rem',

    }}>
        <div className="pictureContainer" style={{
           minWidth:186
        }}>
            <img src={picture} alt={firstName} style={{
                objectFit:'cover',
                objPosition:'center',
                height:'100%',
                display:'block',

            }}/>
        </div>

        <div className="info" style={{
            flex:'1',
            textAlign:'left',

        }}>
            {firstName && <p><strong>First Name: </strong> {firstName}</p>}
            {lastName && <p><strong>Last Name: </strong> {lastName}</p>}
            {gender && <p><strong>Gender: </strong>{gender}</p>}
            {height && <p><strong>Height: </strong>{(height/100)+'m'}</p>}
            {birth && <p><strong>Birth: </strong>{birth.toDateString()}</p>}
        </div>
    </div>
    );
}
