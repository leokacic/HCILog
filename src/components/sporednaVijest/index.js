import React, { Component } from 'react';
import styles from "./styles.module.css";
import cn from "classnames";

class SporednaVijest extends Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }
  
    render() {
        const zanr = this.props.zanr;
        console.log("zanrSporednih; ", zanr);
        return (
            <div className={styles.DrugaVijest}>
            <img className={styles.SporedneSlike} src={require('../../images/' + this.props.src + '.jpg')} alt="Nikola Tesla" />
            <div className={styles.TekstSporednih}>
            <div className={cn(styles.Oznaka, styles[zanr])}><h3>{this.props.naslov}</h3> </div> 
            <p>{this.props.tekst}</p>
            </div>
            </div>
        );
    }
    
  }
  
  
export default SporednaVijest;
  
    
  
  
  