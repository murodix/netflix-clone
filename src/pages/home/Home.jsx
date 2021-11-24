
import Billboard from '../../components/billboard/Billboard';
import Footer from '../../components/footer/Footer';
import MovieList from '../../components/movie-list/MovieList';
import Navbar from '../../components/navbar/Navbar';
import './home.scss';
import MovieCategories from './MovieCategories';
const Home = () => {

    return (
        <div className="home">
            <Navbar displaySignIn={false} signedIn={true} />
            <Billboard />
            {MovieCategories?.map((category, index) => {
                 return (<MovieList key={index} category={category.title} requestURL={category.url} />);
            })}
            <Footer></Footer>

        </div>
    )
}

export default Home
