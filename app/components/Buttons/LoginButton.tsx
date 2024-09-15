import React from "react";
import Button from "@mui/material/Button";

type LoginButtonProps = {
	text: string;
	icon: React.ReactNode;
	disabled?: boolean;
	onClick?: () => void;
};

const LoginButton = ({
	text,
	icon,
	disabled = false,
	onClick,
}: LoginButtonProps) => {
	return (
		<Button
			variant="outlined"
			className={`flex items-center justify-center w-full p-4 my-2 text-lg font-semibold rounded-lg shadow-sm ${
				disabled ? "bg-gray-300" : "bg-white"
			}`}
			startIcon={icon}
			disabled={disabled}
			onClick={onClick}
		>
			{text}
		</Button>
	);
};

export default LoginButton;
