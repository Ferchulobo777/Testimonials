import './App.css';
import Testimonio from './components/Testimonio';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre Academlo:</h1>
        <Testimonio 
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='shawn'
          cargo='Ingeniero de Software'
          empresa='Amazon'
          testimonio='Da miedo cambiar de carrera.Solo gane la confianza de que podia programar trabajando a traves de los cientos de horas de lecciones en Academlo. Dentro de un año tuve un trabajo de seis cifras como Ingeniero de Software, Academlo cambio mi vida.' />
          <Testimonio 
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='sarah'
          cargo='Ingeniera de Software'
          empresa='ChatDesk'
          testimonio='Academlo fue la puerta de entrada a mi carrera como desarollador de software. El plan de estudios bien estructurado llevo mis conocimientos de programacion de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarollador en una empresa increible.' />
          <Testimonio 
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='emma'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio='Siempre eh tenido problemas para aprender JavaScript, pero con el curso de Academlo fue la unica manera en que lo entendi. Estudiar Javascript, asi como estructuras de datos y algoritmos en Academlo me dio habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.' />
      </div>
    </div>
  );
}

export default App;
