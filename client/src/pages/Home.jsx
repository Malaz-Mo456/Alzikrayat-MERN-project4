import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiRequest from '../services/api';
import './home.css';

const samplePhotos = [
    {
        _id: 'sample-1',
        title: 'Beautiful Moments',
        imageUrl: '/images/thumb-1.jpg'
    },
    {
        _id: 'sample-2',
        title: 'Memories Together',
        imageUrl: '/images/thumb-2.jpg'
    },
    {
        _id: 'sample-3',
        title: 'Special Days',
        imageUrl: '/images/thumb-3.jpg'
    }
];

function Home() {
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [usingSamplePhotos, setUsingSamplePhotos] = useState(false);
    const [loadError, setLoadError] = useState(false);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                // Get photos using the shared Axios API service
                const data = await apiRequest('/photos');

                const photoList = Array.isArray(data)
                    ? data
                    : data.photos || [];

                setPhotos(photoList);
                setUsingSamplePhotos(photoList.length === 0);

            } catch (error) {
                console.error('Could not load photos:', error);
                setLoadError(true);

            } finally {
                setIsLoading(false);
            }
        };

        fetchPhotos();
    }, []);

    const displayedPhotos = usingSamplePhotos
        ? samplePhotos
        : photos.slice(0, 3);

    const storytellerIds = new Set(
        photos
            .map(photo => photo.userId?._id || photo.userId)
            .filter(Boolean)
            .map(id => id.toString())
    );

    const getPhotoImage = (photo) => {
        if (photo.imageUrl) {
            return photo.imageUrl;
        }

        if (photo.fileName) {
            return `/uploads/${photo.fileName}`;
        }

        return '/images/thumb-1.jpg';
    };

    return (
        <div className="home-page">

            {/* Main hero section */}
            <section className="hero">
                <div className="hero-overlay"></div>

                <div className="hero-content">
                    <span className="hero-tag">
                        PHOTO SHARING, REIMAGINED
                    </span>

                    <h1 className="hero-title">
                        Alzikrayat
                    </h1>

                    <p className="hero-subtitle">
                        Every picture tells a story worth keeping.
                    </p>

                    <div className="hero-buttons">
                        <Link
                            to="/login-register?mode=register"
                            className="btn-hero-primary"
                        >
                            Start Sharing
                        </Link>

                        <Link
                            to="/photos"
                            className="btn-hero-outline"
                        >
                            Explore Gallery
                        </Link>
                    </div>

                    {!isLoading && !loadError && (
                        <p className="hero-memory-count">
                            {photos.length} memories shared by{' '}
                            {storytellerIds.size} storytellers
                        </p>
                    )}
                </div>

                <div className="hero-scroll">
                    <span></span>
                    <p>SCROLL TO EXPLORE</p>
                </div>
            </section>

            {/* Statistics and features section */}
            <section className="home-stats">
                <div className="stats-item">
                    <span className="stats-number">01</span>

                    <div>
                        <h3>Save Your Memories</h3>
                        <p>Keep your favorite moments in one place.</p>
                    </div>
                </div>

                <div className="stats-item">
                    <span className="stats-number">02</span>

                    <div>
                        <h3>Share Your Stories</h3>
                        <p>Let others discover the moments that matter.</p>
                    </div>
                </div>

                <div className="stats-item">
                    <span className="stats-number">03</span>

                    <div>
                        <h3>Stay Connected</h3>
                        <p>Build a collection of meaningful memories.</p>
                    </div>
                </div>
            </section>

            {/* Recent memories section */}
            <section className="memories-section">
                <div className="section-header">
                    <div>
                        <span className="section-tag">
                            FRESH FROM THE COMMUNITY
                        </span>

                        <h2 className="section-title">
                            Latest Memories
                        </h2>

                        <p className="section-description">
                            Explore moments and stories shared by our community.
                        </p>
                    </div>

                    <Link to="/photos" className="view-all">
                        View All
                        <span>→</span>
                    </Link>
                </div>

                {isLoading ? (
                    <p className="memories-message">
                        Loading memories...
                    </p>
                ) : loadError ? (
                    <div className="empty-memories">
                        <h3>Could not load memories</h3>
                        <p>Please check your server connection and try again.</p>
                    </div>
                ) : displayedPhotos.length > 0 ? (
                    <div className="memories-grid">
                        {displayedPhotos.map((photo, index) => (
                            <Link
                                to={
                                    usingSamplePhotos
                                        ? '/photos'
                                        : `/photos/${photo._id}`
                                }
                                className="memory-card"
                                key={photo._id || index}
                            >
                                <img
                                    src={getPhotoImage(photo)}
                                    alt={photo.title || 'Shared memory'}
                                    onError={(event) => {
                                        event.currentTarget.src =
                                            '/images/thumb-1.jpg';
                                    }}
                                />

                                <div className="memory-overlay">
                                    <span className="memory-category">
                                        MEMORY {index + 1}
                                    </span>

                                    <h3 className="memory-title">
                                        {photo.title || 'Untitled Memory'}
                                    </h3>

                                    {!usingSamplePhotos && photo.userId && (
                                        <p className="memory-author">
                                            By{' '}
                                            {photo.userId.firstName || 'Storyteller'}
                                            {' '}
                                            {photo.userId.lastName || ''}
                                        </p>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="empty-memories">
                        <h3>No memories yet</h3>

                        <p>
                            Be the first to share a beautiful moment.
                        </p>

                        <Link to="/upload" className="btn-emerald">
                            Upload Photo
                        </Link>
                    </div>
                )}
            </section>

            {/* Closing quote section */}
            <section className="quote-band">
                <div className="quote-content">
                    <span className="quote-mark">“</span>

                    <p className="quote-text">
                        Memories are timeless treasures of the heart.
                    </p>

                    <span className="quote-dots">•••</span>
                </div>
            </section>

            {/* About section */}
            <section className="home-about">
                <div className="about-image">
                    <img
                        src="/images/about-bg.jpg"
                        alt="A collection of memories"
                    />

                    <div className="about-image-note">
                        <span>Every moment</span>
                        <strong>
                            Deserves to be remembered.
                        </strong>
                    </div>
                </div>

                <div className="about-content">
                    <span className="section-tag">
                        ABOUT ALZIKRAYAT
                    </span>

                    <h2 className="section-title">
                        More Than Photos,
                        <span> They Are Memories.</span>
                    </h2>

                    <p>
                        Alzikrayat is a place where you can preserve
                        your favorite moments, share your stories,
                        and revisit the memories that make life special.
                    </p>

                    <p>
                        Every photo carries a story worth keeping.
                        Bring your memories together in one meaningful place.
                    </p>

                    <Link to="/about" className="btn-about">
                        Learn More
                        <span>→</span>
                    </Link>
                </div>
            </section>

            {/* Call to action section */}
            <section className="home-cta">
                <div className="cta-content">
                    <span className="cta-tag">
                        START YOUR JOURNEY
                    </span>

                    <h2>
                        Your Memories Deserve a Place.
                    </h2>

                    <p>
                        Start collecting and sharing your favorite moments today.
                    </p>

                    <Link
                        to="/login-register?mode=register"
                        className="btn-cta"
                    >
                        Join Alzikrayat
                        <span>→</span>
                    </Link>
                </div>
            </section>

        </div>
    );
}

export default Home;






