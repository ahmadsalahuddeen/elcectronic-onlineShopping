
const express = require('express')

const userRoute = express()

const userController = require('../controllers/userController')
const auth = require('../middleware/adminAuth')
userRoute.use(function (req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
  res.header('Expires', '-1')
  res.header('Pragma', 'no-cache')
  next()
})
userRoute.get('/', function (req, res) {
  res.redirect('/login')
})

userRoute.get('/register', auth.isUserLogout, userController.loadRegister)
userRoute.post('/register', userController.addUser)
userRoute.get('/login', auth.isUserLogout, userController.loadLogin)
userRoute.post('/login', userController.loginValidate) 
userRoute.get('/home', auth.isUserLogin, userController.loadHome)
userRoute.get('/productlist', auth.isUserLogin, userController.loadProductList)
userRoute.get('/logout',  userController.logOut)
userRoute.post('/addtocart', userController.addToCart)
userRoute.get('/cartmanage', auth.isUserLogin, userController.loadCartManage)
userRoute.post('/removeCartItem', userController.removeCartItem)
userRoute.post('/qtyChange' , userController.qtyChange)
userRoute.get('/productdetail', userController.loadProductDetail)
userRoute.get('/checkout', userController.loadCheckout)
userRoute.post('/add-address', userController.addAddress)
userRoute.post('/add-address-userprofile', userController.addAddressProfile)
userRoute.post('/newOrder', userController.newOrder)
userRoute.post('/applyCoupon', userController.checkCoupon)
userRoute.get('/ordersuccess', userController.loadOrderSuccess)
userRoute.get('/userProfile', userController.loadUserProfile)
userRoute.post('/updateProfile', userController.updateProfile)
userRoute.get('/userAddress', userController.loaduserAddress)
userRoute.get('/userOrderManage', userController.laoduserOrderManage)
userRoute.get('/wishlist', userController.loadwishlist) 
userRoute.post('/addToWishlist', userController.addToWishlist)
userRoute.post('/editAddress', userController.editAddress)
userRoute.get('/deleteAddress', userController.deleteAddress)
userRoute.get('/cancelOrder', userController.cancelOrder)
userRoute.get('/orderFailed', userController.loadOrderFailed)

userRoute.post('/deleteWishlistItem', userController.deleteWishlistItem)
userRoute.post('/verifyPayement', userController.verifyPayement)



module.exports = userRoute
