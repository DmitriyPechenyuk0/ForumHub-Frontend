
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout/layout";
import { HomePage } from "../pages/home";
import { PostPage } from "../pages/posts";

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="/posts" element={<PostPage />}></Route>
				</Route>
				{/* <Route path='/user' element={<AuthLayout/>}>
                    <Route path='/login' element={<LoginPage/>}></Route>
                    <Route path='/register' element={<RegisterPage/>}></Route>
                </Route> */}
			</Routes>
		</BrowserRouter>
	);
}