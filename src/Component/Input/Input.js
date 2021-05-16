

export default function Input({ type, toggle, text }){
    const handleChange=()=>{
        // console.log(document.getElementById(type).value)
        return toggle (document.getElementById(type).value)
    }
    return(
        <>
        <input type={text} 
        id={type}
        name={type} 
        placeholder={`ADD ${type}`} 
        className="add-item-input"
        onChange = {handleChange}
        ></input>
        </>
    )
}