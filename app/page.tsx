"use client";

import React from "react";
import RouteHeader from "./components/Header/RouteHeader";
import HomeHeader from "./components/Header/HomeHeader";
import LoginButton from "./components/Buttons/LoginButton";
import Card from "./components/Card";
import Tag from "./components/Tag";
import HomeIcon from "@mui/icons-material/Home"; // MUIのアイコンをインポート

const page = () => {
	return (
		<>
			<RouteHeader title="Sign In" showBackButton={false} />
			<Card>
				<div>
        <HomeIcon sx={{ color: "#BDE8F5" }} />
					<Tag
						name="Home"
						icon={<HomeIcon sx={{ color: "#BDE8F5" }} />}
					/>
					<Tag name="Settings" color="#F5BDBD" />
				</div>
			</Card>
		</>
	);
};

export default page;
