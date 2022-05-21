import React from 'react';
import Records from '../quiz.json'


function clickme(){
  console.log(Records)
    return(
    <div className="app">
     {
        Records && Records.map( record => {
          return(
            <div className="box" key={ record.id }>
              <strong>{ record.Question }</strong>
               
              { record.Answers && record.Answers.map( data=> { 
  return(
    <div key={ record.id }>
       --{ data.a }--
       --{ data.b }--
       --{ data.c }--
       --{ data.d }--
    </div>
        )
      }                                            )
             }
               
               </div>
            )
        })
     }
   </div>
  );
}

 export default clickme;