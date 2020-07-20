describe('Plugin Default Init', function() {
    var el, plugin;

    beforeEach(function(){
        jasmine.getFixtures().fixturesPath = 'base/test';
        loadFixtures('test-template.html');

        el = $('#test-element');
        plugin = el.pluginBoilerplate();
    });

    afterEach(function(){
        el.remove();
        el = null;
    });

    it('should add default style to the element', function() {
        expect(el).toHaveClass("my-style1");
    });

});

describe('Plugin with Option Init', function() {
    var el, plugin;

    beforeEach(function(){
        el = $('<div id="test-element"></div>');
        $(document.body).append(el);
        plugin = el.pluginBoilerplate({ myStyle: 'my-style2'});
    });

    afterEach(function(){
        el.remove();
        el = null;
    });

    it('should add specified style to the element', function() {
        expect(el.hasClass('my-style2')).toBe(true);
        expect(el).not.toHaveClass("my-style1");
    });
});
