import Jumbotron from "./jumbotron/Jumbotron"
import Productos from "./productos/Productos"
import './landingpage.css'
import ContactForm from "./contact/ContactForm"

export default function LandingPage(){
    return (
        <main>
            <Jumbotron/>
            <Productos/>
            <ContactForm/>
        </main>
    )
}