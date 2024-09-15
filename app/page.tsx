"use client";

import React from "react";
import RouteHeader from "./components/Header/RouteHeader";
import HomeHeader from "./components/Header/HomeHeader";
import LoginButton from "./components/Buttons/LoginButton";
import Card from "./components/Card";
import Tag from "./components/Tag";

const page = () => {
	return (
		<>
			<RouteHeader title="Sign In" showBackButton={false} />
			{/* <div className="flex items-center justify-center min-h-screen bg-gray-50">
				<Card>
					<Tag text="ログイン" />

					<h2 className="my-4 text-2xl font-bold text-center">
						Uneiへようこそ
					</h2>

					<LoginButton
						text="Discordでログイン"
						icon={<ArrowBackIosNewIcon />}
					/>

					<LoginButton
						text="Slackでログイン"
						icon={<SlackIcon />}
						disabled
					/>

					<Reactions />
				</Card>
			</div> */}
		</>
	);
};

export default page;
