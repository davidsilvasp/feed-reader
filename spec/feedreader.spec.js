/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {

	/* The first test suite. This suite is all about the RSS
	 * feeds definitions, the allFeeds variable in the application.
	 */
	describe('RSS Feeds', function () {
		/* This spec ensures that the allFeed variable is
		 * defined and not empty.
		 */
		it('should ensures that the allFeeds variable is defined and not empty', () => {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});

		/* This spec loops through each feed in the allFeeds
		 * object and ensures it has a url defined and that
		 * the url is not empty.
		 */
		it('should ensure that all feed has a url defined and that it is not empty', () => {
			for (feed of allFeeds) {
				expect(feed.url).toBeDefined();
				expect(feed.url.trim().length).toBeGreaterThan(0);
			}
		});

		/* This spec loops through each feed in the allFeeds
		 * object and ensures it has a name defined and that
		 * the name is not empty.
		 */
		it('should ensure that all feed has a name defined and that it is not empty', () => {
			for (feed of allFeeds) {
				expect(feed.name).toBeDefined();
				expect(feed.name.trim().length).toBeGreaterThan(0);
			}
		});
	});


	// This test suite is about the interaction with the menu.
	describe('The menu', () => {

		let menu;

		// Before all specs, it selects the menu.
		beforeAll(() => {
			menu = document.querySelector('.menu-icon-link');
		});

		/* This spec should ensure that the body has the
		 * menu-hidden class by default.
		 */
		it('should ensure that the body has the menu-hidden class by default', () => {
			expect(document.body).toHaveClass('menu-hidden');
		});

		/* This spec should ensure that the menu-hidden class of the
		 * body is toggled when the menu icon is clicked.
		 */
		it('should ensure that the menu toggles when the menu icon is clicked', () => {
			menu.click();
			expect(document.body).not.toHaveClass('menu-hidden');
			menu.click();
			expect(document.body).toHaveClass('menu-hidden');
		});
	});


	// This test suite is about initial entries.
	describe('Initial Entries', () => {

		// It loads the a feed.
		beforeEach(done => {
			loadFeed(0, done);
		});

		/* This spec should ensure that when the loadFeed
		 * function is called and completes its work, there is at least
		 * a single .entry element within the .feed container.
		 */
		it('should ensure that at least a single entry is loaded', done => {
			expect(document.querySelectorAll('.feed .entry').length).toBeGreaterThan(0);
			done();
		});
	});


	// This test suite is about the selection of a new feed.
	describe('New Feed Selection', () => {

		let newFeed, oldFeed;

		// Before all specs, it clears all feeds.
		beforeAll(() => {
			document.querySelector('.feed').innerHTML = '';
		});

		// Before each spec, it loads two different specs.
		beforeEach(done => {
			loadFeed(0, () => {
				// It loads one feed
				oldFeed = document.querySelector('.feed').innerHTML;
				loadFeed(1, () => {
					// It loads another feed
					newFeed = document.querySelector('.feed').innerHTML;
					done();
				});
			});
		});

		/* TODO: Write a test that ensures when a new feed is loaded
		 * by the loadFeed function that the content actually changes.
		 * Remember, loadFeed() is asynchronous.
		 */
		it('should ensure that when a new feed is loaded, the content actually changes', done => {
			expect(newFeed).not.toBe(oldFeed);
			done();
		});
	});

}());