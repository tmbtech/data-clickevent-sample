var funcs = {
    click1: function () {
        console.log('click1!!!');
    },
    click2: function () {
        console.log('click2!!!');
    }
};

function executeFunctionByName(functionName, context) {
    var args = [].slice.call(arguments).splice(2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for (var i = 0; i < namespaces.length; i++) {
        context = context[namespaces[i]];
    }

    context[func].apply(this, args);
}


$(function () {
    $('a[data-trigger]').on('click', function () {
        var action = $(this).data('trigger');
        executeFunctionByName(action, funcs);
    });
});