import './App.css'
/*function UserCard({name, hobby, description}){
  return(
    <div className="userCard">
    <h1>Name: {name}</h1>
    <p>Hobby: {hobby}</p>
    <p>Description: {description}</p>
  </div>
  )
}

export default UserCard;*/

//Magic Spell Component

/*function Spell({type, manaCost, damage}){
  return(
    <div className='spellCard'>
      <h1>Spell type: {type}</h1>
      <p>Mana Cost available: {manaCost}</p>
      <p>Damage Caused: {damage}</p>
    </div>
  )
}

export default Spell;*/

//Build a component ProductCard

function ProductCard({title, price, image, inStock}){
  return(
    <div className='productCard'>
      <img src={image} alt="Products" />
      <h1>Product: {title}</h1>
      <h3>Price: {price}</h3>
      <p>Stock: {inStock ? "In Stock" : "Out of Stock"}</p>
    </div>
  )
}

export default ProductCard;