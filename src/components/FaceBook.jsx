import profiles from "../data/berlin.json";
import styles from './FaceBook.module.css';

function Profile({firstName, lastName, country, img, isStudent}){
 
    return (
        <article className={styles.profile}>
            <div className={styles.imageContainer}>
                <img src={img} alt="{firstName+' '+lastName}" />
            </div>
            <div className={styles.infoContainer}>
                <ul>
                    <li><b>First Name:</b> {firstName}</li>
                    <li><b>Last Name:</b> {lastName}</li>
                    <li><b>Country:</b> {country}</li>
                    <li><b>Type:</b> { isStudent ? 'Student' : 'Teacher' }</li>
                </ul>
            </div>
        </article>
    );
}

export default function FaceBook(){
    return profiles.map( (profile, index) => (<Profile key={index}  {...profile} />));
}