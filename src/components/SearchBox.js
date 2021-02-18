import InputBase from '@material-ui/core/InputBase'
import FormControl from '@material-ui/core/FormControl'
import Search from '@material-ui/icons/Search'
import { useStyles } from 'styles/searchInput'

export default function SearchBox({ onChange }) {
  const classes = useStyles()

  return (
    <FormControl className={classes.formControl}>
      <Search className={classes.searchIcon} />
      <InputBase
        placeholder="Search notes…"
        className={classes.searchInput}
        onChange={(e) => onChange(e.target.value)}
      />
    </FormControl>
  )
}
