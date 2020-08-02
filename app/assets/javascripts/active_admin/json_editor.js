//= require jsoneditor/jsoneditor.js
//= require jsoneditor/asset/jsonlint/jsonlint.js

;(function(window, $) {
  $(function() {
    $('div.jsoneditor-wrap').each(function(i,wrap){
      var fieldset = $(wrap).parents('li:eq(0)');
      var container = $(wrap)[0];
      var textarea = $($(wrap).find('textarea'));
      var editor;
      var options = {
        mode: 'view',
      };
      editor = new JSONEditor(container, options, JSON.parse(textarea.val()));
    });
  });
})(window, jQuery);
