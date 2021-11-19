import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import './profiles.scss';
import profileData from './profileData';
import { useNavigate } from 'react-router-dom';

const Profiles = () => {

    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/home');
    }

    return (
        <div className="profiles">
            <Navbar displaySignIn={false} />

            <div className="profiles__container">
                <h1 className="profiles__title">Who's watching?</h1>
                <div className="profiles__cards">
                    {profileData?.map((profile, index) => {
                        return (
                            <div key={index} className="profiles__profile" onClick={goToHome}>
                                <img  src={profile.avatarPath} alt="" className="profiles__profile-avatar" />
                                <span className="profiles__profile-name">{profile.name}</span>
                            </div>)
                    })}
                </div>
                <button className="profiles__manageProfiles">Manage Profiles</button>
            </div>
        </div>
    )
}

export default Profiles
