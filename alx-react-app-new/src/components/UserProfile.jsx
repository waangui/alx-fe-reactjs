const UserProfile = (props) => {
    return(
        <div style={{padding:"15px", backgroundColor: "#EDF1E9", }}>
            <h2 style = {{ color: "#527125", fontWeight: "bold", fontSize:'26px'}}>{props.name}</h2>
            <p style={{fontSize: '18px'}}>Age: {props.age}</p>
            <p style={{fontSize: '18px'}}>Bio: {props.bio}</p>
        </div>
    )
}

export default UserProfile;