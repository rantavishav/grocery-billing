import React, { useState, Fragment } from 'react';

import {PDFViewer} from '@react-pdf/renderer'
import Popup from '../Popup/Popup';
import MyDocument from './Document'
import { useSelector } from 'react-redux';

const Document = ({ items, totalPriceCount }) => {
  const UserData = useSelector(state => state.apiFetch)
   
    
    const newInvoice = {
      id: "5df3180a09ea16dc4b95f910",
      invoice_no: "201906-28",
      balance: totalPriceCount,
      company: UserData.resultArray[0].name.first,
      email: UserData.resultArray[0].email,
      phone: UserData.resultArray[0].cell,
      address: UserData.resultArray[0].location.city,
      trans_date: "2019-09-12",
      due_date: "2019-10-12",
      items : [...items]
    }
    

    const [isOpen, setIsOpen] = useState(false);

    
 
  const togglePopup = () => {
    setIsOpen(!isOpen);

  }

  return(
    <div>
    <input
      type="button"
      value="Print"
      onClick={togglePopup}
    />
    
    {isOpen && <Popup
      content={<div className="popup-content">

        <Fragment>
            <PDFViewer width="1000" height="600" className="app" >
                <MyDocument invoice={newInvoice}/>
            </PDFViewer>
        </Fragment>
      </div>}
      handleClose={togglePopup}
    />}
  </div>
  )
    
   
  };

export default Document