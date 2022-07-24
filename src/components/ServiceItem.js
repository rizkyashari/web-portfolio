import '../styles/ServiceItem.css'

function ServiceItem(props) {
    const classCard = "card-body " + props.warna
    return (
        <div className="col-6 mt-3">
            <div class="card text-dark p-3">
            <div class={classCard}>
                <h5 class="card-title">{props.judul}</h5>
                <p class="card-text">{props.deskripsi}</p>
            </div>
        </div>
        </div>
    )
}

export default ServiceItem;