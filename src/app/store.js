import { configureStore } from "@reduxjs/toolkit";
import quizzesReducer from "../features/quizzes/quizzesSlice";
import topicsReducer from "../features/topics/topicsSlice";
import cardsReducer from "../features/cards/cardsSlice";

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizzesReducer,
    cards: cardsReducer
  },
});
