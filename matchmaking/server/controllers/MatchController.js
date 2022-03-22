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
				pets = pets.map(el => {
					let w = 0;
					w += el.subkind == req.body.subkind ? 20 : 0;
					w -= Math.abs(el.age - req.body.age) ;
					el.tags.forEach(element => {
						w += req.body.tags.some(element)? 3 : 0;
					});
					el.w = w;
					if (el._id != req.body._id) {
						return el;
					}
				}).sort(function (a, b) {
					if (a.w > b.w) {
					  return 1;
					}
					if (a.w < b.w) {
					  return -1;
					}
					// a must be equal to b
					return 0;
				  });
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


	

}

export default MatchController;