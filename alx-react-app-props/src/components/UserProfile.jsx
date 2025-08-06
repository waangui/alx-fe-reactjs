const UserProfile = (props) => {
    return(
        <div style={{padding:"15px", backgroundColor: "#EDF1E9", border: '0px', margin: '10px', borderStyle: 'solid'  }}>
            <h2 style = {{ color: "#527125", fontWeight: "bold", fontSize:'26px'}}>{props.name}</h2>
            <p style={{fontSize: '18px'}}> <span style={{fontWeight: 'bold', color: 'blue'}}>Age:</span> {props.age} </p>
            <p style={{fontSize: '18px'}}> <span style={{fontWeight: 'bold', color: 'blue'}}>Bio:</span> {props.bio}</p>
        </div>
    )
}

export default UserProfile;