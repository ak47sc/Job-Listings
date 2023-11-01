import './FilterComponent.css'

function handleCloseButton(filterTablets,setfilterArray,item){
    setfilterArray(filterTablets.filter((i)=>i != item))
}
function FilterComponent({filterTablets,setfilterArray,filterActive}) {
    const filterTabs = filterTablets.map((item,index) =>
        <div className="tablet-wrapper" key={index}>
            <div className="filter-tablets" key={index}>
                {item}
            </div>
            <div className="close" onClick={()=>handleCloseButton(filterTablets,setfilterArray,item)}><i className="fa-solid fa-xmark"></i></div>
        </div>
    )

    return (  
        <div className={filterActive?'filter' : 'filter hidden'}>
            <div className='tabs'>
                {filterTabs}
            </div>
            <p onClick={()=>setfilterArray([])}>Clear</p>
        </div>
    );
}

export default FilterComponent;