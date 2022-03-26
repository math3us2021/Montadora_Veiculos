const controllerMenu = require('../controllers/MenuControllers')

app.get('/', controllerMenu.menu)

