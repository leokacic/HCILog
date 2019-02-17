import React from "react";
import styles from "./styles.module.css";

import Slon from "../../images/Slonovi.jpg";
import Tesla from "../../images/Tesla.jpg";
import Sophie from "../../images/SophieProfil.jpg";

export default () => (
  <main className={styles.Main}>
    <div className={styles.GlavnaVijest}>
      <div className={styles.PrvaVijest}>
        <img className={styles.GlavnaSlika} src={Slon} alt="Slonovi" />
        <div className={styles.BottomLeft}>
        <div className={styles.OznakaG}><h3>Vijest:</h3> </div> 
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
    <div className={styles.SporedneVijesti}>
      <div className={styles.DrugaVijest}>
        <img className={styles.SporedneSlike} src={Tesla} alt="Nikola Tesla" />
        <div className={styles.TekstSporednih}>
          <div className={styles.Oznaka}><h3>Vijest:</h3> </div> 
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className={styles.DrugaVijest}>
        <img className={styles.SporedneSlike} src={Sophie} alt="Nikola Tesla" />
        <div className={styles.TekstSporednih}>
        <div className={styles.Oznaka}><h3>Vijest:</h3> </div> 
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className={styles.DrugaVijesta}>
        <img className={styles.SporedneSlike} src={Sophie} alt="Nikola Tesla" />
        <div className={styles.TekstSporednih}>
        <div className={styles.Oznaka}><h3>Vijest:</h3> </div> 
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      </div>
  </main>
);
