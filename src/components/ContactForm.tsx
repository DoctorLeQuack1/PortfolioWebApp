export const ContactForm = (props: any) => {

    return (
        <div className="dropdown-center">
            <button id="navBarButton"
                className="btn btn-outline-light rounded-pill px-4"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                {props.text}
            </button>
            <div id="dropdown-menu" className="custom-dropdown-menu" style={{ minWidth: "300px",  backdropFilter: "blur(10px)"}}>
                <form className="px-4 py-3">
                    <div className="mb-3">
                        <label className="form-label">Enter your name</label>
                        <input className="form-control" placeholder="Your Name Here" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Enter contact info</label>
                            <textarea className="form-control" placeholder="Enter your contact info" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Reach out</button>
                </form>
            </div>
        </div>
    );
};