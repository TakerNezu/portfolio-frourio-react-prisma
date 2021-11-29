"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.ApiData = exports.DbData = void 0;
// eslint-disable-next-line @typescript-eslint/no-var-requires
var data = require('../../server/json/data.json');
// テーブルに挿入したいデータを、prismaようにエクスポートする
exports.DbData = data;
exports.ApiData = {
    post: exports.DbData.post.map(function (postData) {
        return __assign(__assign({}, postData), { comments: exports.DbData.comment.filter(function (comment) { return comment.postId === postData.id; }) });
    })
};
// APIとしての形としてのデータをjson-serverに渡す
module.exports = function () { return exports.ApiData; };
