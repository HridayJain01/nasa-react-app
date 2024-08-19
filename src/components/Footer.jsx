export default function Footer(props){
    const { showModal , handleToggleModal,data}=props
    return(
        <footer>
            <div className="bgGradient">

            </div>
            <div className="footer-box">
                <h1 className="foot">Apod Project</h1>
                <h2 className="footer-title">{data?.title}</h2>
                
            </div>
            <button onClick={handleToggleModal}>
                
                <i className="fa-solid fa-circle-info"></i>
            </button>
            

        </footer>
    )
}