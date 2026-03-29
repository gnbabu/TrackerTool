(function ($) {
    $.fn.modalPlugin = function (options) {

        var settings = $.extend({
            modalId: '',
            modalWidth: '600px',   // Default modal width (can be overridden)
            onOpen: null,
            onClose: null,
            onSave: null
        }, options);

        if (!settings.modalId) {
            console.error('Modal ID is required');
            return this;
        }

        var $modal = $(settings.modalId);

        if ($modal.length === 0) {
            console.error('Modal not found:', settings.modalId);
            return this;
        }

        // Apply dynamic width to the modal dialog
        $modal.find('.modal-dialog').css('max-width', settings.modalWidth); // Apply modal width


        // Bootstrap instance
        var bsModal = new bootstrap.Modal($modal[0]);

        // OPEN
        this.open = function () {
            bsModal.show();
            if (typeof settings.onOpen === 'function') {
                settings.onOpen($modal);
            }
        };

        // CLOSE
        this.close = function () {
            bsModal.hide();
            if (typeof settings.onClose === 'function') {
                settings.onClose($modal);
            }
        };

        // SAVE TRIGGER (plugin DOES NOT read data)
        this.save = function () {
            if (typeof settings.onSave === 'function') {
                settings.onSave($modal); // 🔥 pass modal reference
            }
        };

        return this;
    };
})(jQuery);