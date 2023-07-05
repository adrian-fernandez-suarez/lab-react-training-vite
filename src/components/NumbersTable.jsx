export default function NumbersTable(limit = 1){
    const styles = {
        aspectRatio:1,
        width:50,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    };

    return (limit >= 1) ? Array.from({ length: limit }, (value, index) => index+1).map( (value) => (
        <div style={styles} key={index}>{value}</div>
    ) ) : null;
}