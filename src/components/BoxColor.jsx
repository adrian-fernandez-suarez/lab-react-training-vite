const rgbToHex = (r, g, b) => '#' + [r, g, b]
  .map(x => x.toString(16).padStart(2, '0')).join('')

export default function BoxColor({r, g, b}){
    const styles = {
        padding:'1rem',
        border:'1px solid black',
        marginBotton:15,
        backgroundColor: rgbToHex(r,g,b),
    };

    return (
        <div style={styles}>
            <p>rgb({r},{g},{b})</p>
            <p>{rgbToHex(r,g,b)}</p>
        </div>
    );
}