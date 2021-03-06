module.exports = function(app, passport) {

    // HOME PAGE (with login links) ========
    // app.get('/', function(req, res) {
    //     res.render('index.ejs');
    // });

    // LOGIN ===============================
    app.get('/login', function(req, res) {
        res.render('login.ejs', { message: req.flash('loginMessage') }); 
    });

    app.get('/truckEntry', isLoggedIn, function(req, res) {
        res.render('truckEntry.ejs'); 
    });


    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/truckEntry', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // SIGNUP ==============================
    // show the signup form
    app.get('/signup', function(req, res) {
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true
    }));

    // PROFILE SECTION =====================
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user
        });
    });

    // LOGOUT ==============================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    // show the about page
    app.get('/about', function(req, res) {
        res.render('about.ejs');
    });

    // show the about page
    app.get('/contact', function(req, res) {
        res.render('contact.ejs');
    });
};


// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}