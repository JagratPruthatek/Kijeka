import "animate.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Footer from "./Components/Footer/Footer";
import JobAppForm from "./Components/JobApplicationForm/JobAppForm";
import JoinDetail from "./Components/JoinDetail/JoinDetail";
import Navbar from "./Components/Navbar/Navbar";
import Careers from "./Pages/Careers";
import ContactUs from "./Pages/ContactUs";
import Homepage from "./Pages/Homepage";
import KijekaButton from "./Components/KijekaButton/KijekaButton";
import Blog from "./Components/Blogs/Blog";
import BlogNew from "./Components/BlogsNew/BlogNew";
import Details from "./Components/ProductDetails/Details";
import ProductCompare from "./Components/ProductCompare/ProductCompare";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/careers" element={<Careers />} />
				<Route path="/about" element={<Footer />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/contact" element={<ContactUs />} />
				<Route path="/career-details" element={<JoinDetail />} />
				<Route path="/job-apply" element={<JobAppForm />} />
				<Route path="/our-products" element={<BlogNew />} />
				<Route path="/our-products/:link" element={<BlogNew />} />
				<Route path="/product-details/:link" element={<Details />} />
				<Route path="/product-compare" element={<ProductCompare />} />
			</Routes>
			<KijekaButton />
			<Footer />
		</Router>
	);
}

export default App;
