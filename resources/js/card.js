Nova.booting((Vue, router) => {
    Vue.component('nova-twitter-timeline', require('./components/Card'));


    Vue.filter('formatDate', function(value) {
        if (value) {
            return moment(String(value)).format('hh:mm A')
        }
    });
})
