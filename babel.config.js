module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-react'
  ],
  // plugins: [
  //   [
  //     "@babel/transform-runtime",
  //     {
  //       regenerator: true
  //     }
  //   ]
  // ]
};