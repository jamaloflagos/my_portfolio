import classes from '../css/About.module.css'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import bootstrap from '../assets/bootstrap.jfif'
import react from '../assets/react.png'
// import vercel from '../assets/vercel.png'
import firebase from '../assets/firebase.png'
import git from '../assets/git.png'
import framer from '../assets/framer.jfif'






export default function About() {
    return(
        <>
            
            <div id='skillset' className={classes.skillset}> 
                <h1>My Skillset</h1>
                <div className={classes.row}>
                    <div className={classes.col}>
                        <img src={html} alt='html' />
                        <div className={classes.flex}>
                            <h1>HTML 5 <span style={{fontSize: '2vw'}}>-- Proficient</span></h1>
                            <a style={{marginTop: '5px', paddingBottom: '10px'}} href='mailto: toyinjamal@gmail.com'>Hire me</a>
                        </div>
                    </div>
                    <div className={classes.col}>
                        <img src={css} alt='css' />
                        <div className={classes.flex}>
                            <h1>CSS <span style={{fontSize: '2vw'}}>-- Proficient</span></h1>
                            <a style={{marginTop: '5px', paddingBottom: '10px'}} href='mailto: toyinjamal@gmail.com'>Hire me</a>
                        </div>
                    </div>
                    <div className={classes.col}>
                        <img src={bootstrap} alt='bootstrap' />
                        <div className={classes.flex}>
                            <h1>Bootstrap <span style={{fontSize: '2vw'}}>-- Familiar</span></h1>
                            <a style={{marginTop: '5px', paddingBottom: '10px'}} href='mailto: toyinjamal@gmail.com'>Hire me</a>
                        </div>
                    </div>
                    <div className={classes.col}>
                    <   img src={javascript} alt='js' />
                        <div className={classes.flex}>
                            <h1>Javascript <span style={{fontSize: '2vw'}}>-- Proficient</span></h1>
                            <a style={{marginTop: '5px', paddingBottom: '10px'}} href='mailto: toyinjamal@gmail.com'>Hire me</a>
                        </div>
                    </div>
                    <div className={classes.col}>
                        <img src={react} alt='react' />
                        <div className={classes.flex}>
                            <h1>React <span style={{fontSize: '2vw'}}>-- Proficient</span></h1>
                            <a style={{marginTop: '5px', paddingBottom: '10px'}} href='mailto: toyinjamal@gmail.com'>Hire me</a>
                        </div>
                    </div>
                    <div className={classes.col}>
                        <img src={framer} alt='framer' />
                        <div className={classes.flex}>
                            <h1 className={classes.framer}>Framer motion <span style={{fontSize: '2vw'}}>-- Proficient</span></h1>
                            <a style={{marginTop: '5px', paddingBottom: '10px'}} href='mailto: toyinjamal@gmail.com'>Hire me</a>
                        </div>
                    </div>
                    <div className={classes.col}>
                        <img src={git} alt='git' />
                        <div className={classes.flex}>
                            <h1>Git <span style={{fontSize: '2vw'}}>-- Proficient</span></h1>
                            <a style={{marginTop: '5px', paddingBottom: '10px'}} href='mailto: toyinjamal@gmail.com'>Hire me</a>
                        </div>
                    </div>
                    <div className={classes.col}>
                        <img src={firebase} alt='firebase' />
                        <div className={classes.flex}>
                            <h1>Firebase <span style={{fontSize: '2vw'}}>-- Familiar</span></h1>
                            <a style={{marginTop: '5px', paddingBottom: '10px'}} href='mailto: toyinjamal@gmail.com'>Hire me</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}