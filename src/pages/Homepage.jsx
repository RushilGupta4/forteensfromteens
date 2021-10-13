import React from 'react';
import Typing from 'react-typist';
import styles from './Homepage.module.css';
import {homepageSocialButtonsData} from "../data";


function Homepage() {
    return (
        <div className={styles.titleContainer}>
            <Typing startDelay={100} avgTypingDelay={35} stdTypingDelay={0} cursor={{
                show: false
            }}>
                <p className={styles.title}>
                    For Teens,
                    <br/>
                    <Typing.Delay ms={250}/>
                    From Teens
                </p>

            </Typing>
            <div className={styles.socialButtons}>
                {
                    homepageSocialButtonsData.map(x =>
                        <a href={x.url} key={x.img} rel={"noopener noreferrer nofollow"} target={"_blank"}>
                            <img className={styles.socialButtonImg} src={x.img} alt={x.url}/>
                        </a>
                    )
                }
            </div>
        </div>
    );
}

export default Homepage;