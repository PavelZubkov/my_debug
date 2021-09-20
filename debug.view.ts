namespace $.$$ {

	export class $my_debug extends $.$my_debug {

		@ $mol_fiber.method
		event_submit() {
			console.log('auth')
			const persons = this.domain().person_ids().map( id => this.domain().person( id ) )
			const user = persons.find( person => person.email() === this.email() )
			
			if ( !user ) return console.log('User not found')
			if ( user.hash() !== this.pass() ) return console.log('Password wrong')
				
			console.log('success')
		}
		
	}

}
