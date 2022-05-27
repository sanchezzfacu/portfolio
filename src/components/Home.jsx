import About from './About'
import Projects from './Projects'
import Navbar from './Navbar'
import Presentation from './Presentation'
import Form from './Form'
import Technologies from './Technologies'
import '../css/Home.css'

function Home() {

    return (        
        <div className='app-container'>
            <Navbar/>    
            <Presentation/>
            <hr className='about-line'/>
            <About/>
            <hr className='technologies-line'/>
            <Technologies/>
            <hr className='projects-line'/>
            <Projects/>
            <hr />
            <Form/>
        </div>
    )
}

export default Home
