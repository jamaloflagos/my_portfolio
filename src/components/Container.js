import classes from '../css/Container.module.css'
export default function Project(props) {
    
    return(
        <>
            <div className={classes.container}>{props.children}</div>
        </>
    )
}