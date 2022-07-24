function RecentWork() {
    const daftarGambar = [
        "https://images.unsplash.com/photo-1599707017605-b804c8ca4a44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "https://lh4.googleusercontent.com/GkZYgqIoYnDBU_wBQUoWlNqVjc4H5wOxsMkUB8JSen2tItxO35fprTGYnGSAbOAG-zE1xt9vFEMb9CjYiHibVZH72t2MJRXb_OT7tco5hrIHHUdEFq_VR3u0zmRGVbxM1g=w1280",
        "https://lh5.googleusercontent.com/GgjPaBJUZZrQMmwbEd6mJCiIy8wmsZXvTlHXkCbZsArlEbfYD1oESzv8DxneAC8DEJEG2WoeldqUBvj_NSwyxBIEgSj4u9BsLw5kSsFT2Db2lLlv4bM4CA98smBTFTlndw=w1280",
        "https://lh4.googleusercontent.com/-X_Hx9KjuYqpmbOfFx3Bv7NNaNTCHZw0XC9M0X-LB-tS22ewbpDL2_7qayG15nYR7kgt7C5HJM4Vb8cReRqvKtQqSn1p5mUrOk4WbQK71aey0-mnLwW1VahV9h2Qvs4sJA=w1280"
    ]
    return (
        <div className="section py-5">
            <div className="container">
                <h1>Recent Work</h1>
                <div className="row mt-5">
                        {
                            daftarGambar.map(function(gambar) {
                                return (
                                    <div className="col-4 mt-4 gambarku">
                                        <img
                                        className="img-fluid"
                                        src={gambar}
                                        />
                                    </div>          
                                )
                            })
                        }
                </div>
            </div>
        </div>
    )
}

export default RecentWork;