import UserData from '../UserData/UserData'
import Input from '../Input/Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Invoice from '../Invoice/Invoice'


export default function MainComponent(){
    const [iname, setIname] = useState(null)
    const [ivalue, setIvalue] = useState(null)
    const [items, setItems] = useState([])
    const [iquantity, setIquantity] = useState(null)
    
    const [totalItemCount, setTotalItemCount] = useState(0);
    const [totalPriceCount, setTotalPriceCount] = useState(0);
    useEffect(()=>{
      calculateTotal();
    },[items])

    const calculateTotal = () => {
      
      const totalItemCount = items.reduce((total, item) => {
        return total + Number(item.quantity);
      }, 0);
  
      const totalPriceCount = items.reduce((total, item) => {
        return total + (item.price * item.quantity);
      }, 0);

      setTotalItemCount(totalItemCount);
      setTotalPriceCount(totalPriceCount);
      
    }
    const handleClick = ()=>{
      if(document.getElementById("item").value !== "" && document.getElementById("price").value !== "" &&document.getElementById("quantity").value !== "" ){

        
        const newItem = {
            sno: items.length,
            itemName: iname,
            price: Number(ivalue),
            quantity: iquantity,
            isSelected: false,
    };

    const newItems = [...items, newItem];

    setItems(newItems);
    
    document.getElementById("item").value = ""
    document.getElementById("price").value = ""
    document.getElementById("quantity").value = ""

    }
  }

    const toggleComplete = (index) => {
        const newItems = [...items];
    
        newItems[index].isSelected = !newItems[index].isSelected;
    
        setItems(newItems);
        
      };
    
    const handleQuantityIncrease = (index) => {
        const newItems = [...items];
    
        newItems[index].quantity++;
    
        setItems(newItems);
        calculateTotal()
        
      };
    const handleQuantityDecrease = (index) => {
        const newItems = [...items];


      
        if(newItems[index].quantity <= 0){

          return console.log("CAnnot go in negative")
        }else{
         newItems[index].quantity--
          setItems(newItems);
    
         return calculateTotal()
        }
        
        
      };
    

    return(
        <div className='main-container'>

            <UserData />

            <h2> Add your Grocery items </h2>

            <div className="add-item-box">
                <Input type="item" toggle={setIname} text={"text"}/>
                <Input type="price" toggle={setIvalue} text={"number"}/>
                <Input type="quantity" toggle={setIquantity} text={"number"}/>
                
                <FontAwesomeIcon icon={faPlus} onClick={handleClick} />
                

            </div>
            
            <div className='item-list'>
            
            {items.map((item, index) => (
              <div className='item-container'>
                <div className='item-name' onClick={() => toggleComplete(index)}>
                    {item.isSelected ? (
                        <>
                        <FontAwesomeIcon icon={faCheckCircle} />
                        <span className='completed'>{item.itemName}</span>
                        </>
                    ) : (
                        <>
                        <FontAwesomeIcon icon={faCircle} />
                        <span>{item.itemName}</span>
                        </>
                    )}
                </div>    
                <div className='quantity'>
                  <button>
                    <FontAwesomeIcon icon={faChevronLeft} onClick={() => handleQuantityDecrease(index)}/>
                  </button>
                  <span>{item.quantity}</span>
                  <button>
                    <FontAwesomeIcon icon={faChevronRight}  onClick={() => handleQuantityIncrease(index)}/>
                  </button>
                </div>
                <div className="price">
                  <span>{item.price * item.quantity}</span>
                </div>
              </div>
            ))}
            </div>
            <div className='total'>Total Items: {totalItemCount} Price: {totalPriceCount}</div>

            <Invoice items = {items} totalPriceCount = {totalPriceCount}/>

        </div>
    )
}