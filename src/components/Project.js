import classes from '../css/Projects.module.css'
import image from '../assets/AZ.png'
export default function Project() {
    return(
        <div style={{color: 'white', width: '80vw', margin: 'auto'}} id='project'>
            <h1 style={{color: 'white', margin: '0 0 20px 0', fontSize: '3.5vw'}}>Take a look at some of my previous works</h1>
            <div className={classes.grid}>
                <div>
                    {/* <h1 className={classes.name}>A&Z Bistro</h1> */}
                    <img src={image} alt='bistro' className={classes.img} />
                </div>
                <h3></h3>
            </div>
            <h1 style={{margin:"20px 0 20px 0", fontSize: '3.5vw'}}>I can built product like <br /> this for your business too</h1>
            <a href=''>Contact me</a>
        </div>
    )
}