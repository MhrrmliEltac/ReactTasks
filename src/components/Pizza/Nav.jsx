import "./nav.css"

const Nav = ({data}) => {
   console.log(data,"bura")
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <p>Pizza delicious</p>
          </div>
          <div className="list">
            <ul className="nav-list">
                <li>Home</li>
                <li>Menu</li>
                <li>Services</li>
                <li>Blog</li>
                <li>About</li>
                <li>Contact</li>
                <li>Market</li>
            </ul>
            <div className="cart">
              <span>
                {data.length}
              </span>
              <sup>
                {Number(data.reduce((acc,item)=>{ return acc+item.price},0)).toFixed(2)}$
              </sup>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
