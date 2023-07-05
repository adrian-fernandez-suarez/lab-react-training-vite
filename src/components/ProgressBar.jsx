export default function ProgressBar({title = '', color = '#563d7c', progress = 0}){
    
    const containerBar = {
        textAlign: 'left',
        marginBottom:15,
    };

    const backgroundBar = {
        position: 'relative',
        width:'100%',
        backgroundColor:'#CCCCCC',
        paddingTop:40,
    };

    const progressionBar = {
        backgroundColor: color,
        width: progress+'%',
        position: 'absolute',
        zIndex:1,
        top:0,
        left:0,
        bottom:0,
        color:'#FFFFFF',
        display:'flex',
        alignItems: 'center',
        justifyContent:'flex-end',
    };

    return (
        <div className="progress-bar" style={containerBar}>
            <label>{title}
                <div className="background-bar" style={backgroundBar}>
                    <div className="progression" style={progressionBar}>
                        <span className="percent">{progress+'%'}</span>
                    </div>
                </div>
            </label>
        </div>
    );
}