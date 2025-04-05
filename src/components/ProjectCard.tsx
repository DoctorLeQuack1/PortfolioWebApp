export const ProjectCard = (props: any) => {
    return (
        <div className="d-flex flex-wrap justify-content-center pb-5">
            <div className="card border d-flex flex-column" style={{ width: "18rem", height: "370px", backgroundColor: "transparent" }}>
                <img src={props.project.img_} className="card-img-top img-fluid" alt={props.project.title_} style={{ maxHeight: "162px" }} />
                <div className="card-body text-white">
                    <h5 className="card-title">{props.project.title_}</h5>
                    <p className="card-text">{props.project.description_ || "No description available."}</p>
                    <a id="GitHubRepoButton" href="#"
                        className="btn btn-primary position-absolute"
                        style={{
                            bottom: "25px", left: "50%", transform: "translateX(-50%)",
                            backgroundColor: "black", borderColor: "white",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'white';
                            e.currentTarget.style.color = 'black';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'black';
                            e.currentTarget.style.color = 'white';
                        }}
                        >
                        GitHub Repo
                    </a>
                </div>
            </div>
        </div>
    );
};