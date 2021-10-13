import React from 'react';
import styles from "./Collaborations.module.css";
import Typing from "react-typist";
import {collaborationsData} from "../data";
import Card from "../components/common/UI/Card";
import VisibilitySensor from "../components/common/VisibilitySensor";

function Collaborations(props) {
    return (
        <div>
            <div className={styles.titleContainer}>
                <Typing startDelay={100} avgTypingDelay={45} stdTypingDelay={1} cursor={{
                    show: false
                }}>
                    <p className={styles.title}>
                        Collaborations
                    </p>
                </Typing>
            </div>
            <div>
                {
                    collaborationsData.map(x =>
                        <VisibilitySensor key={x.title}>
                            {({isVisible}) => (
                                <Card className={isVisible ? styles.dataContainerFadeIn : styles.dataContainerFadeOut}
                                      key={x.title}>
                                    <p className={styles.subHeading}>{x.name}</p>
                                    <p className={styles.content}>{x.content}</p>
                                    <iframe src={x.video} title={x.name}/>
                                    <div className={styles.contactDiv}>
                                    <p className={styles.contactHeader}>Contact Them</p>
                                    <p className={styles.contact}>Email: {x.email}</p>
                                    <p className={styles.contact}>Phone: {x.phoneNo}</p>
                                        </div>
                                </Card>
                            )}
                        </VisibilitySensor>
                    )}
                )
                }
            </div>
        </div>
    );
}

export default Collaborations;