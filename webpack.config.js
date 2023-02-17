const path = requiere('path');


module.exports = {
    entry: "./src/index.js", //Este sera nuestro punto de entrada a la app
    output: { 
        path: path.resolve(__dirname, 'dist'),//Sera como enviaremos nuestro recurso una vez preparado
        filename: BeforeUnloadEvent.js
    },
    resolve: {
        //Aqui van las extenciones con las que trabajaremos en el proyecto
        extensions: ['.js', '/jsx']
    },
    module: {
        //Reglas a tener en el proyecto
        rules: {
            test: /\.(js|jsx)$/, //Expresion regular para definir los tipos de extensiones que usaremos
            exclude: /node_nodules/, //Excluimos la carpeta de node modules de la dist de produccion
            use: {
                loader: 'babel-loader',
            }
        }
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3006,
        // open: true,
    }
}