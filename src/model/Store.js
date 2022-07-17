import React from 'react'
import create from "zustand";

export const useStore = create((set)=>({
  likelist:[],
  add:(list)=> set((state)=>({likelist:[...state.likelist,list]}))
  ,delLike:(list)=>set((state)=>({likelist:[...state.likelist.filter((v)=> v.collectionId !=list.collectionId)]})),
  //delLike는 filter 함수를 통해 delete한 리스트를 뺴고, 다시 likelist를 출력해줌.
}))