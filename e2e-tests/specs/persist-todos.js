describe( 'Test suite for inserting todos', function() {

	// Go to the main page
	browser.get('index.html');

	var page = {
		input: null,
		todosList: null
	}

	beforeEach( function() {
		// Main input field
		page.input = element( by.model('newTodo') );
		page.todosList = element.all( by.repeater( 'todo in todos' ) )
	} );

	it( 'Should insert correctly a todo at the list', function() {

		// List should be empty
		expect( page.todosList.count() ).toBe( 0 );

		var todoText = 'testing todos';

		page.input.sendKeys( todoText );
		page.input.sendKeys( protractor.Key.ENTER );

		// Text field should have ben cleaned
		expect( page.input.getText() ).toEqual( '' );

		// Our list should have a todo now
		expect( page.todosList.count() ).toBe( 1 );

		// Well... this todo is exactly what we meant to be
		expect( page.todosList.first().getText() ).toEqual( todoText );

	} );

	it( 'Should mark a task as completed', function() {

	} );

	it( 'Should correctly count items at the bottom', function() {
		// insert three items, check 1 as completed

	} );

	it( 'Should run filters correctly', function() {

	} );

	//exitit( 'Should ' );

	it( 'Should delete an existing TODO', function() {
		var delBtn = page.todosList.all( by.css( 'button' ) ).first();

		// The delete button should be visible to succesfuly click on it
		browser.actions().mouseMove( page.todosList.first() ).perform();

		// Asking to finally delete the register
		delBtn.click();

		// after that our list should be empty :D
		expect( page.todosList.count() ).toEqual( 0 );
	} );

} );