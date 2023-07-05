export default function Random({min, max}){
    min = Math.ceil(min);
    max = Math.floor(max);
    return (
        <div style={{
            textAlign: 'left',
            padding:'.5rem',
            marginBottom:15,
            border:'1px solid black',
        }}>
            <p>Random value between {min} and {max} {' => ' + Math.floor(Math.random() * (max - min + 1) + min)}</p>
        </div>
    );
}