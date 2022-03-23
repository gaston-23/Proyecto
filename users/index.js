import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';

import passport from 'passport';

import mongoose from 'mongoose';

import AuthRoutes from './server/routes/AuthRoutes'; 
import PetsRoutes from './server/routes/PetsRoutes';
import MatchRoutes from './server/routes/MatchRoutes';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(cors());

// enable files upload
app.use(fileUpload({
	createParentPath: true
}));

const port = process.env.PORT_USERS || 5001;

mongoose.connect('mongodb://localhost:27017/tinderpets', (err,res)=>{
	if (err) {
		throw err;
	}else{
		console.log('Conexion a la bd correcta');
	}
})

/**
 * Rutas 
 * */
app.use('/users/', AuthRoutes);
app.use('/pets/', PetsRoutes);
app.use('/match/', MatchRoutes);


// when a random route is inputed
app.get('*', (req, res) => {
	res.status(200).send({
		message: 'Ruta no encontrada'
	});
});

const server = app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto: ${port}`);
});
