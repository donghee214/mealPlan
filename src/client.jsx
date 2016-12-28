import React from 'react';
import { render } from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
// import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.scss';
import Layout from "./components/Layout";


const app = document.getElementById('container');
render(<Layout/>, app);
// render(<Letter/>, app);
// render( <AppContainer><App/></AppContainer>, document.querySelector("#app"));

// if (module.hot) {
//   module.hot.accept('./app.jsx', () => {
//     const App = require('./app.jsx').default;
//     render(
//       <AppContainer>
//         <App/>
//       </AppContainer>,
//       document.querySelector("#app")
//     );
//   });
// }
