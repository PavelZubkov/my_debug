namespace $.$$ {

	export class $my_debug extends $.$my_debug {

		@ $mol_mem
		options() {
			return Object.fromEntries( this.list().map( option => [option, option] ) )
		}

		@ $mol_mem
		options_enabled() {
			return 'enabled: ' + this.list().filter( option => this.checked(option) )
		}

	}

}
