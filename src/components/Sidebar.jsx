export default function Sidebar(props){
    const { showModal , handleToggleModal,data}=props
    return(

        <div className="sidebar">

            <div className="bgOverlay" onClick={handleToggleModal}></div>
            <div className="sidebarContents">
                <h2 className="headerside">{data?.title}</h2>
                <div>
                    <p className="desc">Description</p>
                    <p className="dataside" >{data?.explanation}</p>
                </div>
                <button onClick={handleToggleModal}>
                <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
            
        </div>
    )
}