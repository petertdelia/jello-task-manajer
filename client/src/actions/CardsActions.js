import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export default function createCardSuccess(card) {
  return { type: types.CREATE_CARD_SUCCESS, card };
}

export function createCard(card, callback) {
  return function (dispatch) {
    apiClient.createCard(card, (data) => {
      dispatch(createCardSuccess(data));

      if (callback) {
        callback(data.card);
      }
    });
  };
}

export function fetchCardSuccess(card) {
  return { type: types.FETCH_CARD_SUCCESS, card };
}

export function fetchCard(id) {
  return function (dispatch) {
    apiClient.getCard(id, (data) => {
      dispatch(fetchCardSuccess(data));
    });
  };
}

export function updateCard(card) {
  return function (dispatch) {
    apiClient.updateCard(card, (data) => {
      dispatch(fetchCardSuccess(data));
    });
  };
}

export function createCommentSuccess(comment) {
  return { type: types.CREATE_COMMENT_SUCCESS, comment };
}

export function createComment(comment, callback) {
  return function (dispatch) {
    apiClient.createComment(comment, (data) => {
      dispatch(createCommentSuccess(data));

      if (callback) {
        callback(data.comment);
      }
    });
  };
}

export const updateDropPositionSuccess = (cards) => ({ type: 'UPDATE_CARD_POSTION', cards });

export function updateCardDropPosition(dragTarget, dropTarget) {
  // return (dispatch) => {
  //   dispatch(updateDropPositionSuccess({ dragTarget, dropTarget }));
  // }

  if (dropTarget._id === dragTarget._id) return () => {};

  const dragOpts = {
    _id: dragTarget._id,
    position: dropTarget.position || dragTarget.position,
    listId: dropTarget.listId,
  };
  const dropOpts = {
    _id: dropTarget._id,
    position: dragTarget.position,
  };

  return (dispatch) => {
    apiClient.updateCard(dragOpts, (newDragList) => {
      if (dropTarget.position) {
        apiClient.updateCard(dropOpts, (newDropList) => {
          dispatch(updateDropPositionSuccess([newDragList, newDropList]));
        });
      } else {
        dispatch(updateDropPositionSuccess([newDragList]));
      }
    });
  };
}
