import { useState , useEffect } from 'react'
import './App.css'
import Card from './Components/Card'
import data from './data.json'
import FilterComponent from './Components/FilterComponent'


function CardList(data,handleFilter,filterArray) {
  return data.map((item)=>
  <Card 
  key={item.id}
  logo = {item.logo}
  companyName = {item.company}
  isNew = {item.new}
  featured = {item.featured}
  position = {item.position}
      postedAt = {item.postedAt}
      contract = {item.contract} 
      location = {item.location}
      skills = {[item.role,item.level,...item.languages,...item.tools]}
      handleFilter = {handleFilter}
      />
  )
}

function App() {

  const [filterActive , setfilterActive] = useState(false);
  const [filterArray , setfilterArray] = useState([]);
  
  function CardListFilter(data,filterArray){
    if(filterArray.length != 0){
      const filterData = data.filter((item)=>{
        const skills = [item.role,item.level,...item.languages,...item.tools]
        return filterArray.every((val)=>skills.includes(val))
      })
      return CardList(filterData,handleFilter,filterArray);
    }
    else{
      return CardList(data,handleFilter,filterArray);
    }
  }
  
  let cardListElements = CardListFilter(data,filterArray);

  useEffect(()=>{
    if(filterArray.length == 0){
      setfilterActive(false);
    }
  },[filterArray])

  function handleFilter(item){
    setfilterActive(true);
    if(!filterArray.includes(item)){
      setfilterArray([...filterArray,item]);
    }
  }
  return (
    <div className='App'>
    <header>
      <div className="header-image"></div>
    </header>
    <main>
      <FilterComponent filterTablets = {filterArray} setfilterArray = {setfilterArray} filterActive={filterActive}/>
      {cardListElements}
    </main>
    </div>
  )
}

export default App
