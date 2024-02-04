import css from './SearchBar.module.css'
import toast from 'react-hot-toast';


const SearchBar =({onSearch}) => {

  const hendelSearchCard = (event) => {
    event.preventDefault()
    const form = event.target
    const searchQuery = form.elements.search.value
    if(searchQuery.trim() === '') {
      toast.error('Вибачте, але рядок порожный')
      return
    }
    toast.success('Все чудово!')
    onSearch(searchQuery)
    form.reset()
  }

  


  return (
<header className={css.header}>
  <form className={css.search} onSubmit={hendelSearchCard}>
    <input type="text"
      name='search'
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos" />
    <button type="submit">Search</button>
  </form>
</header>
  )
}

export default SearchBar
