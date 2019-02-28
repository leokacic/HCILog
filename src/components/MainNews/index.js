import React, { Component } from 'react';
import styles from "./styles.module.css";
import "./styles.module.css";
import cn from "classnames";
import SporednaVijest from "../SporednaVijest";
import { Link } from "gatsby";



class MainNews extends Component{
  constructor(props) {
      super(props);
      this.state = {
        vijesti: props.data
      }
  }

  render() {
    console.log("vijesti: ", this.state.vijesti)
    const glavnaVijest = this.state.vijesti.glavnaVijest;
    const sporedneVijesti = this.state.vijesti.sporedneVijesti;
    const zanr = this.state.vijesti.glavnaVijest[0].zanr;
    console.log("zanr je", zanr);
    //className={styles[zanr]} za dinamicke klase
    return (
      <main className={styles.Main}>
        <div className={styles.GlavnaVijest}>
          <Link to="/one">
            <div className={styles.PrvaVijest}>
              <img className={styles.GlavnaSlika} src={require('../../images/' + glavnaVijest[0].src + '.jpg')} alt="Slonovi" />
              <div className={styles.BottomLeft}>
              <div className={cn(styles.OznakaG, styles[zanr])}><h3>{glavnaVijest[0].naslov}</h3> </div> 
                <p>{glavnaVijest[0].tekst}</p>
              </div>
            </div>
          </Link>
        </div>
        <div className={styles.SporedneVijesti}>
          {sporedneVijesti.map((vijest) => {
                              return (<SporednaVijest
                                  key={vijest.id}
                                  src={vijest.src}
                                  naslov={vijest.naslov}
                                  tekst={vijest.tekst}
                                  zanr={vijest.zanr}
                              />)
        })}
        </div>
        {/* <div className={styles.SporedneVijesti}>
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

          <div className={styles.DrugaVijest}>
            <img className={styles.SporedneSlike} src={Sophie} alt="Nikola Tesla" />
            <div className={styles.TekstSporednih}>
            <div className={styles.Oznaka}><h3>Vijest:</h3> </div> 
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </div> */}
      </main>
    
    );
  }
  
}


export default MainNews;

  


