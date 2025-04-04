export const NavBarButton = (props: any) => {
    return (
        <button id="navBarButton" 
            className="btn btn-outline-light rounded-pill px-4">
            {props.text}
        </button>
    );
};