import classes from '../css/Home.module.css'
import {Link} from 'react-scroll'

export default function Home() {
    
    return (
        <div className={classes.home}>
            <header>
                <h1 className={classes.jamal}>Jamal</h1>
                <a  href=''
                    download
                    className={classes.resume}
                >Resume</a>
            </header>
            <div className={classes.row}>
                <div className={classes.myInfo}>
                    <h1 style={{fontSize: '5vw', color: 'white', marginBottom: '10px'}}>Ishaq Jamal O.</h1>
                    <h1>I am a creative <br /> <span style={{color: 'white'}}>Frontend Web Developer</span> <br /> proficient in turning ideas <br /> into usable and reliable products.</h1>
                </div>
                <div className={classes.hire}>
                    <h1>Are you searching for software <br />  engineering talents to hire?</h1>
                    <div className={classes.flex}>
                        <h1>Search no more</h1>
                        <Link 
                            to='skillset'
                            smooth={true}
                            duration={1000}
                        >
                            Hire me
                        </Link>
                    </div>
                </div>
                <div className={classes.biz}>
                    <h1>Do you run a business <br /> and want to create an online<br /> presence for your business <br /> in order to increase you sales?</h1>
                    <div className={classes.flex}>
                        <h1>I can help you with that</h1> 
                        <Link
                            to='project'
                            smooth={true}
                            duration={1000}
                        >Contact Me</Link>
                    </div>
                </div>
            </div>
            
        </div> 
    )
}