import { Routes, Route } from "react-router-dom";
import Navbar from "./navigation/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LocationsPage from "./pages/LocationsPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./shared/Footer";
import WebDesignPage from "./pages/WebDesignPage";
import GraphicDesignPage from "./pages/GraphicDesignPage";
import AppDesignPage from "./pages/AppDesignPage";

function App() {
	return (
		<div className="flex flex-col justify-between h-screen lg:bg-leaf-pattern lg:bg-no-repeat lg:bg-leaf-pattern-pos">
			<div>
				<Navbar />
				<main>
					<Routes>
						<Route path="/designo-website/" element={<HomePage />} />
						<Route path="/designo-website/about" element={<AboutPage />} />
						<Route
							path="/designo-website/locations"
							element={<LocationsPage />}
						/>
						<Route path="/designo-website/contact" element={<ContactPage />} />
						<Route
							path="/designo-website/web-design"
							element={<WebDesignPage />}
						/>
						<Route
							path="/designo-website/graphic-design"
							element={<GraphicDesignPage />}
						/>
						<Route
							path="/designo-website/app-design"
							element={<AppDesignPage />}
						/>
						<Route path="*" element={<div>404</div>} />
					</Routes>
				</main>
			</div>
			<Footer />
		</div>
	);
}

export default App;
