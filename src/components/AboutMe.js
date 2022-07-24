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
                <div className="col-6">
                    <h1>About Me</h1>
                    <p>
                        Hi! My name is Rizky. I am a fresh graduate from Geological Engineering Department at Universitas Pertamina with a demonstrated history of working and internship in the field of Education & Technology, Geosciences, and Graphic Design.
                        Currently, I am a professional worker in a IT industry, especially an Education Technology (EdTech) startup as a junior programmer and content maker. During my academic career, I have been working on several geoscience/geospatial-related projects for 2 years. I also took several Python, R, and SQL programming courses during my free time. I learned valuable professional skills such as WebGIS, Data Analytics, Product Management, and Data Visualization.
                        On the other hand, during my academic time, I joined and won some student competitions in poster design, GIS & digital mapping competition, and mini-hackathon for hazard mitigation.
                        I have also involved in some organizations as a social media & graphic design specialist and community service project in social-education and food processing training program.
                        By involving in some organizations, it helps me to develop my leadership skills including teamwork, time management, communication, & public speaking.
                        In both my academic and professional life, I have been consistently praised as focused by my professors and peers. Whether working on academic, extracurricular, or professional projects, I apply proven analytical, creative thinking and critical thinking skills which I hope to leverage into the position at your company.
                    </p>
                    <MyButton text="Download CV"
                    warna="primary"
                    link="https://drive.google.com/file/d/1XaSSCCeodQFEKZKEst3X3e6gC6xbluiA/view?usp=sharing"/>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;