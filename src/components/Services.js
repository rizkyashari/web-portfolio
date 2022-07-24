import ServiceItem from "./ServiceItem";

function Services() {
    return (
        <div className="section bg-dark text-light py-5" id="services">
            <div className="container">
                <h1>Services</h1>
                <div className="row">
                    <ServiceItem 
                        judul="Graphic Design"
                        warna="merah"
                        deskripsi="Deskripsi Di Sini"
                    />
                    <ServiceItem 
                        judul="Video Editing"
                        warna="hijau"
                        deskripsi="Deskripsi Di Sini"
                    />
                    <ServiceItem 
                        judul="Web Development"
                        warna="kuning"
                        deskripsi="Deskripsi Di Sini"
                    />
                    <ServiceItem 
                        judul="Problem Generator Development"
                        warna="biru"
                        deskripsi="Deskripsi Di Sini"
                    />
                </div>
            </div>
        </div>
    )
}

export default Services;