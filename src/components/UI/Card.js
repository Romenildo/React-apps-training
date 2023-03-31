
import classes from './Card.module.css'

const Card = props =>{

    return (
        //para o css do pai funcionar é necessario acionar dentro atraves das props.classname
        <div className={`${classes.card} ${props.className}`}>
            {props.children}
        </div>
    );
}

export default Card