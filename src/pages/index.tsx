
import { FeaturedPost } from '../../Components/Post/FeaturedPost/FeaturedPost'
import classes from './index.module.css';

export default function Home() {
  return (
    <main className={classes.blog}>
        <FeaturedPost/>
    </main>
  )
}
