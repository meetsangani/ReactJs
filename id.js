function Idcard(props){
    return(
        <>
        <div style={{width:"350px",height:"550px",border:"2px solid black"}}>
            <div style={{height:"15px",backgroundColor:"coral"}}></div>
            <div style={{height:"15px",backgroundColor:"teal"}}></div>
        <div style={{marginTop:"10px"}}>
            <img style={{height:"70px"}} src={require('./atmiya.png')} alt="Atmiya University"/>
            <h3>{props.faclty}</h3>
        </div>
        <div style={{marginTop:"5px"}}></div>
        <div><img style={{height:"70px"}} src={require('./man.jpg')} />
        <h3>{props.name}</h3>
        <h3>{props.roll}</h3>
        <h3>{props.enno}</h3>
        </div>
        <div><img style={{height:"50px"}} src={require('./download.png')} /></div>
        <h3>{props.uni}</h3>
        <div style={{height:"15px",backgroundColor:"coral"}}></div>
            <div style={{height:"15px",backgroundColor:"teal"}}></div>
        </div>
        </>
    );
}
export default Idcard;