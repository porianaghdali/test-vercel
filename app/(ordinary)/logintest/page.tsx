'use client'
import axios from "axios"


export default function pagelogin(){
    const handlelogin = ()=>{
        axios.post('/api/login', { 
            email: "porianaghdali@gmail.com", 
            password: "Xboy2424" 
          })
          .then(res => {
            if(res.status==200){
                alert('login is successful')
            }
            console.log(res)})
          .catch(err => console.log(err));
    }
return(
   <div>
    <button className="btn btn-primary" onClick={handlelogin}>test login</button>
   </div>
)
}