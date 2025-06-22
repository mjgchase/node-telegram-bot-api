import util from 'util';
export const deprecate = (msg) => util.deprecate(() => { }, msg, 'node-telegram-bot-api')();
