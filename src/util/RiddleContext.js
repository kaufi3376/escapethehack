import React, { useEffect, useState } from 'react';


import {API, Auth, graphqlOperation} from "aws-amplify"
import * as mutations from "../graphql/mutations"
import * as customQueries from "../graphql/customqueries"


/**
 * 
 * Context that provides all information about riddles
 * is used for generating EscapeRooms
 * 
 */


export const RiddleContext = React.createContext({
    algorithmikRiddle : [],
    kodierungRiddle : [],
    theoretischeInformatikRiddle : [],
    graphenUndDatenstrukturenRiddle : [],
    programmierenRiddle : [],
    modellierenRiddle : [],
    selectedRows : [],
    selectedRiddles :[],


});


/**
 * 
 * Provider which is getting exported 
 * 
 * @param {
 * } props 
 */


const RiddleContextProvider = props => {
    const[algorithmikRiddles, setAlgorithmikRiddles]= useState([])
    const[kodierungRiddles, setKodierungRiddles]= useState([])
    const[theoretischeInformatikRiddle, setTheoretischeInfromatikRiddles]= useState([])
    const[graphenUndDatenstrukturenRiddle, setGraphenUndDatenstrukturenRiddle]= useState([])
    const[programmierenRiddle, setProgrammierenRiddle]= useState([])
    const[modellierenRiddle, setModellierenRiddle]= useState([])
    
    const[selectedRows, setSelectedRows]= useState([])
    
    const[selectedRiddles, setSelectedRiddles]= useState([])

   
/**
 * 
 * fetching all the data that is stored in a certain category
 * 
 * 
 */
    useEffect( () => {
        loadData();
    },[]);

    const loadData = async () => {
        const cat1Info ={  category : "Algorithmik"}
        const algorithmikRiddle = await API.graphql(graphqlOperation(customQueries.getRiddlesByCategory, cat1Info ));
        setAlgorithmikRiddles(algorithmikRiddle.data.listRiddles.items)

        const cat2Info ={  category : "Kodierung"}
        const kodierungRiddle = await API.graphql(graphqlOperation(customQueries.getRiddlesByCategory, cat2Info ));
        setKodierungRiddles(kodierungRiddle.data.listRiddles.items)

        const cat3Info  ={  category : "Theoretische Informatik"}
        const theoretischeInformatikRiddle  = await API.graphql(graphqlOperation(customQueries.getRiddlesByCategory, cat3Info  ));
        setTheoretischeInfromatikRiddles(theoretischeInformatikRiddle.data.listRiddles.items)

        const cat4Info  ={  category : "Graphen und Datenstrukturen"}
        const graphenUndDatenstrukturenRiddle  = await API.graphql(graphqlOperation(customQueries.getRiddlesByCategory, cat4Info  ));
        setGraphenUndDatenstrukturenRiddle(graphenUndDatenstrukturenRiddle.data.listRiddles.items)

        const cat5Info  ={  category : "Programmieren"}
        const programmierenRiddle  = await API.graphql(graphqlOperation(customQueries.getRiddlesByCategory, cat5Info  ));
        setProgrammierenRiddle(programmierenRiddle.data.listRiddles.items)

        const cat6Info  ={  category : "Modellieren"}
        const modellierenRiddle  = await API.graphql(graphqlOperation(customQueries.getRiddlesByCategory, cat6Info  ));
        setModellierenRiddle(modellierenRiddle.data.listRiddles.items)

        
    }

    const selectedRowsHandler =(sel) =>{
        setSelectedRows(sel)
    }

    const selectedRiddlesHandler =(sel) =>{
        setSelectedRiddles(sel)
    }



    return (
        <RiddleContext.Provider value={{ algorithmikRiddle : algorithmikRiddles,
                                         kodierungRiddle : kodierungRiddles,
                                         theoretischeInformatikRiddle : theoretischeInformatikRiddle,
                                         graphenUndDatenstrukturenRiddle: graphenUndDatenstrukturenRiddle,
                                         programmierenRiddle:  programmierenRiddle,
                                         modellierenRiddle: modellierenRiddle,
                                         selectedRows: selectedRows,
                                         selectedRiddles: selectedRiddles,
                                         setSelectedRows : selectedRowsHandler,
                                         setSelectedRiddles: selectedRiddlesHandler,
                              
        }}>
            {props.children}
        </RiddleContext.Provider>

    );

}

export default RiddleContextProvider;