export default function Friend({friend}){
    console.log(friend)
    const {id,name, username, email} = friend;
    return(
        <div className="box">
            <p>Id : {id}</p>
            <p>Name : {name}</p>
            <p>UserName : {username}</p>
            <p>Email : {email}</p>
        </div>
    )

}