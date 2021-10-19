import express from 'express';
import {getUser,createUser,getUserById,deleteUserById,updateUserDetailsById} from '../controllers/users.js';

const router = express.Router();

// const html = './routes/index.hmtl';

// router.get('/html', (request,response)=>{
//      console.log('html called');
//     response.send(html);
// });
router.get('/', getUser);

router.post('/', createUser);

router.get('/:id',getUserById);

router.delete('/:id',deleteUserById);

router.patch('/:id', updateUserDetailsById);

export default router;