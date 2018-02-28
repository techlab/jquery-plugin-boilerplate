describe('Plugin Default Init', function() {
    var el, plugin;
    
    beforeEach(function(){
        jasmine.getFixtures().fixturesPath = 'base/test';
        loadFixtures('test-template.html');

        el = $('#test-element');
        plugin = el.alterMe();
    });
    
    afterEach(function(){
        el.remove();
        el = null;
    });
    
    it('should add default theme to the element', function() {
        expect(el).toHaveClass("theme-default");
    });

});

describe('Plugin with Option Init', function() {
    var el, plugin;

    beforeEach(function(){
        el = $('<div id="test-element"></div>');
        $(document.body).append(el);
        plugin = el.alterMe({ theme: 'blue'});
    });
    
    afterEach(function(){
        el.remove();
        el = null;
    });
    
    it('should add only blue theme to the element', function() {
        expect(el.hasClass('theme-blue')).toBe(true);
        expect(el).not.toHaveClass("theme-default");
    });
});

describe('Convert to UPPERCASE', function() {
    var el, plugin;
    var text = "Hello this is aTest";

    beforeEach(function(){
        el = $('<div id="test-element">' + text + '</div>');
        $(document.body).append(el);
        plugin = el.alterMe({ alterType: 'upper'});
    });
    
    afterEach(function(){
        el.remove();
        el = null;
    });
    
    it('should convert the element text to UPPERCASE', function() {
        expect(el.text()).toBe(text.toUpperCase());
        expect(el.text()).not.toBe(text);
    });
});

describe('Convert to lowercase', function() {
    var el, plugin;
    var text = "Hello this is aTest";

    beforeEach(function(){
        el = $('<div id="test-element">' + text + '</div>');
        $(document.body).append(el);
        plugin = el.alterMe({ alterType: 'lower'});
    });
    
    afterEach(function(){
        el.remove();
        el = null;
    });
    
    it('should convert the element text to lowercase', function() {
        expect(el.text()).toBe(text.toLowerCase());
        expect(el.text()).not.toBe(text);
    });
});