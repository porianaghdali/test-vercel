

import Header from "../../../components/sections/header"
import Communication from "./sections/communication/communication"
import Questions from "./sections/questions/questions"

 const ContactUs=()=>{
    return(
        <div className="px-[6%] mb-16" >
        <Header title="ارتباط با ما" description= "ما همیشه یک پیام یا تماس با شما فاصله داریم!"/>
        <Communication/>
        <Questions/>
        </div>
    )
 }
 export default ContactUs