import './card.css'

function Card({ logo,companyName, isNew, featured, position, postedAt, contract, location,skills,handleFilter}) {
    return (
        <div className={featured?'card featured-card':'card'}>
            <div className="card-main">
                <img src={logo} className='logo'></img>
                <div className='card-details'>
                    <p className='company-name'>
                        {companyName}
                        {(isNew) && <span className='new'>NEW!</span>}
                        {(featured) && <span className='featured'>FEATURED!</span>}
                    </p>
                    <p className='position'>{position}</p>
                    <div className='contract'>
                        <span>{postedAt}</span>

                        <span className='dot'></span>

                        <span>{contract}</span>

                        <span className='dot'></span>

                        <span>{location}</span>
                    </div>
                </div>
            </div>
            <div className="card-side">
                <ListGenerator skills = {skills} handleFilter = {handleFilter}/>
            </div>
        </div>
    );
}
function ListGenerator({skills,handleFilter}) {
    return skills.map((item,index) =><div className="skills-tablets" key={index} onClick={()=>handleFilter(item)}>{item}</div>)
}

export default Card;