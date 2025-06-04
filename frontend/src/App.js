import logo from './logo2.png';
import estambre from './estambre_imagen.jpg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate, useNavigate
} from 'react-router-dom';


/*function SearchBar() {
  const [active, setActive] = useState(false);
  const inputRef = useRef(null);

  const handleClick_search = () => {
    setActive(prev => !prev);
    setTimeout(() => inputRef.current?.focus(), 0);
}

return (
  <div class={`search ${active ? 'active' : ''}`}>
      <input type="text" class="input" placeholder="Buscar un producto..." ref={inputRef}></input>
      <button class="btn-search" onClick={handleClick_search}><i className='fas fa-search'></i></button>
    </div>
);
}*/

/*
function ColorFilter() {
  const [opt, setOpcion] = useState('');

  const manageopt = (e) => {
    setOpcion(e.target.value);
  };

  return (
    <select value={opt} onChange={manageopt}>
      <option value="">- Seleccione -</option>
      <option value="Rojo">Rojo</option>
      <option value="Verde">Verde</option>
      <option value="Azul">Azul</option>
      <option value="Amarillo">Amarillo</option>
      <option value="Blanco">Blanco</option>
      <option value="Negro">Negro</option>
    </select>
  )
}

function DistFilter() {
  const [opt, setOpcion] = useState('');

  const manageopt = (e) => {
    setOpcion(e.target.value);
  };

  return (
    <select value={opt} onChange={manageopt}>
      <option value="">- Seleccione -</option>
      <option value="Serenity">Serenity</option>
      <option value="DIST1">DIST1</option>
      <option value="DIST2">DIST2</option>
    </select>
  )
}

function LongFilter() {
  const [opt, setOpcion] = useState('');

  const manageopt = (e) => {
    setOpcion(e.target.value);
  };

  return (
    <select value={opt} onChange={manageopt}>
      <option value="">- Seleccione -</option>
      <option value="1/2m">1/2m</option>
      <option value="1m">1m</option>
      <option value="1.5m">1.5m</option>
      <option value="2m">2m</option>
    </select>
  )
}

function PrecioFilter() {
  const [opt, setOpcion] = useState('');

  const manageopt = (e) => {
    setOpcion(e.target.value);
  };

  return (
    <select value={opt} onChange={manageopt}>
      <option value="">- Seleccione -</option>
      <option value="50-100">50% - 100$</option>
      
    </select>
  )

}
*/

function App() {
  const [isLoggedIn, setIsLogedIn] = useState(false); 

  const handleLogin = () => {
    setIsLogedIn(true);
  };

  const handleLogout = () => {
    setIsLogedIn(false);
  };



  return (
    <Router>
      <Routes>
        <Route path="/login" element={isLoggedIn ? <Navigate to="/Home" replace /> : <Login onLogin={handleLogin} />} />
        <Route 
          path="/" 
          element={isLoggedIn ? <Home /> : <Navigate to="/login" replace />} 
        />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<ShopCart/>}/>
        <Route path="/Home" element={isLoggedIn ? <Home onLogout={handleLogout} /> : <Navigate to="/login" replace />} />
        <Route path="/" element={isLoggedIn ? <Home onLogout={handleLogout} /> : <Navigate to="/login" replace />} />
        <Route path="/cart" element={isLoggedIn ? <ShopCart onLogout={handleLogout} /> : <Navigate to="/login" replace />} />
        <Route path="/" element={isLoggedIn ? <ShopCart onLogout={handleLogout} /> : <Navigate to="/login" replace />} />

        
      </Routes>
    </Router>
  );
}

/*function Login({ onLogin }) {
  return (
    <div className="login">
      <div className="login-container">
        <p className='InicioTxt'>Iniciar Sesión</p>
        <p>¿No tienes una cuenta? <a href="/register" style={{color: "black"}}>Regístrate aquí</a></p>
        <form style={{display: "flex", flexDirection: "column"}}>
          <div className='login-btn-container'>
            <p className='input-label'>Usuario<span style={{color:"red"}}>*</span></p>
            <input type="text" placeholder="Usuario" required className='FormLogin'/>
          </div>
          <div className='login-btn-container'>
            <p className='input-label'>Contraseña<span style={{color:"red"}}>*</span></p>
            <input type="password" placeholder="Contraseña" required className='FormLogin'/>
          </div>
          <a href="/passwordForget" className="Forget">¿Olvidaste tu contraseña?</a>
          <button type="submit" className='btn-login' onClick={onLogin}>Iniciar Sesión</button>
        </form>
        <div className='social-container'>
          <p className='social-txt'>Inicia sesión con:</p>
          <div className='social-btns'>
            <button className='btn-social'><i className='fab fa-google' style={{color:'#EA4335'}}></i> Google</button>
            <button className='btn-social'><i className='fab fa-facebook' style={{color:"blue"}}></i> Facebook</button>
          </div>
          {//<p>Al iniciar sesión, aceptas nuestros <a href="/terms" style={{color: "black"}}>Términos de Servicio</a> y <a href="/privacy" style={{color: "black"}}>Política de Privacidad</a>.</p>
          }
        </div>
        </div>
    </div>
  );
}*/

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/usuarios/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, contrasena }),
      });
      const data = await response.text();
      if (response.ok) {
        //const data = await response.text();
        console.log("Login exitoso", data);
        localStorage.setItem('correo', JSON.stringify(data));
        console.log("Redirigiendo a la página de inicio...");
        onLogin();
        navigate('/');
      } else {
        setError('Correo o contraseña incorrectos.');
      }
    } catch (err) {
      setError('Error en la conexión con el servidor.');
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <p className="InicioTxt" onClick={onLogin}>Iniciar Sesión</p>
        <p>¿No tienes una cuenta? <a href="/register" style={{ color: "black" }}>Regístrate aquí</a></p>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column" }}>
          <div className='login-btn-container'>
            <p className='input-label'>Correo electrónico<span style={{ color: "red" }}>*</span></p>
            <input
              type="email"
              placeholder="Correo"
              required
              className='FormLogin'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='login-btn-container'>
            <p className='input-label'>Contraseña<span style={{ color: "red" }}>*</span></p>
            <input
              type="password"
              placeholder="Contraseña"
              required
              className='FormLogin'
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
          </div>

          <a href="/passwordForget" className="Forget">¿Olvidaste tu contraseña?</a>
          <button type="submit" className='btn-login'>Iniciar Sesión</button>
        </form>
        <div className='social-container'>
          <p className='social-txt'>Inicia sesión con:</p>
          <div className='social-btns'>
            <button className='btn-social'><i className='fab fa-google' style={{color:'#EA4335'}}></i> Google</button>
            <button className='btn-social'><i className='fab fa-facebook' style={{color:"blue"}}></i> Facebook</button>
          </div>
      </div>
    </div>
    </div>
  );
}

function ShopCart({ onLogout }) {
  const [productos, setProducto] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  const handleLog = () => {
    onLogout();           // Cambia isLoggedIn a false
    navigate("/login");   // Redirige al login
  };

  const handleBack = () => {
    navigate("/Home");
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/cart")
      .then(res => res.json())
      .then(data => {
        const productosConCantidad = data.map(p => ({ ...p, cantidad: 1 }));
        setProducto(productosConCantidad);
      });
  }, []);

  useEffect(() => {
    const nuevoTotal = productos.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
    setTotal(nuevoTotal);
  }, [productos]);

  const incrementarCantidad = (id) => {
    const nuevosProductos = productos.map(p => {
      if (p.id === id) return { ...p, cantidad: p.cantidad + 1 };
      return p;
    });
    setProducto(nuevosProductos);
  };

  const decrementarCantidad = (id) => {
    const nuevosProductos = productos
      .map(p => {
        if (p.id === id) return { ...p, cantidad: p.cantidad - 1 };
        return p;
      })
      .filter(p => p.cantidad > 0);
    setProducto(nuevosProductos);
  };

  return (
    <div className="shop-cart">
      <nav>
        <div className="Header">
          <img src={logo} className="App-logo" alt="logo" onClick={handleBack}/>
          <h2 onClick={handleBack} className='HovScale'>Home&nbsp;<i className='fas fa-home'></i></h2>
          <h2 className='HovScale'>Productos&nbsp;<i className='fas fa-box'></i></h2>
          <h2 className='HovScale'>Sobre Nosotros&nbsp;<i className='fas fa-globe'></i></h2>
          <div className='search'>
            <input className='search' placeholder='Busca un producto...'></input>
            <button className='btn-search'><i className='fas fa-search'></i></button>
          </div>
          <div className='users'>
            <i className='fas fa-user user-foto'></i>
            <div className='user-info'>
              <p>User12345</p>
              <p className='pro'>EstamPro <i style={{ color: "orange", marginRight: "20px" }} className='fas fa-crown'></i></p>
              <p onClick={ handleLog } className='out'>Cerrar Sesión <i className='fas fa-right-from-bracket'></i></p>
            </div>
          </div>
        </div>
      </nav>

      <div className='cart-space'>
        <div className='cart-product-container'>
          <p style={{ padding: "10px", paddingLeft: "20px" }}>Carrito de Compras</p>
          <div className='cart-container'>
            {productos.length === 0 ? (
              <p style={{ padding: "20px" }}>Tu carrito está vacío.</p>
            ) : (
              productos.map(producto => (
                <div key={producto.id} className='item-cart'>
                  <img src={producto.imagen || estambre} alt={producto.nombre} className='img-cart' />
                  <p style={{width:"200px"}}>{producto.nombre}</p>
                  <p>${producto.precio}</p>
                  <div className='add-quit'>
                    <i className='fas fa-add btn-i' onClick={() => incrementarCantidad(producto.id)}></i>
                    <p>{producto.cantidad}</p>
                    <i className='fas fa-minus btn-i' onClick={() => decrementarCantidad(producto.id)}></i>
                  </div>
                  <p className="total">${producto.precio * producto.cantidad}</p>
                </div>
              ))
            )}
          </div>
        </div>

        <div className='pagos-container'>
          <h1>Método de pago</h1>
          <div className='pagos'>
            <h2 style={{ padding: "20px" }}>Total del carrito: ${total}</h2>
            <div className='img-pagos'>
              <img src="https://d2r9epyceweg5n.cloudfront.net/apps/2362-es_MX-small-2362-pt_BR-small-PP_logo_6_01.jpg" alt="PayPal" className='img-pay' />
              <img src="https://www.plazacaracol.mx/uploads/business/bbva-bancomer-image_banner.jpg" alt="PayPal" className='img-bbva' />
              <img src="https://d31dn7nfpuwjnm.cloudfront.net/images/valoraciones/0023/4322/HSBC.png?1461915343g" alt="PayPal" className='img-bbva' />
            </div>
            <div className='pago-info'>
              <form>
                <h4 className='input-label'>Nombre del titular de la tarjeta<span style={{fontSize:"20px",color:"red"}}>*</span></h4>
                <input type="text" placeholder="Nombre del titular" style={{marginBottom:"10px"}} className='FormLogin' required />
                <h4 className='input-label'>Número de tarjeta<span style={{fontSize:"20px",color:"red"}}>*</span></h4>
                <input type="text" placeholder="Número de tarjeta" style={{marginBottom:"10px"}} className='FormLogin' required />
                <h4 className='input-label'>Fecha de vencimiento<span style={{fontSize:"20px",color:"red"}}>*</span></h4>
                <input type="text" placeholder="MM/AA" style={{marginBottom:"10px"}} className='FormLogin' required />
                <h4 className='input-label'>Código de seguridad<span style={{fontSize:"20px",color:"red"}}>*</span></h4>
                <input type="text" placeholder="Código de seguridad" className='FormLogin' required />
                <button type="submit" className='btn-pagar' style={{ marginTop: "20px" }}>Pagar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    usuario: '',
    correo: '',
    correoVerificacion: '',
    password: '',
    telefono: '',
    direccion: '',
    numExt: '',
    numInt: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validación opcional
    if (formData.correo !== formData.correoVerificacion) {
      alert("Los correos no coinciden");
      return;
    }

    try {
      await fetch("http://localhost:8080/api/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      navigate("/login"); // Redirige a login después del registro
    } catch (error) {
      console.error("Error al registrar:", error);
      alert("Hubo un problema con el registro.");
      navigate("/login"); 
    }
  };

  return (
    <div className="register">
      <div className="register-container">
        <p className='InicioTxt'>Registrarse</p>
        <form onSubmit={handleSubmit}>
          <div className='register-info'>
            <div className='register-btn-container'>
              <p className='input-label'>Usuario<span style={{color:"red"}}>*</span></p>
              <input name="nombre_completo" type="text" placeholder="Usuario" required className='FormLogin' onChange={handleChange}/>
            </div>
            <div className='register-btn-container'>
              <p className='input-label'>Correo electrónico<span style={{color:"red"}}>*</span></p>
              <input name="email" type="email" placeholder="Correo electrónico" required className='FormLogin' onChange={handleChange}/>
            </div>
            <div className='register-btn-container'>
              <p className='input-label'>Contraseña<span style={{color:"red"}}>*</span></p>
              <input name="contrasena" type="password" placeholder="Contraseña" required className='FormLogin' onChange={handleChange}/>
            </div>
            <div className='register-btn-container'>
              <p className='input-label'>Número de teléfono<span style={{color:"red"}}>*</span></p>
              <input name="telefono" type="tel" placeholder="Número de teléfono" required className='FormLogin' onChange={handleChange}/>
            </div>
            <button type="submit" className='btn-login'>Registrarse</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Home( { onLogout } ) {

  const [number, setNumber] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const [productos, setProducto] = useState([]);
  const navigate = useNavigate();

  const handleCart = () => {
    navigate("/cart");
  };

  const handleLog = () => {
    onLogout();           // Cambia isLoggedIn a false
    navigate("/login");   // Redirige al login
  };

  const handleAddToCart = () => {
    setNumber(prevNumber => prevNumber + 1);
    const newNotification = "Producto agregado al carrito";
    setNotifications(prevNotifications => [...prevNotifications, newNotification]);

    // Eliminar la notificación después de 3 segundos
    setTimeout(() => {
      setNotifications(prevNotifications => prevNotifications.slice(1));
    }, 2900);

  };

  useEffect(() => {
      fetch("http://localhost:8080/api/productos")
        .then(res => res.json())
        .then(data => setProducto(data));
    }, []);

  // Fetch con Node.js
  /*
  useEffect(() => {
    fetch('http://localhost:3001/api/datos')
      .then(response => response.json())
      .then(data => {console.log(data);setproducto(data)})
      .catch(error => {console.error('Error fetching data:', error)});
  }, []);
  */


  return (
    <div className="App">
        <div className="notifications">
          {notifications.map((notification, index) => (
          <div key={index} className="notificacion">
            {notification}
          </div>
      ))}
      </div>

      <nav>
        <div className="Header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className='HovScale'>Home&nbsp;<i className='fas fa-home'></i></h2>
          <h2 className='HovScale'>Productos&nbsp;<i className='fas fa-box'></i></h2>
          <h2 className='HovScale'>Sobre Nosotros&nbsp;<i className='fas fa-globe'></i></h2>
          <div className='search'>
            <input className='search' placeholder='Busca uin producto...'></input>
            <button className='btn-search'><i className='fas fa-search'></i></button>
          </div>
          <div className='users'>
            <i className='fas fa-user user-foto'></i>
            <div className='user-info'>
                <p>User12345</p>
                <p className='pro'>EstamPro <i style={{ color: "orange", marginRight: "20px" }} className='fas fa-crown'></i></p>
                <p onClick={handleLog} className='out'>Cerrar Sesión <i className='fas fa-right-from-bracket'></i></p>
            </div>

            <i className='fas fa-cart-shopping cart' onClick={handleCart}><i className='fas fa-circle small'><p className='noti'>{number}</p></i></i>
          </div>
        </div>
      </nav>


      <div className="body-container">
        &nbsp;
        <div className='middle-img'></div>
        <div className='products-container'>

          {productos.length > 0 ? (
            productos.map(producto => (
              <div key={producto.id_producto} className='product'>
                <div className='product-card-img'>
                  <img src={producto.imagen_url} alt={producto.nombre} className='img-product'></img>
                </div>
                <div className='product-info'>
                  <h3>{producto.nombre}</h3>
                  <p>Precio: {producto.precio} MXN$</p>
                  <p>Marca: {producto.marca} </p>
                  <p>{producto.descripcion}</p>
                  <button>Mas info</button>
                  <button onClick={handleAddToCart}>Agregar al carrito</button>
                </div>
              </div>
              ))
            ) : (
              <p>Cargando productos ...</p>
            )
          }
          {/*<div className='product'>
            <div className='product-card-img'>
            <img src={estambre} alt='estambre' className='img-product'></img>
            </div>
            <div className='product-info'>
              <h3>Nombre del producto</h3>
              <p>Inserta el precio $$$</p>
              <p>Inserta el distribuidor</p>
              <p>Inserte una breve descripción que se mostrará</p>
              <button>Mas info</button>
              <button onClick={handleAddToCart}>Agregar al carrito</button>
            </div>
          </div>*/}
        </div>

{/*
        <div className='side-filter'>
          <h3>Agregue un filtro <i className='fas fa-filter'></i></h3>

          <div className='section-filter'>
            <div className='filt'>
              <h4 className='category'>Color</h4>
              <span>{ColorFilter()}</span>
            </div>

            <div className='filt'>
              <h4 className='category'>Distrib</h4>
              <span>{DistFilter()}</span>
            </div>
            
            <div className='filt'>
              <h4 className='category'>Tamaño</h4>
              <span>{LongFilter()}</span>
            </div>

            <div className='filt'>
              <h4 className='category'>Precio</h4>
              <span>{PrecioFilter()}</span>
            </div>

            <div className='filt-btn'>
              <button>Aplicar filtros <i className='fas fa-filter ifilt'></i></button>
            </div>

          </div>
        </div>
*/}

      </div>  

      <div>
        <setProducto />
      </div>

    </div>
  );
}



export default App;
