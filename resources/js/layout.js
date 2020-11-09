(function() {
    var body = $('body');

    window.matchMedia('(min-width: 992px) and (max-width: 1199.98px)').addListener(function(event) {
        if (! event.matches) {
            body.removeClass('sidebar-md');
            return false;
        }

        body.addClass('sidebar-md');
    });

    $('.sidebar-toggler').on('click', function(event) {
        if (window.matchMedia('(min-width: 992px)').matches) {
            event.preventDefault();
            body.toggleClass('sidebar-md');
        } else if (window.matchMedia('(max-width: 991px)').matches) {
            event.preventDefault();
            body.toggleClass('sidebar-sm');
        }
    });

    // Close sidebar when click outside on mobile/table
    $(document).on('click touchstart', function(event){
        event.stopPropagation();

        // Closing of sidebar menu when clicking outside of it
        if (! $(event.target).closest('.sidebar-toggler').length) {
            var sidebar = $(event.target).closest('.sidebar').length;
            if (! sidebar) {
                if ($('body').hasClass('sidebar-sm')) {
                    $('body').removeClass('sidebar-sm');
                }
            }
        }
    });
})();
