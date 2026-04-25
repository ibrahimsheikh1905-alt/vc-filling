"use client";
import { Message } from "@/types";
import { UploadButton } from "@/utils/uploadthing";
import axios from "axios";
import { Loader } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Ticket = ({ params }: { params: { ticketId: string } }) => {
  const [getLoading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>();
  const [userId, setUserId] = useState<number>();
  const [fileUrl, setFileUrl] = useState<string[]>([]);
  const [uploaded, setUploaded] = useState<boolean>(false);
  const [uploadMessage, setUploadMessage] = useState<string>("");
  const fetchUserId = async () => {
    const res = await axios.get("/api/mysql/users/", {
      params: {
        email: localStorage.getItem("vcFillingName"),
      },
    });
    const data = await res.data;
    setUserId(data.data[0].id);
  };
  useEffect(() => {
    fetchUserId();
  }, []);
  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      const response = await fetch("/api/chat/messages/" + params.ticketId);
      const data = await response.json();
      setMessages(data);
      setLoading(false);
    };
    fetchMessages();
  }, [params.ticketId]);
  const sendMessage = async (formData: FormData) => {
    const description = formData.get("description") as string;
    setLoading(true);
    await axios.post("/api/chat/messages/send", {
      ticketId: params.ticketId,
      senderId: userId,
      message: description ?? "no message",
      attachmentUrl: fileUrl.toString() || "",
    });
    setFileUrl([]);
    setUploaded(false);
    const response = await fetch("/api/chat/messages/" + params.ticketId);
    const data = await response.json();
    setMessages(data);
    setLoading(false);
  };
  return (
    <>
{getLoading ? (
        <div className="flex items-center justify-center min-h-[400px]">
          <Loader />
        </div>
      ) : (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">
        Additional Information Required
      </h2>
      <p className="mb-8">
        Please add additional information to support your request.
      </p>
      <div className="flex flex-col gap-4 max-w-2xl">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">Chat</h3>
          <div
            className="flex flex-col gap-2 overflow-y-auto"
            style={{ maxHeight: "300px" }}
          >
            {messages?.map((message: any) => (
              <div
                key={message.id}
                className={`flex w-full ${
                  message.sender_id === userId ? "justify-end" : ""
                }`}
              >
                <div
                  className={` rounded-md p-2 ${
                    message.sender_id === userId
                      ? "bg-blue-500  text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  <p className="text-sm">{message.message}</p>
                  {message.attachment_url && (
                    <>
                      {message.attachment_url
                        .split(",")
                        .map((url: any) => (
                          <a
                            href={url}
                            key={url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p className="text-sm  underline">
                              View attachment
                            </p>
                          </a>
                        ))}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage(new FormData(e.currentTarget));
          }}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2">
            <label className="font-bold" htmlFor="description">
              Message
            </label>
            <textarea
              className="border-gray-300 rounded border p-2"
              name="description"
              id="description"
              rows={5}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold" htmlFor="attachments">
              Attachments
            </label>
            {uploaded ? (
              <p>{uploadMessage}</p>
            ) : (
              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  setFileUrl(res.map((item) => item.url));
                  setUploaded(true);
                  setUploadMessage("File Uploaded Successfully");
                }}
                onUploadError={(error: Error) => {
                  setUploaded(false);
                  setUploadMessage(error.message);
                }}
              />
            )}
          </div>
          <button
            className="text-white2 mt-4 rounded-md bg-blue-500 px-4 py-2 text-white"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
      )}
    </>
  );
};

export default Ticket;
