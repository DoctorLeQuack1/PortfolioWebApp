export const NavBarButton = (props: any) => {
    return (
        <button id="navBarButton" 
            className="inline-flex align-middle font-sans font-medium text-center transition-all px-4 
            text-gray-200 border-gray-200 rounded-full group">
            {props.text}
        </button>
    );
};