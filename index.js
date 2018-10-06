const Matrix4 = require('./cuon-matrix').Matrix4;
const Vector4 = require('./cuon-matrix').Vector4;
const Vector3 = require('./cuon-matrix').Vector3;
const Vector2 = require('./cuon-matrix').Vector2;

const initShaders = require('./cuon-utils').initShaders;
const createProgram = require('./cuon-utils').createProgram;

module.exports = { Matrix4, Vector4, Vector3, Vector2, initShaders, createProgram };