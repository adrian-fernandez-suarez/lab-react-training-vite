export default function Greetings({lang, children}){
    let result = '';

    switch(lang){
        case 'de': result = 'Hallo'; break;
        case 'en': result = 'Hello'; break;
        case 'es': result = 'Hola'; break;
        case 'fr': result = 'Bonjour'; break;
    }
    
    return (
        <div style={{
            border:'1px solid black',
            padding:'1rem',
            marginBottom: '.5rem',
            textAlign:'left',
        }}>
            <p>{result+' '+children}</p>
        </div>
    );
}