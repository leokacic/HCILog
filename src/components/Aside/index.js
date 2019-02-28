import React, { Component } from 'react';
import styles from "./styles.module.css";
import cn from "classnames";

class Aside extends Component{
  constructor(props) {
      super(props);
      this.state = {
        vijesti: props.data
      }
  }

  render() {
    const asideFiltered = this.state.vijesti.filter(element => element.id <= 5)
    const zanrGlobalni = this.state.vijesti[0].zanr;

    const _aside = asideFiltered.map(element => {
    const image = element.src;
    //className={cn(styles.Oznaka, styles[zanr])}
    return (
            <div className={styles.card}  key={element.id}>
              <div className={styles.slika}>
                <img
                  className={styles.SlikaNovosti}
                  src={require('../../images/' + image + '.jpg')}
                  alt={element.alt}
                />
              </div>
              <div className={styles.TekstNovosti}>
                <div ><h3>{element.naslov}</h3> </div> 
                <p>{element.tekst}</p>
              </div>
            </div>
        )
    });
    return (
      <aside className={cn(styles.Aside, styles[zanrGlobalni])}>
      <h2 className={styles.naj}>Najnovije</h2>
      <div className={styles.asideContent}>
        {_aside}
      </div>
      </aside>
    );
  }
  
}

export default Aside;
