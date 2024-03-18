export const Searchbox = ()=>{
    
    fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(data => console.log(data))
        return(
        <>
        <ul>
            <li>elemento</li>
            <li>elemento</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        
        
        </>
    ) 
}