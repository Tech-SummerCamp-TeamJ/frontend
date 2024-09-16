"use client";

import EventDetail from "../components/EventDetail";
import RouteHeader from "../components/Header/RouteHeader";

const DetailPage = () => {
	const headerTitle = "コメント";
	return (
		<div>
			<RouteHeader title={headerTitle} prePath={"/detail"} />
			<EventDetail name="" />
			{/* <CommentPost /> */}
		</div>
	);
};

export default DetailPage;
