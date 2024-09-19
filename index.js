
const zhTW = require("./zh-TW");

module.exports = (app) => {
    return {
        install() {
            app.addLocaleMessage("zh-TW", zhTW);
        },

        uninstall() {
            
        }        
    };
}