import MyButton from "./MyButton";

function AboutMe() {
    return (
        <div className="section">
            <div className="row align-items-center">
                <div className="col-6 text-center">
                    <img 
                    className="avatar"
                    src="https://drive.google.com/uc?export=view&id=1xdesN_cGiZqR3FkWXhiutAMMSWq0bryq"
                    />
                </div>
                <div className="col-6 py-5">
                    <h1>About Me</h1>
                    <p>
                        <p>Hi! My name is Rizky.</p>
                        <p>I am a fresh graduate from Geological Engineering Department at Universitas Pertamina with a demonstrated history of working and internship in the field of Education and Technology, Geosciences, and Graphic Design.</p>
                        <p>Currently, I am a professional worker in a IT industry or start-up company as a junior programmer and content maker. During my career, I have been working on several geoscience and education-related projects for about a year. I also took several data courses (Python, R, and SQL) during my free time. I also learned and experienced valuable professional skills such as Graphic Design, Web GIS, Web Development (React JS, HTML, and CSS), Data Analytics, and Visualization.</p>
                        
                    </p>
                    <MyButton text="Download CV"
                    warna="warning"
                    link="https://drive.google.com/file/d/1XaSSCCeodQFEKZKEst3X3e6gC6xbluiA/view?usp=sharing"/>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;