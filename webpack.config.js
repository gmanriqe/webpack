const path = require('path'); // importando modulos "command js"

module.export = {
    entry: './src/index.js', // archivo javascript que inicializara
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'none'
}