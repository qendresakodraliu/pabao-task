import './Header.css'
const Header=(props)=>{
    return (
    <header className="headerContent">
      <h3>{props.title}</h3>
      <p>{props.subtitle}</p>
    </header>
    )
}
export default Header