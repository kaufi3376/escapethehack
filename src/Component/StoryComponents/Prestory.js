import React from 'react';



function Prestory({
    storylength
}) {
  
    return (
        <div> 
            <h1>Escape the Hack</h1>
            <b><p>Hier Comic story einsetzten</p></b>
            <p>Die Welt ist nicht so wie wir sie kennen.. Der Präsident der Vereinigten Staaten braucht deine Hilfe um die Welt vor einem Hackerangriff zu schützen <br/>
                <b> Du musst  {storylength} Attacken abwehren...</b></p><br/>
            <p>Es wäre gelacht wenn du das nicht schaffen !</p><br/>
            
            
            <p>Regeln:</p>
            <li>Du musst alle Rätsel innerhalb der Vorgegebenen zeit schaffen</li>
            <li>Pro Runde hast du Tipps die du einsetzten darfst</li>
            <li>Falls du bei Multiple Choice Rätseln falsch antwortest, bekommst du eine Zeitstrafe</li>


            <h3><b>Happy Hacking und viel Erfolg!</b></h3>


        </div>
    );
  }
  
export default Prestory;
  