import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
//Components
import AddProducts from "./Pages/AddProducts";
import AllProducts from "./Pages/AllProducts";
import HotProducts from "./Pages/HotProducts";

import Dashboard from "./Components/Dashboard/Dashboard";
import Sidebar from "./Components/shared/Sidebar.jsx";
import Header from "./Components/shared/Header.jsx";
import Yt from "./Components/YoutubeVideos/Yt";
import Review from "./Components/Review/Review";
import Form from "./Components/ReachUs/Form";
import Contact from "./Components/Contact/Contact";
import ImageSlider from "./Components/ImageSlider/ImageSlider";
import ClientLogo from "./Components/ClientLogo/ClientLogo";
import NewBlog from "./Components/Blog/CrudBlogs/NewBlogs/NewBlog";
import ReviewBlog from "./Components/Blog/CrudBlogs/UnderReview/ReviewBlog";
import Published from "./Components/Blog/CrudBlogs/Publish/Published";
import Rejected from "./Components/Blog/CrudBlogs/Reject/Rejected";
import Delete from "./Components/Blog/CrudBlogs/Deleted/Delete";
import Approved from "./Components/Blog/CrudBlogs/Approves/Approved";
import BlogMain from "./Components/Blog/CrudBlogs/BlogMain";
import Drafts from "./Components/Blog/CrudBlogs/Drafts/Drafts";

function App() {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const openSidebar = () => {
		setSidebarOpen(true);
	};
	const closeSidebar = () => {
		setSidebarOpen(false);
	};
	return (
		<div className="flex flex-row bg-natural-900 h-screen w-screen relative overflow-x-hidden">
			<Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
			<div className="flex-1 pl-0 lg:pl-72">
				<Header sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
				<Routes>
					<Route index element={<Dashboard title="Home" />} />
					<Route path="youtubevideos" element={<Yt title="youtube Videos" />} />
					<Route path="review" element={<Review title="Review" />} />
					<Route path="add-products" element={<AddProducts />} />
					<Route path="hot-products" element={<HotProducts />} />
					<Route path="all-products" element={<AllProducts />} />
					<Route path="clientlogos" element={<ClientLogo title="Client Logos" />} />

					{/* Blog Nested Routing */}
					<Route path="blog">
						<Route index={true} element={<BlogMain />} />
						<Route index={false} path="newblog" element={<NewBlog />} />
						<Route index={false} path="drafts" element={<Drafts />} />
						<Route index={false} path="reviewblog" element={<ReviewBlog />} />
						<Route index={false} path="approved" element={<Approved />} />
						<Route index={false} path="published" element={<Published />} />
						<Route index={false} path="rejected" element={<Rejected />} />
						<Route index={false} path="delete" element={<Delete />} />
						{/* <Route path='*' element={<NewBlog />} /> */}
					</Route>

					<Route path="imageSlider" element={<ImageSlider title="Image Slider" />} />
					<Route path="contactdetails" element={<Contact title="Contact Details" />} />
					<Route path="reachusfrom" element={<Form title="Reach us from" />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
