import ReactDOM from "react-dom";
import PageChange from "../components/PageChange/PageChange";

export function showLoad(url) {
    console.log(`Loading: ${url}`);
    document.body.classList.add("body-page-transition");
    ReactDOM.render(
        <PageChange path={url} />,
        document.getElementById("page-transition")
    );
}

export function hideLoad() {
    ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
    document.body.classList.remove("body-page-transition");
}