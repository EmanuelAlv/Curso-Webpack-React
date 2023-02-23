import React from "react";
import reactDom from "react-dom";
import App from './components/App' //Aqui importamos nuestro archivo App,jsx
import './styles/global.scss';

reactDom.render(<App />, document.getElementById('app')); //Con el getelementbyid obtenemos el ido creado en nuestro ducumento Html