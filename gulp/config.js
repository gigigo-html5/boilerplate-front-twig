module.exports = {
    paths: {
        sass: ['./scss/**/*.scss'],
        src : './src',
        dist : './www',
        mainJS: './src/app/app.js',
        mainSass : './src/assets/scss/general.scss'
        // symfony: './src/ApiBundle/Resources/'  //Destination folder for the twigs
    },
    sourcemap: true,
    environment: process.env.SERVER || 'dev',
    parameters: require('../parameters.json')
}
