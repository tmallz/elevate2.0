const router = require('express').Router();
const userController = require('../../controllers/userControllers')
const withAuth = require('../../src/utils/auth')
const {User} = require('../../models')

router.route('/signup', async (req, res) => {
    try {
      const userData = await User.create({email:req.body.email, password:req.body.password});
      console.log('in route');
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now signed up!' });
      });
    } catch (err) {
      console.log('in error block');
      res.status(400).json(err);
    }
  });

module.exports = router;
