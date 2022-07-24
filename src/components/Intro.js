import AboutMe from "./AboutMe"
import MyButton from "./MyButton"

function Intro() {
    return (
        <div className="section text-light intro">
            <div className="container text-center">
                <img 
                className="avatar"
                src="https://drive.google.com/uc?export=view&id=1xdesN_cGiZqR3FkWXhiutAMMSWq0bryq"
                />
                <h1>Rizky Ashari</h1>
                <p>Geoscience and IT Enthusiast</p>
                <a target="_blank" href="https://www.linkedin.com/in/rizky-ashari/" className="social-media">
                    <i class="bi bi-linkedin"></i>
                </a>
                <a target="_blank" href="https://www.instagram.com/muhrizkyashari/" className="social-media">
                    <i class="bi bi-instagram"></i>
                </a>
                <a target="_blank" href="https://github.com/rizkyashari" className="social-media">
                    <i class="bi bi-github"></i>
                </a>
                <div className="row">
                    <div className="col">
                    <MyButton 
                    text="Hire Me"
                    link="#about"
                    warna="warning"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro