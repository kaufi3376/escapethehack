import React, { useContext, useEffect, useState } from "react"
import { Table, Switch, Radio, Form, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import {RiddleContext} from "../../util/RiddleContext"





const RiddleCheckbox = ({
    arrayToPortrait
}) => { 
    const riddleCon = useContext(RiddleContext)
    



    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          sorter: true,
        },
        {
          title: 'Schwierigkeit',
          dataIndex: 'difficulty',
         
        },
      ];


      const data = [];
      for (let i = 0; i < arrayToPortrait.length; i++) {
        data.push({
          key: i,
          name: arrayToPortrait[i].name,
          difficulty: arrayToPortrait[i].difficulty,
          id : arrayToPortrait[i].id
        });
      }
    
      const [selectionType, setSelectionType] = useState('checkbox');


      const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {


  
          

          /*
          if(!riddleCon.selectedRows.includes(selectedRows)){
            riddleCon.setSelectedRows(...riddleCon.selectedRows,selectedRows)
          }

    



        /*
          const uncheckedData = data.filter( x => !selectedRows.includes(x))

          console.log(selectedRows)




          riddleCon.setSelectedRows(selectedRows)

          console.log(riddleCon.selectedRows)
         



      
          
          let temp = riddleCon.selectedRows.filter( x => !data.includes(x))

          console.log(temp)
          let arrayWithDubs = selectedRows.concat(temp)
          //console.log(arrayWithDubs)
          


          const uniqueAddresses = Array.from(new Set(arrayWithDubs.map(a => a.id)))
 .map(id => {
   return arrayWithDubs.find(a => a.id === id)
 })
        
          
            console.log(uniqueAddresses)
         

            riddleCon.setSelectedRows(uniqueAddresses)
            */

        },
        getCheckboxProps: record => ({
          disabled: record.name === 'Disabled User',
          name: record.name,
        }),
      };

   


    
    return (
    <div>

          <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />








    </div>
     
    )
  
}

 

export default RiddleCheckbox;