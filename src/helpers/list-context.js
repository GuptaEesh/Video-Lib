import { createContext, useContext, useReducer } from "react";

const ListContext = createContext();
const initial = {
  likeList: [],
  history: [],
  playlist: [],
};
const listReducer = (lists, action) => {
  switch (action.type) {
    case "LIKE_VIDEO":
      return {
        ...lists,
        likeList: [
          ...lists.likeList,
          ...action.payload.videos.filter(
            (video) => video.id === action.payload.id
          ),
        ],
      };
    case "DISLIKE_VIDEO":
      return {
        ...lists,
        likeList: lists.likeList.filter((video) => video.id !== action.payload),
      };
    case "ADD_TO_HISTORY":
      return {
        ...lists,
        history: [
          ...lists.history,

          {
            ...action.payload.videos.find(
              (video) => video.id === action.payload.id
            ),
            date:
              new Date().getDate() +
              "/" +
              Number(new Date().getMonth() + 1) +
              "/" +
              new Date().getFullYear(),
            time:
              new Date().getHours() +
              ":" +
              new Date().getMinutes() +
              ":" +
              new Date().getSeconds(),
          },
        ],
      };
    case "GENERATE_PLAYLIST":
      return { ...lists, playlist: [...lists.playlist, { ...action.payload }] };
    case "REMOVE_PLAYLIST":
      return {
        ...lists,
        playlist: lists.playlist.filter(
          (playlist) => playlist.id !== action.payload
        ),
      };
    case "ADD_TO_PLAYLIST":
      return {
        ...lists,
        playlist: lists.playlist.map((playlist) =>
          playlist.id === action.payload.id
            ? {
                ...playlist,
                info: {
                  ...playlist.info,
                  content: playlist.info.content.find(
                    (id) => id === action.payload.video
                  )
                    ? [...playlist.info.content]
                    : [...playlist.info.content, action.payload.video],
                },
              }
            : playlist
        ),
      };
    default:
      return lists;
  }
};
const ListProvider = ({ children }) => {
  const [lists, dispatchList] = useReducer(listReducer, initial);

  return (
    <ListContext.Provider value={{ lists, dispatchList }}>
      {children}
    </ListContext.Provider>
  );
};

const useList = () => useContext(ListContext);

export { useList, ListProvider };
