FlowRouter.route('/',{
    name: 'home',
        action(){
            BlazeLayout.render('HomeLayout');
        }
});

FlowRouter.route('/add', {
    name: 'addTask',
    action() {
        BlazeLayout.render('MainLayout', {
            main: 'AddTask'
        });
    }
});

FlowRouter.route('/chart', {
    name: 'chart',
    action() {
        BlazeLayout.render('MainLayout', {
            main: 'chart'
        });
    }
});

FlowRouter.route('/task/:id', {
    name: 'fullTask',
    action() {
        BlazeLayout.render('MainLayout', {
            main: 'FullTask'
        });
    }
});

FlowRouter.route('/profile', {
    name: 'profile',
    action() {
        BlazeLayout.render('MainLayout', {
            main: 'Profile'
        });
    }
});


FlowRouter.route('/uploadFile', {
    name: 'upload',
    action() {
        BlazeLayout.render('MainLayout', {
            main: 'Upload'
        });
    }
});