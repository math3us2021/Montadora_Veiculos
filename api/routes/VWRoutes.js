const VWcontroller = require('../controllers/VWControllers')

app.get('/VW/VWMenu', VWcontroller.VWMenu)

app.get('/VW/VWBrasilia', VWcontroller.Brasilia)

app.get('/VW/VWMecanica', VWcontroller.Mecanica)







