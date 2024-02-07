const Items=(props)=>{

    const {data}=props
    const{name,age,designation}=data

    return(
        <li><h2>Name:{name}</h2> <h2>Age:{age}</h2> <h2>Designation:{designation}</h2></li>

    )
}
export default Items;