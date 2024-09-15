import React from "react";

type CardProps = {
	children: React.ReactNode;
};

// カードの枠を作成するコンポーネントです。
const Card = ({ children }: CardProps) => {
	return (
		<div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-md">
			{children}
		</div>
	);
};


export default Card;
