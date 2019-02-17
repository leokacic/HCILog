import React from "react";
import styles from "./styles.module.css";
import Data from '../../../data.json';
import Casablanca from "../../images/Casablanca.jpg";
import Obala from "../../images/Obala.jpg";
import UkletaKuca from "../../images/UkletaKuca.jpg";
import Android from "../../images/Android.jpg";

class Aside extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        vijesti: Data.NOVOSTI.news, //radi ostalih vijesti unutar jedne vijesti
        search: '',
        postojiVijest: true
      };
  }
  render(){

    return (
    <aside className={styles.Aside}>
    <h2>Najnovije</h2>
    <div className={styles.asideContent}>
      <div className={styles.card}>
        <div>
          <img
            className={styles.SlikaNovosti}
            src={Casablanca}
            alt="Casablanca"
          />
        </div>
        <div className={styles.TekstNovosti}>
          <div className={styles.Oznaka}><h3>Vijest:</h3> </div> 
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className={styles.card}>
        <div>
          <img className={styles.SlikaNovosti} src={Obala} alt="Casablanca" />
        </div>
        <div className={styles.TekstNovosti}>
        <div className={styles.Oznaka}><h3>Vijest:</h3> </div> 
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className={styles.card}>
        <div>
          <img
            className={styles.SlikaNovosti}
            src={UkletaKuca}
            alt="Casablanca"
          />
        </div>
        <div className={styles.TekstNovosti}>
        <div className={styles.Oznaka}><h3>Vijest:</h3> </div> 
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className={styles.card}>
        <div>
          <img className={styles.SlikaNovosti} src={Android} alt="Casablanca" />
        </div>
        <div className={styles.TekstNovosti}>
        <div className={styles.Oznaka}><h3>Vijest:</h3> </div> 
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className={styles.card}>
        <div>
          <img className={styles.SlikaNovosti} src={Android} alt="Casablanca" />
        </div>
        <div className={styles.TekstNovosti}>
        <div className={styles.Oznaka}><h3>Vijest:</h3> </div> 
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  </aside>
    );
  }  
}

export default Aside;

