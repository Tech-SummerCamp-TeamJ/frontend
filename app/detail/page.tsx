"use client";
import { Button } from "@mui/material";
import React from "react";
<<<<<<< HEAD
import Tabs from "../components/Tabs";
import CommentPost from "../components/CommentPost";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import ChatIcon from "@mui/icons-material/Chat";
import Comments from "../components/Comments";
import EventDetail from "../components/EventDetail";

const page = () => {
  return (
    <div>
      <EventDetail />
      <Tabs />

      <CommentPost />
      {/* <div className="grid fixed bottom-4 right-4 z-10"> */}
      <Button
        className="btn"
        onClick={() => {
          const modal = document.getElementById(
            "comment_modal"
          ) as HTMLDialogElement;
          modal?.showModal();
        }}
      >
        <ChatIcon className="size-16" />
      </Button>
      <dialog id="comment_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
      <Comments />
    </div>
=======
import RouteHeader from "../components/Header/RouteHeader";

const page = () => {
  return (
    <>
      <RouteHeader />
      <Link href="/popular">
        <Button>
          <ChatIcon />
        </Button>
      </Link>
    </>
>>>>>>> 928f8243cf483abedc44810480a02c8ff02c80f5
  );
};

export default page;
