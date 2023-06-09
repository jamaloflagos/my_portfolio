import classes from '../css/Contact.module.css'
export default function Contact() {
    return(
        <div style={{width: '80vw', margin: '50px auto 20px auto'}}>
            {/* <h1>You have an idea?</h1>
            <h2>Tell me about it.</h2>
            <h2>I never cease to channel any given ideas into a reality.</h2>
            <button>Get in touch</button>
            <h2>Are you looking for talents to hire then search no more, you have one here</h2>
            <button>Hire Me</button> */}

            <h1 className={classes.let}>Let's Connect</h1>
            <div className={classes.line}></div>
            <div className={classes.socials}>
                <a style={{background: 'none', border: 'none'}} href='https://github.com/jamaloflagos'> <i className="fa-brands fa-github" style={{color: 'white'}}></i> </a>
                <a style={{background: 'none', border: 'none'}} href='https://twitter.com/OluwatoyinJamal'> <i className="fa-brands fa-twitter" style={{color: 'white'}}></i> </a>
                <a style={{background: 'none', border: 'none'}} href='https://www.linkedin.com/in/ishaq-jamal-214052247/'> <i className="fa-brands fa-linkedin" style={{color: 'white'}}></i> </a>
                <a style={{background: 'none', border: 'none'}} href='https://wa.me/08135536774'> <i className="fa-brands fa-whatsapp" style={{color: 'white'}}></i> </a>
            </div>

        </div>
    )
}