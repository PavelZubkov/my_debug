namespace $.$$ {

	export class $my_debug extends $.$my_debug {

		@ $mol_mem
		event_submit() {
			return $mol_atom2_autorun( ()=> {
				console.log('auth')
				const persons = this.domain().person_ids().map( id => this.domain().person( id ) )
				const user = persons.find( person => person.email() === this.email() )
				
				if ( !user ) {
					console.log('User not found')
					return false
				}
				if ( user.hash() !== this.pass() ) {
					console.log('Password wrong')
					return false
				}
					
				console.log('success')
				return user
			} )
		}
		
	}

}
