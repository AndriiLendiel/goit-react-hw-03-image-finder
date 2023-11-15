import { SearchBar } from "./Searchbar/Searchbar";
import * as API from '../service/api'
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import {Loader} from "./Loader/Loader";
import s from './App.module.css'
import toast, {Toaster} from "react-hot-toast";


const { Component } = require("react");




 class  App extends Component {

  state = {

    inputWord: '',
    photos: [],
    page: 1,
    isLoading: false,
    error: null,
    totalHits: null
  }

inputSearch = (name) => {
  this.setState({inputWord: name})

}

async componentDidUpdate(_, prevState) {
  const {page, inputWord} = this.state;
  if(inputWord === '') {
    toast.error('Put a word for searching 🫎', {position: 'top-right'})
  }
  if(page !== prevState.page || inputWord !== prevState.inputWord) {
  try {
      this.setState({isLoading: true})
      const {hits, totalHits} = await API.getData(inputWord, page);




      if(hits.length === 0) {
        toast.error(`Sorry, we can't find ${inputWord} 😭`, {position: 'top-right'})
      }
      if(hits.length > 0 && page === 1) {
        toast.success(`We find ${totalHits} photos 😊`)

        
      }





      const filteredHits = hits.map(({id, tags, webformatURL, largeImageURL}) => ({id, tags,webformatURL, largeImageURL}))
      this.setState(prevState => ({
        photos:  [ ...prevState.photos, ...filteredHits],
        totalHits,

  }))
  if(prevState.inputWord !== inputWord) {
  this.setState({
    photos: filteredHits,
  })
  }
  

  } catch (error) {
    this.setState({error: 'We have error. Relode a page'})
  }
finally {
  this.setState({isLoading: false})
}
    }
  }


pageCounter = () => {
  this.setState(prevState => ({
page: prevState.page + 1,
  })
)

}




 render() {
  const {isLoading, error, photos, totalHits} = this.state;
  return (
    <div
className={s.App}
    >
<SearchBar
  onSubmit={this.inputSearch}
/>
{isLoading && <Loader/>}
{error && <p>{error}</p>}

{photos.length > 0 && <ImageGallery items={photos}/>}
{totalHits > photos.length && (<Button pageCounter={this.pageCounter}/>)}
<Toaster
  position="top-right"
  reverseOrder={false}
  toastOptions={{

    style: {
      width: '400px',
      height: '100px',
      fontSize: '24px',
      background: '#363636',
      color: '#fff',
    }}}
/> 
    </div>
  );
 } 
};

export default App;



