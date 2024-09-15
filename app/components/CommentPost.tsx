import { useState } from "react";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PlaceIcon from "@mui/icons-material/Place";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import axios from "axios";

const CommentPost = ({ onClose }: { onClose: () => void }) => {
  const [content, setContent] = useState("");
  const [category, setCategory] = useState({
    icon: <ArrowDropUpOutlinedIcon />,
    text: "選択",
  });

  const handleSelect = (icon: JSX.Element, text: string) => {
    setCategory({ icon, text });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const url = `https://app.apidog.com/project/666106/groups/1/events/1/comments`;
      const response = await axios.post(
        url,
        {
          content: content,
          category: category.text,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "User-Agent": "Apidog/1.0.0 (https://apidog.com)",
          },
        }
      );

      console.log(response.data);
      onClose();
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border bg-white rounded-t-xl">
      <div className="flex justify-between">
        <div className="dropdown dropdown-top">
          <div tabIndex={0} role="button" className="btn mb-4">
            {category.icon ? (
              <div className="flex items-center">
                {category.icon}
                <span className="ml-2">{category.text}</span>
              </div>
            ) : (
              category.text
            )}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 mb-2 shadow-sm"
          >
            <li>
              <a
                onClick={() =>
                  handleSelect(<CalendarMonthOutlinedIcon />, "予定日")
                }
              >
                <CalendarMonthOutlinedIcon />
                予定日
              </a>
            </li>
            <li>
              <a onClick={() => handleSelect(<PlaceIcon />, "場所")}>
                <PlaceIcon />
                場所
              </a>
            </li>
            <li>
              <a
                onClick={() => handleSelect(<PeopleAltOutlinedIcon />, "規模")}
              >
                <PeopleAltOutlinedIcon />
                規模
              </a>
            </li>
          </ul>
        </div>
        <button
          type="submit"
          className="bg-custom-pink font-bold mb-4 w-16 h-12 rounded-2xl"
        >
          送信
        </button>
      </div>
      <textarea
        name="name"
        placeholder="コメントを入力"
        className="border w-full"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      ></textarea>
    </form>
  );
};

export default CommentPost;
