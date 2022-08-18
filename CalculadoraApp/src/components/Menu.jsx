import Button from './Button';

const Menu = ( {name , img , precio , descripcion} ) =>{
    return (
       <div  className="main-lap">
         <div className="menu">
             <div className="header">
                 <h1> {name} </h1> 
                <img src={img} className="img-main-h"/>
                <p>
                    {descripcion}
                </p>
                <b> $ {precio} </b>
             </div>       
             <Button className="btn-buy-hamburguer"/>     
            </div>
       </div>
    )
}

export default Menu;