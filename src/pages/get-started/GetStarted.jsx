import Navbar from '../../components/navbar/Navbar'
import "./getStarted.scss";

const GetStarted = () => {

    return (
        <div className="getStarted">
            <div className="getStarted__mask">
                <Navbar />
                <div className="getStarted__container">
                    <h1 className="getStarted__title">Unlimited movies, TV shows, and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <form className="getStarted__form">
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className="getStarted__form-container">
                            <input className="getStarted__form-input" type="email" placeholder="Email address" name="email" />
                            <button className="getStarted__form-button" type="submit">GET STARTED</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default GetStarted
