import CardComponent from "../components/CardComponent.js";
import Header from "../components/Header.js";

function HomePage() {
    const jsx = (
        <div className="component-HomePage">
            <Header />
            <CardComponent />
        </div>  
    );
    return jsx
}
export default HomePage; 