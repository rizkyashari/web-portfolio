import "../styles/MyButton.css"

function MyButton(props) {
    const classButton = "btn btn-saya btn-" + props.warna
    return (
        <a target="_blank" href={props.link} class={classButton}>{props.text}</a>
    )
}

export default MyButton;