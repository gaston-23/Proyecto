require('dotenv').config();

import Pet from '../models/pet';
import Like from '../models/like';

import auth from '../passport';

import passport from 'passport';

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import moment from 'moment';



class MatchController {

    /**
	 * Obtener sugerencias de match de acuerdo con la raza y subraza
	 * @return {json}
	 */
	 static async getSuggestion(req, res, next) {
		passport.authenticate('jwt', { session: false }, async (err, payload) => {
			if (payload == false) return res.status(401).send({ message: 'Sin autorización' });
			
			try {
				let pets = await Pet.find( {kind: req.body.kind} );
				console.log(pets);
				return res.status(200).json(pets);
			}
			catch (error) {
				console.error(error.message, 'getSuggestion');
				return res.status(400).json({
					message: 'Error al obtener mascotas',
				});
			}
		})(req, res);
	}

	/**
	 * Like usuario
	 * @return {json}
	 */
	static async setLike(req, res) {
	  passport.authenticate('jwt', { session: false }, async (err, payload) => {
		if (payload == false) return res.status(401).send({ message: 'Sin autorización' });

	    console.log(req.body);
		if(req.body.like){
			let like = new Like();
			like.user	= req.body.user;
			like.pet	= req.body.pet;
			like.time	= moment();
			like.owner	= payload.user._id;
			await like.save()
			.then(saved => {
				
				return res.status(200).json(saved)
			})
			.catch( error => {
				// error al actualizar
				return res.status(400).json({
					message: `Error al actualizar información de usuario (#${user_id})`
				});
			});
		}else{
			let dislike = {
				user	: req.body.user,
				pet		: req.body.pet,
				owner	: payload.user._id
			}
			await like.findAndDelete(dislike)
			.then(saved => {
				return res.status(200).json(saved)
			})
			.catch( error => {
				// error al actualizar
				return res.status(400).json({
					message: `Error al actualizar información de usuario (#${user_id})`
				});
			});
		}
	    
	  })(req, res);
	}


	/**
	 * Registro
	 * @return {json}
	 */
	 static async signin(req, res, next) {
		console.log(req.body);
		

		let user = new User();

		user.name = req.body.name;
		user.surname = req.body.surname;
		user.email = req.body.email;
		user.img = 'null';

		if (!req.body.password) {
			return res.status(400).send({
				message: 'No ha ingresado datos validos',
			});
		}else{
			console.log(req.body.password);
			await bcrypt.hash(req.body.password, 1)
			.then( (hash) => {
				user.password = hash;
				if(user.name != null && user.surname != null && user.email != null){
					//save user
					user.save((err,userStored) =>{
						console.log(userStored);
						if(err){
							return res.status(400).send({
								message: 'Error al guardar usuario',
							});
						}else{
							if(!userStored){
								return res.status(404).send({
									message: 'Error al registrar el usuario',
								});
							}else{
								return res.status(200).send({
									token: jwt.sign({ user: userStored }, process.env.JWT_SECRET), // probar si permite crear usuario, sino, eliminar
									user: userStored,
								});
							}
						}
					})
				}else{
					return res.status(400).send({
						message: 'No ha ingresado datos validos',
					});
				}
			})
			.catch(err=>{
				console.log(err);
				return res.status(400).send({
					message: 'No ha ingresado datos validos',
				});
			})
		}
	}
	

}

export default MatchController;