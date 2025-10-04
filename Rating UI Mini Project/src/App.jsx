// Konvencija je da se Imena Komponenti se pisu velikim slavom
// kako bi se razlikovale od obicnih html i xml tagova.
// Nece se renderovati pravilno
import Rating from "./components/Rating";
const App = () => {
  const name='Clam Fandango';
  return  <div>
    {/* <h1>Hello {name}</h1> */}
    <Rating heading='How do feal about React?'/>
    <Rating heading='How do feal about Vue.js?'
    feedbackMessages={[
      'Hate it',
      'Dislike it',
      'Meh...',
      'Like it',
      'Love it'
    ]}/>
    <Rating/>
  </div> ;
}
  
export default App;
