import React from "react";
import styles from "./styles.module.css";
import Slon from "../../images/Slonovi.jpg";

export default () => (
  <div className={styles.OneNews}>
      <img className={styles.GlavnaSlika} src={Slon} alt="Slonovi" />
      <div className={styles.BottomLeft}>
      <div className={styles.OznakaG}><h3>Vijest:</h3> </div> 
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
    </div>
  </div>
  );
  