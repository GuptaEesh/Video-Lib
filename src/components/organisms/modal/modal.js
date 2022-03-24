import { useState } from "react";
import { Input, Button } from "../../";
import { useList } from "../../../helpers/list-context";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuid } from "uuid";
import "./modal.css";
export function Modal({ setVisible, video }) {
  const [text, setText] = useState();
  const { lists, dispatchList } = useList();
  return (
    <div className="modalBackground flex justify-center align-center">
      <div className="modalContainer flex flex-column align-center justify-space-between text-white">
        <div className="title">
          <h1>Add Playlists here</h1>
        </div>
        <section
          className="flex flex-column align-center"
          style={{ gap: "1rem", marginBottom: "10px" }}
        >
          {lists.playlist.map(({ id, info }) => {
            return (
              <div
                key={id}
                className="flex align-center"
                style={{ gap: "1rem" }}
              >
                <Button
                  btnType="primary-video text-white bold btn without-shadow"
                  btnText="Add to"
                  btnFunc={() =>
                    dispatchList({
                      type: "ADD_TO_PLAYLIST",
                      payload: { video, id },
                    })
                  }
                  btnStyle={{ padding: "5px 10px" }}
                />
                <h2 className="text-white">{info.name}</h2>
                <AiFillDelete
                  color="var(--secondary-300)"
                  onClick={() =>
                    dispatchList({ type: "REMOVE_PLAYLIST", payload: id })
                  }
                />
              </div>
            );
          })}
        </section>
        <div
          className="flex flex-wrap align-center justify-space-between"
          style={{ padding: "10px", boxShadow: "0 0 8px var(--red-400)" }}
        >
          <Input
            inputClass="input-text md"
            inputName="playlist"
            inputPlaceHolder="playlist name..."
            inputValue={text}
            inputFunc={(e) => setText(e.target.value)}
          />
          <Button
            btnType="primary-video text-white bold btn without-shadow"
            btnText="Generate"
            btnFunc={() => {
              dispatchList({
                type: "GENERATE_PLAYLIST",
                payload: { id: uuid(), info: { name: text, content: [] } },
              });
              setText("");
            }}
            btnStyle={{ padding: "5px 10px" }}
          />
        </div>
        <Button
          btnType="primary-video text-white bold btn without-shadow"
          btnText="Close"
          btnFunc={() => {
            setVisible(false);
          }}
        />
      </div>
    </div>
  );
}
