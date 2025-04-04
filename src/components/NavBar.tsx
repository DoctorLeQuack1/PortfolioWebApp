import { NavBarButton } from "./NavBarButton";

export const NavBar = () => {
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center p-3">
                <div className="p-2">
                    <img src="/astronaut.png" className="img-fluid" style={{ maxWidth: "70px" }} alt="logo" />
                </div>
                <div className="d-none d-md-flex gap-3">
                    <NavBarButton text={"About Me"} />
                    <NavBarButton text={"Portfolio"} />
                    <NavBarButton text={"Contact"} />
                    <NavBarButton text={"Resume"} />
                </div>
                <div className="dropdown d-sm-flex d-md-none">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Menu
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};