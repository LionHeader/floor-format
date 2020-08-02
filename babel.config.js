module.exports = {
  presets: ['@babel/env'],
  sourceType: 'unambiguous' // 修复Cannot assign to read only property 'exports' of object '#<Object>'错误
}
