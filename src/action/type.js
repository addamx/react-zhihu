/**
 * User
 */
export const GET_USER_INFO = 'GET_USER_INFO';
export const USER_REGISTER = "USER_REGISTER";
export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOG_OUT";
export const GET_USER_QUESTIONS = 'GET_USER_QUESTIONS';
/**
 * Question
 */
export const GET_QUESTION_LIST = 'GET_QUESTION_LIST';
export const GET_QUESTION = 'GET_QUESTION';
export const ADD_QUESTION = 'ADD_QUESTION';
/**
 * Chat
 */
export const GET_CHATLIST = 'GET_CHATLIST';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const READ_MESSAGE = 'READ_MESSAGE';
export const GET_USER = 'GET_USER';
export const SET_CURRENTCHAT = 'SET_CURRENTCHAT';
export const OUT_CURRENTCHAT = 'OUT_CURRENTCHAT'; //TODO: 退出当前窗口, 同时清理store记录(currentTalker, currentChat)
/**
 * Notice
 */
export const GET_NOTICE = 'GET_NOTICE'
export const GET_NOTICELIST = 'GET_NOTICELIST'