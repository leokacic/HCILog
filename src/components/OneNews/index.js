import React from "react";
import styles from "./styles.module.css";
import Slon from "../../images/Slonovi.jpg";

export default () => (
  <div className={styles.OneNews}>
      <img className={styles.GlavnaSlika} src={Slon} alt="Slonovi" />
      <div className={styles.BottomLeft}>
      <p>Autor: Mate Matić 02/2019. </p>
      <div className={styles.OznakaG}><h1>Slonovi</h1> </div> 
        <p>Slonovi (lat. Elephantidae od elefantus) su porodica viših sisavaca. 
        Svi su, bez izuzetaka, biljožderi i hrane se prije svega travama i lišćem,
        li u slučaju nedostatka te hrane, jedu i granje grmlje, koru i sličnu hranu.
        Slonovi su najveći kopneni sisavci koji danas žive na zemlji. Kod rođenja, mladunče može težiti i do 100 kg. 
        Skotnost slonice traje 20 do 22 mjeseca i najduža je od svih kopnenih sisavaca. 
        Mogu živjeti do 70 godina. Najveći slon je ubijen 1974. u južnoj Angoli i bio je težak 12.240 kg.um dolor, sit amet consectetur adipisicing elit.
        </p>
        <br></br>
        <p>Kriptozoolozi sumnjaju na postojanje još jedne vrste, patuljastog slona (Loxodonta pumilio) ali to nije baš vjerojatno.
        kao još jednu, zasebnu vrstu. Međutim, znanstvenici nisu prihvatili taj prijedlog, bar za sada još ne. 
        Ta vrsta živi, prema njihovom mišljenju, uz šumskog slona u tropskim kišnim šumama (Gabon, Kongo, Kamerun).
        U Africi žive četiri odvojene populacije slonova: u savanama istočne i južne Afrike, u zapadnoj Africi na sjeveru Namiba 
        </p>
       
    </div>
  </div>
  );
  