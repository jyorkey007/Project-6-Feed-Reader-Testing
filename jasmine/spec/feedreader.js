/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        
        
        /* loops through each feed in the 
         * allFeeds object and ensures it
         * has a URL defined and that the URL is not empty.
         */
        it('contains a url feed', function() {
            allFeeds.forEach(function(aFeeds) {
              expect(aFeeds.url).toBeDefined();
              expect(aFeeds.url.length).not.toBe(0);
            })
        })        
         // loops through each feed in the
         // allFeeds object and ensures it has a name defined
         // and that the name is not empty.
        it('defines name', function() {
            allFeeds.forEach(function(aFeeds) {
              expect(aFeeds.name).toBeDefined();
              expect(aFeeds.name.length).not.toBe(0);
            })
                });
            });
        })
    

        
        // Writes a new test suite named "The menu".
        describe('The menu', function() {
           
        // Writes a test that ensures the menu element is hidden by default.
           it('is hidden by default', function() {
               var myBodyTag = $('body');
               expect(myBodyTag.hasClass('menu-hidden')).toBe(true);
           });
        // Writes a test that ensures the menu changes
        // visibility when the menu icon is clicked.
           it('appears when click event happens', function() {
                var bodyElement = $('body');
               expect(bodyElement.hasClass('menu-hidden')).toBe(true);
           });
        });

        
        
         

        // Writes a new test suite named "Initial Entries" 
        describe('Initial Entries', function() {
            beforeEach(function(done) {
                loadFeed(0);
                done();
            })


        // Writes a test that ensures when the loadFeed
        // function is called and completes its work, there is at least
        // a single .entry element within the .feed container.
         
            it('shows loadFeed function called', function() {
                expect(loadFeed).not.toBe(0);
            })
        })

    // Writes a new test suite named "New Feed Selection".
    // Writes a test that ensures when a new feed is loaded
    // by the loadFeed function that the content actually changes.
        describe('New Feed Selection', function() {
            beforeEach(function(done) {
                loadFeed(0, function() {
                  var oldContent = $('.feed').html();                    
                });
                loadFeed(1, function() {
                  var newContent = $('.feed').html();
                });
                done();

            it('loads different entry', function(done) {
                expect(oldContent).not.toBe(newContent);
                done();
            });
        });
    });
            

